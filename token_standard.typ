#let project(title: "", authors: "", date: none, company: none, logo: none, body) = {
  // Document setup
  set document(author: authors, title: title)
  set page(
    margin: (left: 50pt, right: 50pt, top: 60pt, bottom: 60pt),
    numbering: "1",
    header: align(right)[
      #text(fill: rgb("#888888"), size: 9pt, "MTS: Midnight Token Standard")
    ],
  )

  // Font configuration - using better typography
  set text(font: "Outfit", size: 10pt, weight: "regular")
  show heading: set text(font: "Outfit", weight: "semibold")
  show heading.where(level: 1): set text(size: 24pt)
  show heading.where(level: 2): set text(size: 18pt, fill: rgb("#0f1624"))
  show heading.where(level: 3): set text(size: 13pt, fill: rgb("#0f1624"))
  show heading.where(level: 4): set text(size: 11pt, fill: rgb("#0f1624"))

  // Colors
  let midnight-blue = rgb("#0f1624")
  let midnight-accent = rgb("#4761FF")
  let light-grey = rgb("#f7f7f7")

  // Title page
  page(numbering: none, header: none, margin: (left: 50pt, right: 50pt, top: 60pt, bottom: 60pt))[
    // Logo at the top
    #if logo != none [
      #align(center)[#image(logo, width: 120pt)]
    ]

    // Add a large vertical space to push content to middle
    #v(8em)

    // Group title and authors closer together in the middle/lower section
    #align(center)[
      #block(text(font: "Outfit", weight: "bold", size: 32pt, fill: midnight-blue, title))

      // Reduced spacing between title and authors
      #v(2em)

      // Author information with smaller spacing
      #text(size: 9pt)[
        Clark Alesna #link("mailto:clark@saib.dev`")[`clark@saib.dev`] \
        Rj Lacanlale #link("mailto:rjlacanlale@saib.dev`")[`rjlacanlale@saib.dev`]
      ]

      // Reduced spacing for date
      #v(1em)
      #text(font: "Outfit", size: 10pt)[#date]

      #if company != none [
        #v(1.5em)
        #text(font: "Outfit", size: 12pt, style: "italic")[Prepared by SAIB, Inc. on behalf of NMKR]
      ]
    ]
  ]

  // Main content
  set par(justify: true)
  body
}

// Custom styling for code blocks
#show raw.where(block: true): block.with(
  fill: rgb("#f6f8fa"),
  inset: 12pt,
  radius: 5pt,
  width: 100%,
)

// Custom styling for tips and warnings
#let tip(body) = block(
  fill: rgb("#eef6ff"),
  inset: 15pt,
  radius: 5pt,
  width: 100%,
)[
  #text(font: "Outfit", weight: "bold", size: 10pt, fill: rgb("#4761FF"))[💡 Tip: ]#body
]

#let warning(body) = block(
  fill: rgb("#fff8e6"),
  inset: 15pt,
  radius: 5pt,
  width: 100%,
)[
  #text(font: "Outfit", weight: "bold", size: 10pt, fill: rgb("#ff9800"))[⚠️ Warning: ]#body
]

#let key-insight(body) = block(
  fill: rgb("#e8f5e9"),
  inset: 15pt,
  radius: 5pt,
  width: 100%,
)[
  #text(font: "Outfit", weight: "bold", size: 10pt, fill: rgb("#4caf50"))[🔑 Key Insight: ]#body
]

// Highlight text in blue
#let highlight(body) = text(fill: rgb("#4761FF"), weight: "medium", body)

// Document starts here
#project(
  title: "Midnight Token Standard",
  authors: "Clark Alesna, Rj Lacanlale",
  date: [May 5, 2025],
  company: true,
  logo: "/assets/nmkr.svg",
)[
  #set par(leading: 0.65em)

  == Abstract

  The #highlight[Midnight Token Standard (MTS)] defines a comprehensive framework for creating and managing both fungible and non-fungible tokens on the Midnight network. This standard supports two distinct token types: #highlight[non-programmable tokens] that exist directly in user wallets with minimal contract interaction, and #highlight[programmable tokens] that implement complex behaviors through contract-based custody and logic. MTS stores all token metadata attributes directly on-chain while media files are referenced via URIs, ensuring metadata permanence while maintaining storage efficiency. MTS leverages Midnight's native privacy features to enable selective disclosure of token data while maintaining compatibility with established token standards from other blockchain ecosystems. By providing a unified interface for various token implementations with fully on-chain metadata, MTS aims to simplify token creation and management while supporting advanced use cases that require privacy-preserving functionality.

  #v(1em)
  == Introduction

  Tokens on the Midnight network are #highlight[first-class citizens], meaning they exist natively in the ledger similar to native assets on Cardano. This represents a fundamental difference from token implementations on Ethereum, where tokens are implemented as entries in smart contract storage. While native tokens provide efficiency advantages, they traditionally lack the programmability and flexibility offered by contract-based token systems. However, Cardano has addressed this limitation through #highlight[CIP-143], which introduces programmability for native tokens

  The #highlight[Midnight Token Standard (MTS)] addresses this limitation by providing a unified interface for both #highlight[non-programmable tokens] and #highlight[programmable tokens]. This approach gives developers the freedom to choose the token implementation that best suits their specific use case, balancing simplicity, efficiency, and functional requirements.

  MTS draws inspiration from established token standards across blockchain ecosystems, including #highlight[ERC-20], #highlight[ERC-721], and #highlight[ERC-1155] on Ethereum, as well as the Cardano token standards (#highlight[CIP-25], #highlight[CIP-68], and #highlight[CIP-143]). By adopting familiar interfaces and patterns where appropriate, MTS aims to facilitate cross-ecosystem integration and developer onboarding.

  #v(0.5em)
  == Midnight Network Architecture

  The Midnight network's architecture provides several technical capabilities that influence this token standard:

  - *#highlight[Native Token Support]*: Tokens exist as first-class citizens in the protocol rather than as smart contract mappings
  - *#highlight[Privacy Mechanisms]*: Zero-knowledge proofs enable selective disclosure of transaction data
  - *#highlight[Programmable Circuits]*: Smart contracts can implement complex logic while preserving privacy properties
  - *#highlight[Compact Language]*: A TypeScript-based domain-specific language designed for implementing privacy-preserving smart contracts

  #v(0.5em)
  == Token Types

  MTS defines two distinct token types:

  === Non-Programmable Tokens

  #highlight[Non-programmable tokens] are similar to native assets with minimal contract involvement:

  #block(
    fill: rgb("#f9f9fd"),
    inset: 15pt,
    radius: 5pt,
    width: 100%,
  )[
    - *Direct ownership*: Tokens are held directly in user wallets
    - *Simple transfers*: Transfers occur directly between wallets without contract execution
    - *Metadata tracking*: The contract maintains token metadata and total supply information
    - *Efficiency*: Reduced computational overhead for token operations
    - *Ideal use cases*: Fungible tokens, simple NFTs, financial assets, loyalty points
  ]

  === Programmable Tokens

  #warning[
    As of the time of writing, it is not yet technically possible for Midnight contracts to hold tokens other than DUST. Therefore, programmable tokens that require contract custody may not be implementable until this capability is added in future network updates.
  ]

  #highlight[Programmable tokens] leverage contract capabilities for advanced behaviors:

  #block(
    fill: rgb("#f9f9fd"),
    inset: 15pt,
    radius: 5pt,
    width: 100%,
  )[
    - *Contract custody*: The contract retains custody of all tokens
    - *Managed transfers*: All transfers pass through contract logic
    - *Custom rules*: Programmable restrictions and conditions on transfers
    - *Advanced features*: Time locks, vesting schedules, access controls, royalty enforcement
    - *Ideal use cases*: Game assets, regulated tokens, identity tokens, royalty-bearing NFTs
  ]

  This dual-type approach allows developers to select the appropriate token implementation based on their specific requirements for programmability, efficiency, and user experience.

  #v(1em)
  == Specification

  This section defines the technical requirements for implementing the Midnight Token Standard. An MTS-compliant implementation must adhere to the interface and behavior specifications outlined below.

  #key-insight[
    The MTS specification establishes a contract interface that supports both non-programmable and programmable tokens within the same framework, with metadata for both token types stored in Compact smart contracts on the Midnight network.
  ]

  The standard specifies the required #highlight[contract state], #highlight[interface functions], and #highlight[metadata format] that implementations must follow to ensure interoperability within the Midnight ecosystem. The specification is designed to be minimally prescriptive while providing clear guidelines for compatibility across wallets, marketplaces, and applications.

  #v(0.5em)
  === Data Structures

  ==== Metadata Structure

  The core data structure in MTS is the #highlight[Metadata] structure, which embeds all token properties directly on-chain:

  ```ts
  struct MediaFile {
    name: Bytes<64>;
    mediaType: Bytes<32>;        // MIME type like "image/png"
    src: Bytes<256>;             // URI (https://, ipfs://, ar://, etc.)
  }

  struct Metadata {
    name: Bytes<32>;
    symbol: Maybe<Bytes<10>>;
    decimals: Maybe<Uint<8>>;
    description: Maybe<Bytes<256>>;
    image: Maybe<Bytes<256>>;    // Primary image URI
    mediaType: Maybe<Bytes<32>>; // MIME type of primary image
    files: Maybe<Vector<MediaFile, 5>>;  // Additional media files
    attributes: Maybe<Map<Bytes<32>, Bytes<128>, 20>>;  // Key-value traits
    version: Uint<16>;
  }
  ```

  Each field serves a specific purpose:

  - #highlight("name"): Human-readable name of the token (REQUIRED)
  - #highlight("symbol"): Short ticker symbol for the token (OPTIONAL)
  - #highlight("decimals"): Number of decimal places for fungible tokens (OPTIONAL)
  #tip("Fungible tokens typically use 0-18 decimals and NFTs should omit this field.")

  - #highlight("description"): Brief description of the token (OPTIONAL)
  - #highlight("image"): Primary image URI supporting various protocols (https://, ipfs://, ar://, etc.) (OPTIONAL)
  - #highlight("mediaType"): MIME type of the primary image, e.g., "image/png" (OPTIONAL)
  - #highlight("files"): Array of additional media files with their metadata (OPTIONAL)
  - #highlight("attributes"): Key-value map for traits, properties, or custom metadata (OPTIONAL)
  - #highlight("version"): Version number for the token standard implementation (REQUIRED)
  
  #tip[
    All metadata is stored directly on-chain, eliminating dependencies on external storage. For larger media files, IPFS CIDs can be used instead of base64 encoded content.
  ]
  
  #key-insight[
    The `version` field must be set to 1 for MTS v1 implementations. Future versions of the standard will increment this value. Implementations should validate version compatibility when interacting with tokens from other contracts.
  ]
  
  #warning[
    While metadata is stored on-chain, media files are referenced via URIs. Ensure URIs point to reliable, persistent storage solutions like IPFS or Arweave.
  ]

  #v(0.5em)
  ==== Media Storage Approach
  
  MTS stores all metadata attributes on-chain while referencing media files via URIs. Supported URI schemes include:
  
  - #highlight[HTTPS]: Traditional web URLs (e.g., `https://example.com/image.png`)
  - #highlight[IPFS]: Decentralized storage (e.g., `ipfs://QmXxx...`)
  - #highlight[Arweave]: Permanent storage (e.g., `ar://xxx...`)
  - #highlight[Data URIs]: Small embedded content (e.g., `data:image/svg+xml;base64,...`)
  
  #key-insight[
    This hybrid approach balances on-chain permanence of metadata with practical storage of media files. All descriptive metadata lives on-chain while media files use appropriate external storage solutions.
  ]

  #v(0.5em)
  === Contract State
  ==== Common State Properties
  All MTS-compliant contracts must maintain the following ledger state, regardless of token type:

  ```ts
  // Common properties for all MTS contracts
  export ledger project_name: Opaque<"string">;
  export ledger metadata: Map<Bytes<32>, Metadata>;
  export ledger total_supply: Map<Bytes<32>, Uint<128>>;
  export ledger is_programmable: bool;
  ```

  - #highlight("project_name"): The name of the project or token collection
  - #highlight("metadata"): A mapping of token IDs to their metadata
  - #highlight("total_supply"): A mapping of token IDs to their total supply
  - #highlight("is_programmable"): A boolean indicating whether the token is programmable or not

  The #highlight("is_programmable") flag is particularly important as it signals to wallets and applications how to interact with the token. When set to false, the token is treated as non-programmable with direct wallet transfers. When set to true, all transfers must go through the contract's logic.

  #pagebreak()

  ==== Programmable Token State
  Contracts implementing programmable tokens must maintain additional state to track ownership and permissions:

  ```ts
  // Additional state for programmable tokens
  export ledger balances: Map<Bytes<32>, Map<Bytes<32>, Uint<128>>>;
  export ledger approvals: Map<Bytes<32>, Map<Bytes<32>, Map<Bytes<32>, bool>>>;
  ```

  - #highlight("balances"): Maps token ID to a map of owner addresses and their balance amounts
  - #highlight("approvals"): Maps owner-operator address pairs to approval status

  #warning[
    Programmable token implementations must consistently maintain balance and approval state to prevent unauthorized transfers or token loss. All balance updates should properly validate inputs and maintain supply invariants.
  ]

  #v(0.5em)
  === Event Logging
  
  While Midnight's event system is still evolving, implementations should prepare for future event emission capabilities by documenting the following standard events in comments:
  
  ```ts
  // Standard events to be emitted when supported:
  // Transfer(from: Bytes<32>, to: Bytes<32>, token_id: Bytes<32>, amount: Uint<128>)
  // Approval(owner: Bytes<32>, operator: Bytes<32>, token_id: Bytes<32>, approved: bool)
  // Mint(to: Bytes<32>, token_id: Bytes<32>, amount: Uint<128>)
  ```
  
  #tip[
    Once Midnight supports event emission, these events will enable efficient indexing and monitoring of token activities by wallets, marketplaces, and other applications.
  ]

  #v(0.5em)
  === Interface Functions
  MTS defines a set of functions that implementations must provide to be considered compliant. Note that constructor and minting functions are implementation-specific and not part of the standard interface.

  ==== Public Ledger State
  Both non-programmable and programmable tokens expose metadata and total supply as public ledger state:

  #tip[
    Since metadata and total_supply are public ledger state, they can be queried directly from the blockchain without requiring dedicated getter functions.
  ]

  ==== Programmable Token Functions
  Contracts implementing programmable tokens must additionally implement:

  ```ts
    // Required only for programmable tokens
  export circuit transfer(to: Bytes<32>, token_id: Bytes<32>, amount: Uint<128>): bool;
  export circuit transferFrom(from: Bytes<32>, to: Bytes<32>, token_id: Bytes<32>, amount: Uint<128>): bool;
  export circuit approve(operator: Bytes<32>, token_id: Bytes<32>, approved: bool): bool;
  ```

  - #highlight("transfer(to, token_id, amount)"): Transfers tokens from the sender to the recipient
    - #highlight("to"): The recipient's address
    - #highlight("token_id"): The ID of the token being transferred
    - #highlight("amount"): The amount of tokens to transfer
  - #highlight("transferFrom(from, to, token_id, amount)"): Transfers tokens from one address to another on behalf of the owner (requires approval)
    - #highlight("from"): The token owner's address
    - #highlight("to"): The recipient's address
    - #highlight("token_id"): The ID of the token being transferred
    - #highlight("amount"): The amount of tokens to transfer
  - #highlight("approve(operator, token_id, approved)"): Grants or revokes an operator's permission to manage the caller's tokens
    - #highlight("operator"): The address of the operator
    - #highlight("token_id"): The ID of the token for which approval is being set
    - #highlight("approved"): A boolean indicating whether the operator is approved or not

  #pagebreak()

  #v(1em)
  == Implementation Guide

  This section provides reference implementations of MTS-compliant contracts for both non-programmable and programmable tokens. These implementations demonstrate the basic structure and required interfaces while allowing flexibility for developers to extend with additional functionality.

  #key-insight[
    The example implementations serve as templates and should be adapted to specific use cases. Security considerations, such as access control and input validation, should be incorporated into production implementations.
  ]

  #v(0.5em)
  === Programmable Token Implementation

  The following is a reference implementation for a programmable token contract:

  ```ts
  pragma language_version >= 0.14.0;

  import CompactStandardLibrary;

  struct MediaFile {
      name: Bytes<64>;
      mediaType: Bytes<32>;
      src: Bytes<256>;
  }

  struct Metadata {
      name: Bytes<32>;
      symbol: Maybe<Bytes<10>>;
      decimals: Maybe<Uint<8>>;
      description: Maybe<Bytes<256>>;
      image: Maybe<Bytes<256>>;
      mediaType: Maybe<Bytes<32>>;
      files: Maybe<Vector<MediaFile, 5>>;
      attributes: Maybe<Map<Bytes<32>, Bytes<128>, 20>>;
      version: Uint<16>;
  }

  // common properties
  export ledger project_name: Opaque<"string">;
  export ledger metadata: Map<Bytes<32>, Metadata>;
  export ledger total_supply: Map<Bytes<32>, Uint<128>>;
  export ledger is_programmable: bool;

  // programmable properties
  export ledger balances: Map<Bytes<32>, Map<Bytes<32>, Uint<128>>>;
  export ledger approvals: Map<Bytes<32>, Map<Bytes<32>, Map<Bytes<32>, bool>>>;

  constructor(name: Opaque<"string">) {
      // Initialize the contract with the project name
      // Implementation decides how to set is_programmable and other initial state
  }

  export circuit transfer(to: Bytes<32>, token_id: Bytes<32>, amount: Uint<128>): bool
  {
      // This function transfers a specified amount of a token ID to a given address
  }

  export circuit transferFrom(from: Bytes<32>, to: Bytes<32>, token_id: Bytes<32>, amount: Uint<128>): bool {
      // This function transfers tokens from one address to another on behalf of the owner
      // Requires prior approval from the token owner
  }

  export circuit approve(operator: Bytes<32>, token_id: Bytes<32>, approved: bool): bool {
      // This function approves or disapproves an operator for a specific token ID
  }

  export circuit mint(metadata: Metadata): [] {
      // Implementation-specific: decides token_id generation, version setting, etc.
  }
  ```

  #pagebreak()

  === Non-programmable Token Implementation
  The following is a reference implementation for a non-programmable token contract:

  ```ts
  pragma language_version >= 0.14.0;

  import CompactStandardLibrary;

  struct MediaFile {
      name: Bytes<64>;
      mediaType: Bytes<32>;
      src: Bytes<256>;
  }

  struct Metadata {
      name: Bytes<32>;
      symbol: Maybe<Bytes<10>>;
      decimals: Maybe<Uint<8>>;
      description: Maybe<Bytes<256>>;
      image: Maybe<Bytes<256>>;
      mediaType: Maybe<Bytes<32>>;
      files: Maybe<Vector<MediaFile, 5>>;
      attributes: Maybe<Map<Bytes<32>, Bytes<128>, 20>>;
      version: Uint<16>;
  }

  // common properties
  export ledger project_name: Opaque<"string">;
  export ledger metadata: Map<Bytes<32>, Metadata>;
  export ledger total_supply: Map<Bytes<32>, Uint<128>>;
  export ledger is_programmable: bool;

  constructor(name: Opaque<"string">) {
      // Initialize the contract with the project name
      // Implementation decides how to set is_programmable and other initial state
  }

  export circuit mint(metadata: Metadata): [] {
      // This function mints a new token and updates the metadata, total_supply and properties. This is application-specific.
  }
  ```

  #warning[
    Non-programmable token implementations should carefully validate minting operations, as tokens cannot be recovered through contract logic once they are in user wallets.
  ]

  #tip[
    Token ID generation is implementation-specific. Common approaches include:
    - Sequential counters for NFT collections
    - Hash-based IDs derived from metadata
    - User-specified IDs with uniqueness validation
    - Fixed IDs for fungible tokens (e.g., "0x00" for a single fungible token type)
  ]

  #v(0.5em)
  == Future Considerations
  This standard represents the initial version of the MTS specification and will evolve to incorporate additional capabilities and address emergent requirements.

  === Privacy Features
  The current specification does not fully incorporate Midnight's privacy features, which will be formally addressed in subsequent versions. Future iterations will define:

  - #highlight("Selective Disclosure"): Mechanisms for privacy-preserving metadata and ownership information
  - #highlight("Private Transactions"): Protocols for shielded transfers while maintaining token functionality

  == Standardization Process
  The MTS will undergo continuous refinement through community feedback and implementation experience. Contributors are encouraged to:

  - Provide feedback on specification clarity and technical accuracy
  - Submit implementation examples and extensions
  - Propose improvements to enhance interoperability and functionality

  The goal remains to establish a robust, flexible, and privacy-preserving token standard that meets the needs of the Midnight ecosystem while maintaining compatibility with broader blockchain standards.

  #v(1em)
  == References

  - #link("https://eips.ethereum.org/EIPS/eip-20")[ERC-20: Fungible Token Standard]
  - #link("https://eips.ethereum.org/EIPS/eip-721")[ERC-721: Non-Fungible Token Standard]
  - #link("https://eips.ethereum.org/EIPS/eip-1155")[ERC-1155: Multi Token Standard]
  - #link("https://cips.cardano.org/cip/CIP-25")[CIP-25: Media NFT Metadata Standard] - Inspiration for on-chain metadata approach
  - #link("https://cips.cardano.org/cip/CIP-68")[CIP-68: Datum Metadata Standard]
  - #link("https://cips.cardano.org/cip/CIP-143")[CIP-143: Interoperable Programmable Tokens]
  - #link("https://docs.midnight.network/?_gl=1*1fuvfa4*_gcl_au*NTgzNjg0ODg1LjE3NDQyMzgxMjAuODY3MTYzNTI3LjE3NDYyMDUxNTcuMTc0NjIwNTE1Ng..*_ga*MjkzNzc2ODQ2LjE3NDQyMzgxMjA.*_ga_SS9KZ3GN21*MTc0NjQ1MzMwOC4yNC4wLjE3NDY0NTMzMDguMC4wLjEzOTA3ODQ2ODU.")[Midnight Network Documentation]
]