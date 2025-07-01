# Midnight Token Standard (MTS)

A comprehensive token standard for the Midnight blockchain that enables the creation and management of both fungible and non-fungible tokens with fully on-chain metadata.

## Overview

The Midnight Token Standard (MTS) provides a unified framework for creating tokens on the Midnight network. It addresses the unique characteristics of Midnight's architecture while drawing inspiration from established standards like ERC-20, ERC-721, ERC-1155, and Cardano's CIP standards.

### Key Features

- **Dual Token Types**: Support for both non-programmable (native) and programmable (contract-managed) tokens
- **On-Chain Metadata**: All token attributes stored directly on-chain for permanence
- **Media References**: Efficient URI-based system for images and media files (IPFS, HTTPS, Arweave)
- **Privacy-Ready**: Designed with Midnight's privacy features in mind
- **Multi-Token Support**: Single contract can manage multiple token types
- **Version Tracking**: Built-in versioning for future extensibility

## Repository Structure

```
midnight-nft-standard/
├── PROPOSAL.md           # Detailed design philosophy and technical specification
├── token_standard.pdf    # Formatted specification document
├── token_standard.typ    # Source for PDF generation
├── assets/              # Images and branding assets
└── examples/            # Implementation examples
    └── cli-demo/        # Complete CLI demonstration
```

## The Standard

### Metadata Structure

MTS stores comprehensive metadata on-chain while keeping media files accessible via URIs:

```typescript
struct Metadata {
    name: Bytes<32>;              // Token name (REQUIRED)
    symbol: Maybe<Bytes<10>>;     // Token symbol
    decimals: Maybe<Uint<8>>;     // Decimal places (for fungible tokens)
    description: Maybe<Bytes<256>>; // Token description
    image: Maybe<Bytes<256>>;     // Primary image URI
    mediaType: Maybe<Bytes<32>>;  // MIME type of primary image
    version: Uint<16>;            // MTS version number
}
```

### Token Types

**Non-Programmable Tokens**
- Held directly in user wallets
- Minimal contract interaction
- Ideal for: Simple NFTs, fungible tokens, loyalty points

**Programmable Tokens**
- Contract retains custody
- Custom transfer logic
- Ideal for: Gaming assets, regulated tokens, complex DeFi protocols

## CLI Demo

The `examples/cli-demo` directory contains a complete implementation showcasing the MTS standard.

### Prerequisites

- [Bun](https://bun.sh/) runtime
- Midnight standalone node running
- Midnight Compact compiler (`compactc`)

### Quick Start

```bash
# Navigate to the demo
cd examples/cli-demo

# Install dependencies
bun install

# Compile the smart contract
bun run contracts:compile

# Run the complete demo
bun run demo
```

The demo will:
1. Generate a new wallet and display the seed phrase
2. Request 10 DUST from the faucet
3. Deploy an MTS-compliant NFT contract
4. Mint an NFT with metadata
5. Query and display the minted NFT

### Individual Commands

You can also run commands separately:

```bash
# Deploy a new contract
bun run src/index.ts deploy "My Collection"

# Mint an NFT
bun run src/index.ts mint "My NFT" --symbol "MNT" --description "A cool NFT"

# Query token metadata
bun run src/index.ts query <token-id>
```

## Implementation Guide

### Basic Contract Structure

```typescript
// Common state for all MTS contracts
export ledger project_name: Opaque<"string">;
export ledger metadata: Map<Bytes<32>, Metadata>;
export ledger total_supply: Map<Bytes<32>, Uint<128>>;
export ledger is_programmable: Boolean;

// Constructor
constructor(nonce: Bytes<32>, project_name: Opaque<"string">) {
    // Initialize contract
}

// Mint function
export circuit mint(
    name: Bytes<32>,
    symbol: Maybe<Bytes<10>>,
    description: Maybe<Bytes<256>>,
    image: Maybe<Bytes<256>>,
    mediaType: Maybe<Bytes<32>>
): Bytes<32> {
    // Mint implementation
}
```

### Using the Standard

1. **Choose Token Type**: Decide between programmable and non-programmable
2. **Implement Interface**: Follow the MTS specification for state and functions
3. **Handle Metadata**: Store all attributes on-chain, use URIs for media
4. **Version Appropriately**: Set version to 1 for MTS v1 compliance

## Design Philosophy

MTS takes a hybrid approach balancing several considerations:

- **Permanence**: Core metadata lives on-chain forever
- **Efficiency**: Media files use appropriate external storage
- **Flexibility**: Support for various token implementations
- **Compatibility**: Familiar patterns from other ecosystems
- **Innovation**: Leverages Midnight's unique capabilities

### Comparison with Other Standards

| Feature | MTS | ERC-721 | CIP-25 | ERC-1155 |
|---------|-----|---------|--------|----------|
| Metadata Storage | On-chain | Off-chain URI | On-chain | Off-chain URI |
| Multi-token | ✓ | ✗ | ✗ | ✓ |
| Native Tokens | ✓ | ✗ | ✓ | ✗ |
| Privacy Features | ✓ | ✗ | ✗ | ✗ |

## Future Considerations

- **Privacy Integration**: Full incorporation of Midnight's privacy features
- **Advanced Metadata**: Support for complex nested structures
- **Cross-Chain Compatibility**: Bridging to other networks
- **Governance Features**: DAO and voting capabilities

## Contributing

We welcome contributions to improve the MTS! Areas of interest:

- Implementation examples in different languages
- Testing frameworks
- Documentation improvements
- Security audits
- Feature proposals

## Resources

- [Midnight Network Documentation](https://docs.midnight.network)
- [PROPOSAL.md](./PROPOSAL.md) - Detailed technical specification
- [CLI Demo](./examples/cli-demo) - Working implementation

## License

This project is part of the Midnight ecosystem. See LICENSE for details.

---

**Built by SAIB, Inc. on behalf of NMKR**