#!/usr/bin/env bun
import chalk from 'chalk';
import ora from 'ora';
import { config, getDemoWallet, setDemoWallet } from './config';
import { createWalletFromSeed, generateRandomSeed, getWalletAddress } from './wallet-utils';
import { WalletBuilder } from '@midnight-ntwrk/wallet';
import { getZswapNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { nativeToken } from '@midnight-ntwrk/ledger';
import { firstValueFrom } from 'rxjs';
import * as Rx from 'rxjs';

async function requestDust(address: string): Promise<void> {
  const spinner = ora('Requesting DUST from faucet...').start();
  
  try {
    // Check network mode
    if (config.networkMode !== 'standalone') {
      throw new Error('Faucet is only available in standalone mode');
    }
    
    spinner.text = 'Initializing genesis wallet...';
    
    // In standalone mode, use the known genesis wallet seed
    const genesisSeed = '0000000000000000000000000000000000000000000000000000000000000001';
    
    // Create genesis wallet
    const genesisWallet = await WalletBuilder.build(
      config.indexerUrl,
      config.indexerWsUrl,
      config.proofServerUrl,
      config.nodeUrl,
      genesisSeed,
      getZswapNetworkId(),
      'info'
    );
    
    genesisWallet.start();
    
    // Wait for wallet to sync
    spinner.text = 'Waiting for genesis wallet to sync...';
    try {
      await waitForWalletSync(genesisWallet);
    } catch (syncError) {
      throw new Error('Genesis wallet sync timeout - is the Midnight node running?');
    }
    
    spinner.text = 'Sending DUST...';
    
    // Send 10 DUST to the address
    const amount = '10000000000'; // 10 DUST in smallest units
    
    // Create transfer transaction
    const unprovenTx = await genesisWallet.transferTransaction([
      {
        amount: BigInt(amount),
        type: nativeToken(),
        receiverAddress: address,
      },
    ]);
    
    // Prove the transaction
    const tx = await genesisWallet.proveTransaction(unprovenTx);
    
    // Submit the transaction
    const txHash = await genesisWallet.submitTransaction(tx);
    
    spinner.succeed(chalk.green('DUST sent successfully!'));
    console.log(chalk.blue('\n💰 Faucet Details:'));
    console.log(chalk.gray('  Recipient:'), address);
    console.log(chalk.gray('  Amount:'), '10 DUST');
    console.log(chalk.gray('  Network:'), config.networkMode);
    console.log(chalk.gray('  Transaction:'), txHash);
    
    // Close genesis wallet
    await genesisWallet.close();
    
  } catch (error) {
    spinner.fail(chalk.red('Failed to get DUST'));
    
    console.log(chalk.yellow('\n📝 Faucet error details:'));
    console.log(chalk.gray('Make sure the Midnight standalone node is running'));
    console.log(chalk.gray('Check that the genesis wallet has funds'));
    
    throw error;
  }
}

// Get wallet address from in-memory wallet or create new one
async function getWalletAddressForFaucet(): Promise<string> {
  const { wallet } = getDemoWallet();
  
  if (wallet) {
    return await getWalletAddress(wallet);
  }
  
  // Create a new wallet if none exists
  const seedPhrase = generateRandomSeed();
  console.log(chalk.yellow('\n🔑 Generated new seed phrase (save this!):'));
  console.log(chalk.cyan(seedPhrase));
  
  const newWallet = await createWalletFromSeed(seedPhrase);
  newWallet.start();
  setDemoWallet(newWallet, seedPhrase);
  
  const address = await getWalletAddress(newWallet);
  console.log(chalk.gray('\n📬 Wallet address:'), chalk.cyan(address));
  
  return address;
}

// Main execution
// Check if this file is being run directly
const isMainModule = process.argv[1] === new URL(import.meta.url).pathname;
if (isMainModule) {
  try {
    const address = process.argv[2] || await getWalletAddressForFaucet();
    await requestDust(address);
  } catch (error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
}

// Helper function to wait for wallet sync
async function waitForWalletSync(wallet: any): Promise<void> {
  await firstValueFrom(
    wallet.state().pipe(
      Rx.throttleTime(2000),
      Rx.filter((state: any) => {
        return state.syncProgress !== undefined && state.syncProgress.synced;
      }),
      Rx.timeout(30000) // 30 second timeout
    )
  );
}

export { requestDust };