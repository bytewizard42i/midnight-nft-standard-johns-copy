# Midnight Token Standard (MTS) - Design Philosophy & Proposal

## Current Approach

The Midnight Token Standard (MTS) takes a hybrid approach to token metadata, balancing on-chain permanence with practical storage considerations:

### Core Principles

1. **All metadata attributes on-chain**: Token name, symbol, description, and other textual metadata are stored directly on the Midnight blockchain
2. **Media files via URIs**: Images and other media use URI references (IPFS, HTTPS, Arweave) rather than embedding content
3. **Dual token types**: Supporting both non-programmable (native) and programmable (contract-managed) tokens
4. **Multi-token contracts**: Single contract can manage multiple token types (like ERC-1155)

### Current Metadata Structure

```typescript
struct Metadata {
    name: Bytes<32>;
    symbol: Maybe<Bytes<10>>;
    decimals: Maybe<Uint<8>>;
    description: Maybe<Bytes<256>>;
    image: Maybe<Bytes<256>>;    // URI reference
    mediaType: Maybe<Bytes<32>>;
    files: Maybe<Vector<MediaFile, 5>>;
    attributes: Maybe<Map<Bytes<32>, Bytes<128>, 20>>;
    version: Uint<16>;  // Currently using strict versioning
}
```

## Extensibility Considerations

### Current Challenge: Strict Versioning

Our current approach uses a `version` field (Uint<16>) which implies:
- Fixed metadata schema per version
- Potential fragmentation as different versions emerge
- Updates require formal standard revision

### CIP-100 Philosophy: Organic Extensibility

CIP-100 introduces an elegant approach using JSON-LD contexts:
- No version numbers - uses `@context` for semantic meaning
- Anyone can extend without permission
- Tools gracefully handle unknown fields
- Promotes innovation over control

### Potential Hybrid Approach for MTS

Given Midnight's Compact language constraints and typed nature, we could consider:

1. **Replace version with context identifier**
   ```typescript
   context: Maybe<Bytes<64>>;  // URI or identifier for metadata schema
   ```

2. **Add extensions field**
   ```typescript
   extensions: Maybe<Map<Bytes<32>, Bytes<512>, 10>>;  // For future fields
   ```

3. **Maintain core required fields** while allowing organic growth through extensions

## Benefits of This Approach

1. **Permanence**: Core metadata remains on-chain
2. **Efficiency**: Media files use appropriate external storage
3. **Flexibility**: Extensions field allows organic growth
4. **Compatibility**: Tools can always display core fields
5. **Innovation**: Developers can experiment without waiting for standard updates

## Open Questions

1. Should we completely remove versioning in favor of contexts?
2. How to handle type safety with extensible metadata in Compact?
3. What's the best way to document extension standards?
4. Should we define a registry for common extensions?

## Next Steps

1. Gather community feedback on extensibility needs
2. Evaluate technical constraints of Compact language
3. Consider pilot implementations with extension support
4. Define guidelines for extension development

## Related Standards

- **CIP-25**: Cardano NFT metadata (inspiration for on-chain approach)
- **CIP-68**: Datum metadata standard
- **CIP-100**: Governance metadata (extensibility philosophy)
- **ERC-1155**: Multi-token standard (architectural inspiration)

---

*This proposal reflects the current thinking on MTS design, balancing the structured nature of Midnight's Compact language with the need for future extensibility.*