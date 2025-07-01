#!/usr/bin/env bun
import chalk from 'chalk';
import ora from 'ora';
import { config, getDemoWallet, setDemoWallet } from './config';
import { createWalletFromSeed, generateRandomSeed, getWalletAddress } from './wallet-utils';
import { requestDust } from './get-dust';
import { deployContract, findDeployedContract } from '@midnight-ntwrk/midnight-js-contracts';
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';
import { NodeZkConfigProvider } from '@midnight-ntwrk/midnight-js-node-zk-config-provider';
import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { firstValueFrom } from 'rxjs';
import * as Rx from 'rxjs';
import { nativeToken } from '@midnight-ntwrk/ledger';
import { join } from 'path';
import { Transaction as ZswapTransaction } from '@midnight-ntwrk/zswap';
import { getZswapNetworkId, getLedgerNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { Transaction } from '@midnight-ntwrk/ledger';
import {
  createBalancedTx,
  type BalancedTransaction,
  type MidnightProvider,
  type UnbalancedTransaction,
  type WalletProvider,
} from '@midnight-ntwrk/midnight-js-types';
import type { CoinInfo, TransactionId } from '@midnight-ntwrk/ledger';

// Import the compiled contract
// @ts-ignore - Compiled contract may not exist yet
const { Contract, ledger } = require('../dist/mts-nft/contract/index.cjs');

async function runCompleteDemo() {
  console.log(chalk.blue(`
🌙 Midnight Token Standard - Complete Demo
==========================================
`));

  let wallet: any;
  let contractAddress: string | null = null;
  let tokenId: string | null = null;

  try {
    // Step 1: Create wallet
    console.log(chalk.yellow('\n📍 Step 1: Creating wallet...'));
    const spinner = ora('Generating new wallet...').start();
    
    const seedPhrase = generateRandomSeed();
    console.log(chalk.yellow('\n🔑 Generated seed phrase (save this!):'));
    console.log(chalk.cyan(seedPhrase));
    
    wallet = await createWalletFromSeed(seedPhrase);
    wallet.start();
    setDemoWallet(wallet, seedPhrase);
    
    const address = await getWalletAddress(wallet);
    console.log(chalk.gray('\n📬 Wallet address:'), chalk.cyan(address));
    spinner.succeed('Wallet created');

    // Step 2: Get funding
    console.log(chalk.yellow('\n📍 Step 2: Getting DUST from faucet...'));
    await requestDust(address);
    
    // Wait for wallet to sync
    const syncSpinner = ora('Waiting for wallet to sync...').start();
    await firstValueFrom(
      wallet.state().pipe(
        Rx.throttleTime(2000),
        Rx.filter((state: any) => {
          const balance = state.balances?.[nativeToken()] || 0n;
          return balance > 0n;
        }),
        Rx.timeout(30000)
      )
    );
    syncSpinner.succeed('Wallet synced');

    // Step 3: Deploy contract
    console.log(chalk.yellow('\n📍 Step 3: Deploying NFT contract...'));
    const deploySpinner = ora('Deploying MTS NFT contract...').start();
    
    // Create providers
    const state = await firstValueFrom(wallet.state());
    const walletAndMidnightProvider: WalletProvider & MidnightProvider = {
      coinPublicKey: state.coinPublicKey,
      encryptionPublicKey: state.encryptionPublicKey,
      balanceTx(tx: UnbalancedTransaction, newCoins: CoinInfo[]): Promise<BalancedTransaction> {
        return wallet
          .balanceTransaction(
            ZswapTransaction.deserialize(tx.serialize(getLedgerNetworkId()), getZswapNetworkId()),
            newCoins
          )
          .then((tx: any) => wallet.proveTransaction(tx))
          .then((zswapTx: any) =>
            Transaction.deserialize(zswapTx.serialize(getZswapNetworkId()), getLedgerNetworkId())
          )
          .then(createBalancedTx);
      },
      submitTx(tx: BalancedTransaction): Promise<TransactionId> {
        return wallet.submitTransaction(tx);
      },
    };
    
    const providers = {
      walletProvider: walletAndMidnightProvider,
      midnightProvider: walletAndMidnightProvider,
      publicDataProvider: indexerPublicDataProvider(config.indexerUrl, config.indexerWsUrl),
      privateStateProvider: levelPrivateStateProvider({
        privateStateStoreName: 'mts-demo-private-state'
      }),
      zkConfigProvider: new NodeZkConfigProvider(join(process.cwd(), 'dist', 'mts-nft')),
      proofProvider: httpClientProofProvider(config.proofServerUrl)
    };
    
    // Deploy contract
    const nonce = new Uint8Array(32);
    crypto.getRandomValues(nonce);
    
    const contract = new Contract({});
    const deployedContract = await deployContract(
      providers,
      {
        contract,
        privateStateId: 'mts-demo',
        initialPrivateState: {},
        args: [nonce, "MTS Demo Collection"]
      }
    );
    
    contractAddress = deployedContract.deployTxData.public.contractAddress;
    deploySpinner.succeed('Contract deployed');
    console.log(chalk.gray('Contract address:'), chalk.cyan(contractAddress));

    // Step 4: Mint NFT
    console.log(chalk.yellow('\n📍 Step 4: Minting NFT...'));
    const mintSpinner = ora('Minting NMKR Demo NFT...').start();
    
    // Find the deployed contract
    const foundContract = await findDeployedContract(
      providers,
      {
        contractAddress,
        contract: new Contract({}),
        privateStateId: 'mts-demo',
        initialPrivateState: {}
      }
    );
    
    // Prepare mint arguments
    const nameBytes = new TextEncoder().encode("NMKR Demo NFT");
    const name = new Uint8Array(32);
    name.set(nameBytes.slice(0, 32));
    
    const symbolBytes = new Uint8Array(10);
    const symbol = { is_some: true, value: symbolBytes };
    const symbolEncoded = new TextEncoder().encode("NMKR");
    symbolBytes.set(symbolEncoded);
    
    const descriptionBytes = new Uint8Array(256);
    const description = { is_some: true, value: descriptionBytes };
    const descEncoded = new TextEncoder().encode("NFT minted via MTS CLI Demo - Showcasing the Midnight Token Standard!");
    descriptionBytes.set(descEncoded.slice(0, 256));
    
    const imageBytes = new Uint8Array(256);
    const image = { is_some: true, value: imageBytes };
    const imageEncoded = new TextEncoder().encode("ipfs://bafkreigixbdml6qgupwzr44adauubxrx3clmb2434rebc5vp2n6lfysu34");
    imageBytes.set(imageEncoded.slice(0, 256));
    
    const mediaTypeBytes = new Uint8Array(32);
    const mediaType = { is_some: true, value: mediaTypeBytes };
    const mediaTypeEncoded = new TextEncoder().encode("image/png");
    mediaTypeBytes.set(mediaTypeEncoded);
    
    // Mint the NFT
    const result = await foundContract.callTx.mint(
      name,
      symbol,
      description,
      image,
      mediaType
    );
    
    // Extract token ID
    if (result && typeof result === 'object') {
      const checks = [
        result.private?.circuitOutputs?.[0],
        result.private?.result,
        result.public?.effects?.mints,
      ];
      
      for (const check of checks) {
        if (check instanceof Uint8Array && check.length === 32) {
          tokenId = Buffer.from(check).toString('hex');
          break;
        } else if (check && typeof check === 'object') {
          const keys = Object.keys(check);
          if (keys.length > 0) {
            const tokenColorHex = keys[0];
            if (typeof tokenColorHex === 'string' && tokenColorHex.length === 64) {
              tokenId = tokenColorHex;
              break;
            }
          }
        }
      }
    }
    
    if (!tokenId) {
      throw new Error('Unable to extract token ID from mint result');
    }
    
    mintSpinner.succeed('NFT minted successfully');
    console.log(chalk.gray('Token ID:'), chalk.cyan('0x' + tokenId));

    // Step 5: Query metadata
    console.log(chalk.yellow('\n📍 Step 5: Querying NFT metadata...'));
    const querySpinner = ora('Fetching metadata...').start();
    
    // Query the contract state
    const contractState = await providers.publicDataProvider.queryContractState(contractAddress);
    
    if (!contractState?.data) {
      throw new Error('Contract state not found');
    }
    
    const parsedLedger = ledger(contractState.data);
    
    // Convert token ID to Uint8Array
    const tokenColor = new Uint8Array(Buffer.from(tokenId, 'hex'));
    
    // Check if metadata exists for this token
    if (!(parsedLedger as any).metadata.member(tokenColor)) {
      throw new Error(`Token ${tokenId} not found in contract`);
    }
    
    // Get the metadata using lookup
    const metadata = (parsedLedger as any).metadata.lookup(tokenColor);
    
    const projectName = parsedLedger.projectName || parsedLedger.project_name;
    const totalSupply = (parsedLedger as any).totalSupply?.member(tokenColor) 
      ? (parsedLedger as any).totalSupply.lookup(tokenColor) 
      : 1;
    const isProgrammable = parsedLedger.isProgrammable || parsedLedger.is_programmable;
    
    querySpinner.succeed('Metadata retrieved');
    
    // Display results
    console.log(chalk.blue('\n🎉 Demo Complete!'));
    console.log(chalk.blue('================\n'));
    
    console.log(chalk.yellow('📋 Contract Details:'));
    console.log(chalk.gray('  Address:'), chalk.cyan(contractAddress));
    console.log(chalk.gray('  Project:'), projectName);
    console.log(chalk.gray('  Type:'), isProgrammable ? 'Programmable' : 'Non-programmable');
    
    console.log(chalk.yellow('\n🎨 NFT Metadata:'));
    console.log(chalk.gray('  Token ID:'), chalk.cyan('0x' + tokenId));
    
    // Handle the metadata structure like nmkr-midnight-api does
    const metadataAny = metadata as any;
    console.log(chalk.gray('  Name:'), new TextDecoder().decode(metadataAny.name).replace(/\0/g, ''));
    
    if (metadataAny.symbol?.is_some) {
      console.log(chalk.gray('  Symbol:'), new TextDecoder().decode(metadataAny.symbol.value).replace(/\0/g, ''));
    }
    
    if (metadataAny.description?.is_some) {
      console.log(chalk.gray('  Description:'), new TextDecoder().decode(metadataAny.description.value).replace(/\0/g, ''));
    }
    
    if (metadataAny.image?.is_some) {
      console.log(chalk.gray('  Image:'), new TextDecoder().decode(metadataAny.image.value).replace(/\0/g, ''));
    }
    
    if (metadataAny.mediaType?.is_some) {
      console.log(chalk.gray('  Media Type:'), new TextDecoder().decode(metadataAny.mediaType.value).replace(/\0/g, ''));
    }
    
    console.log(chalk.gray('  MTS Version:'), metadataAny.version);
    console.log(chalk.gray('  Total Supply:'), totalSupply.toString());
    
    console.log(chalk.green('\n✅ All steps completed successfully!'));
    
  } catch (error: any) {
    console.error(chalk.red('\n❌ Demo failed:'), error.message);
    process.exit(1);
  } finally {
    if (wallet) {
      await wallet.close();
    }
  }
}

// Run the demo
if (process.argv[1] === new URL(import.meta.url).pathname) {
  runCompleteDemo();
}

export { runCompleteDemo };