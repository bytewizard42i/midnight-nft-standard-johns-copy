import type { Wallet } from '@midnight-ntwrk/wallet-api';
import type { Resource } from '@midnight-ntwrk/wallet';

export const config = {
  indexerUrl: process.env.INDEXER_URL || 'http://127.0.0.1:10002/api/v1/graphql',
  indexerWsUrl: process.env.INDEXER_WS_URL || 'ws://127.0.0.1:10002/api/v1/graphql/ws',
  nodeUrl: process.env.NODE_URL || 'http://127.0.0.1:10003',
  proofServerUrl: process.env.PROOF_SERVER_URL || 'http://127.0.0.1:10001',
  networkMode: process.env.NETWORK_MODE || 'standalone',
  seedPhrase: process.env.SEED_PHRASE || '',
  nftContractAddress: process.env.NFT_CONTRACT_ADDRESS || ''
};

// In-memory storage for demo wallet
let demoWallet: (Wallet & Resource) | null = null;
let demoSeedPhrase: string | null = null;

export function setDemoWallet(wallet: Wallet & Resource, seedPhrase: string) {
  demoWallet = wallet;
  demoSeedPhrase = seedPhrase;
}

export function getDemoWallet(): { wallet: (Wallet & Resource) | null; seedPhrase: string | null } {
  return { wallet: demoWallet, seedPhrase: demoSeedPhrase };
}

// Validate required config
export function validateConfig() {
  // Seed phrase is now optional - will be generated on the fly
}