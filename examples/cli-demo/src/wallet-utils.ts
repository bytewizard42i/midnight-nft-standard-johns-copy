import { WalletBuilder, type Resource } from '@midnight-ntwrk/wallet';
import type { Wallet } from '@midnight-ntwrk/wallet-api';
import { getZswapNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import * as bip39 from 'bip39';
import * as ecc from 'tiny-secp256k1';
import { BIP32Factory } from 'bip32';
import { firstValueFrom } from 'rxjs';
import { config } from './config';

// Initialize BIP32
const bip32 = BIP32Factory(ecc);

export async function createWalletFromSeed(seedPhrase: string): Promise<Wallet & Resource> {
  if (!seedPhrase || seedPhrase.trim().length === 0) {
    throw new Error('Seed phrase is required');
  }

  const words = seedPhrase.trim().split(' ');
  if (words.length !== 12 && words.length !== 24) {
    throw new Error('Seed phrase must be 12 or 24 words');
  }

  // Convert mnemonic to seed using BIP32 derivation
  const seedBytes = bip39.mnemonicToSeedSync(seedPhrase);
  const root = bip32.fromSeed(seedBytes);
  const child = root.deriveHardened(0);

  if (!child.privateKey) {
    throw new Error('Failed to derive private key from BIP32 seed');
  }

  const seedHex = Buffer.from(child.privateKey).toString('hex');

  // Create wallet from derived seed
  const wallet = await WalletBuilder.build(
    config.indexerUrl,
    config.indexerWsUrl,
    config.proofServerUrl,
    config.nodeUrl,
    seedHex,
    getZswapNetworkId(),
    'info'
  );

  return wallet;
}

export function generateRandomSeed(): string {
  // Generate a new BIP39 mnemonic (24 words for better security)
  return bip39.generateMnemonic(256);
}

export async function getWalletAddress(wallet: Wallet): Promise<string> {
  // Get the wallet's public address using firstValueFrom to get the observable value
  const state = await firstValueFrom(wallet.state());
  return state.address || '';
}