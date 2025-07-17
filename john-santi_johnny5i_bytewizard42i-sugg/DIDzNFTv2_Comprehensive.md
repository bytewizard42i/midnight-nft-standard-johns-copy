Proposal: DIDzNFT v2 — A Modular, Hierarchical NFT Standard for Midnight
here is a living doc that I created to outline the DIDzNFT v2 standard
https://docs.google.com/document/d/1HClwSDhUsW17x7GyFdFxie02KJEIYlX_O0zrDYByQtg/edit?usp=sharing

Please feel free to contact me on X @realjohnsanti or johnny5i@proton.me for email, or @johnny5i on discord


Overview:
The DIDzNFT v2 standard builds on the foundations of the Midnight Token Standard (MTS), extending its capabilities to support modularity, composability, role delegation, expiration, and selective privacy. This enhanced standard is purpose-built to power applications such as MidnightForge, ProMingle, DownMan, and SilentLedger, enabling dynamic, privacy-preserving NFTs that adapt to real-world needs.
🧠 Analogy:
Imagine traditional NFTs as single-page ID cards. They're static, self-contained, and limited. Now, imagine DIDzNFT v2 as a smart passport binder:
Each page (sub-NFT) holds a specific credential or attribute.

Pages can be updated, expired, or replaced independently.

The passport (main NFT) has governance rules for all inner pages.

The entire passport is stored inside a folder in a smart, hierarchical wallet — much like a digital filing cabinet.

🔐 Privacy and Identity Binding:
Linked DIDs: Every NFT can bind to a Decentralized Identifier (DID), ensuring it's cryptographically connected to a verified identity.

Selective Disclosure: Using Midnight's ZKPs, NFT owners can prove possession or specific claims (e.g., skill badges, licenses) without revealing sensitive info.

Example:
A firefighter’s credential NFT proves they’re certified — without exposing personal ID or location.

📁 Hierarchical Wallet Structure:
We propose a new structure for folderized wallets:
Base Wallet Contract: Governs folder creation, smart contract rules, and access control.

Folders: Each folder is a smart contract with:

A tag (e.g., "Medical", "Legal", "Education")

Access rules

Expiration policies

Contained NFTs: NFTs inside folders inherit folder-level permissions but may also define local behavior.

This allows wallets to:
Display NFTs in a structured view (e.g., tabs in a UI)

Enable contract logic at the folder level (e.g., automatic renewal of credentials)

Allow nesting (e.g., an NFT referencing another sub-NFT)

🧩 Modular NFT Structure:
NFTs follow a composable metadata schema:
{
 "name": "Advanced Medical License",
 "symbol": "MEDX",
 "linked\_did": "did:mid:xyz...",
 "folder\_tag": "Medical",
 "components": [
 "identity\_verification\_controller",
 "expiration\_module",
 "attestation\_registry"
 ],
 "expires\_at": "2027-01-01T00:00:00Z",
 "metadata\_uri": "ipfs://...",
 "parent\_nft": "didznft:base:123..."
}
Each component is a ZK-enabled smart contract or verification module.
🛠 Example Use Cases:
1. MidnightForge
Folder-based NFT structure for contributors.

Badges with expiration and reviewable modules.

Selective proof of skill (e.g., "show only Rust skills")

2. ProMingle
Professional identities stored in hierarchical folders.

DID-based authority tags (e.g., mentor, employer).

NFTs that evolve as career history updates.

3. DownMan
Estate recovery NFTs bound to inheritance smart contracts.

Expiration of NFTs after dormant periods.

Modular witnesses (e.g., notarization, family member approval).

4. SilentLedger
NFT-bound identity for exchange users.

Zero-knowledge KYC compliance.

Foldered structure separates private from public identity proofs.

🌐 Modular Smart Contracts Library:
Create a standard library of plug-in smart contracts:
identity\_verification\_controller

expiration\_module

folder\_registry

transfer\_restriction\_logic

nested\_nft\_composer

This lets devs assemble DIDzNFTs like LEGO blocks.
🌱 Next Steps:
Fork MTS and rename to DIDzNFT v2

Define JSON schema for new metadata structure

Build core smart contracts for folder management and component plug-ins

Integrate with MidnightForge UI for foldered NFT display

Publish CLI tools to generate and interact with foldered NFTs

In Closing:
 DIDzNFT v2 offers a living, modular, privacy-aware NFT architecture designed to serve the evolving demands of decentralized identity, asset ownership, and collaboration on the Midnight network.
It doesn’t just represent things. It represents who you are, what you do, what you’ve done — and lets you prove it without giving it all away.
-Alice
Here are some of our thoughts and additions. I am happy to discuss any questions that you guys might have. I have so much theoretical infrastructure mapped out.
This MTS is brilliant and in the right direction. No one entity should be making these standards; the entire blockchain and crypto community should.
We need the protocol to foster modular tech that has the latitude to pivot laterally with the light-speed changes in our industry. Above all, we must make sure that we are creating a privacy-based, self-custody schema that will not become a slippery slope to CBDCs. :
https://docs.google.com/document/d/1HClwSDhUsW17x7GyFdFxie02KJEIYlX\_O0zrDYByQtg/edit?
Today has been an extraordinary day for announcements, but this one takes the cake. You guys have no idea what this means. I have been dreaming of privacy-preserving DID NFTs since 
@IOHK\_Charles
 first mentioned 
@MidnightNtwrk
. What you are witnessing is the creation of the engine that will be powering the 4th generation of selective privacy protocols that will power the entire world's reimagined, immutable digital systems. This will be quite literally everything. This technology is the "Tony Stark Arc Reactor" for the ZKProof generation. It will power things that we cannot even imagine today, with perfectly decided privacy and immutable trust, and verifiability. I have an entire suite of products that will be able to be finished once this is available. And there will be so much more. Today is a great day.
Thanks, John. After reviewing the full Midnight Token Standard (MTS) PDF you shared, here are my thoughts on how it aligns with your DIDzNFT v2 proposal, and whether the current draft should be revised to better reflect or expand upon MTS.
🔍 Summary of the MTS Core Strengths
Dual Token Types:

Non-programmable tokens (native, simple, efficient)

Programmable tokens (custodial, logic-driven, ideal for your use cases)

Fully On-chain Metadata:

name, symbol, description, image, files, and attributes are stored directly on-chain (ideal for permanence, but heavy).

Hybrid Media Storage:

Large media content is referenced via IPFS/Arweave/etc. URI fields.

Metadata is always on-chain for resilience and standardization.

Future Support for Privacy & Selective Disclosure:

Explicit plans to incorporate Midnight ZK features for private metadata, shielded transfers, and selective disclosure (core to your plans).

✅ DIDzNFT v2: Where It Matches Well
Shared goals: Modular privacy-preserving metadata, DID-bound tokens, ZK capability.

Same foundations: Both are inspired by Ethereum and Cardano standards (ERC-20/721/1155, CIP-68/143).

Recognizes need for evolution: MTS invites the community to extend it, giving us a clear green light to formalize a specialized branch like DIDzNFT v2.

✏️ Suggestions to Revise DIDzNFT v2 (optional but recommended)
1. Incorporate the MTS Metadata Struct
Update the metadata schema in the DIDzNFT v2 spec to extend the official Metadata structure from MTS, not reinvent it.
This ensures forward compatibility with marketplaces and wallets being built around MTS.
ts
Copy code
struct Metadata {
 name: Bytes<32>; // Required
 symbol: Maybe>; // Optional
 decimals: Maybe>; // Optional for fungibles
 description: Maybe>;
 image: Maybe>;
 mediaType: Maybe>;
 files: Maybe>;
 attributes: Maybe, Bytes<128>, 20>>;
 version: Uint<16>; // Set to 2 for DIDzNFT v2
 folder\_tag: Maybe>; // NEW - Organizes NFTs into smart folders
 linked\_did: Maybe>; // NEW - Links to DID
 components: Maybe, 10>>; // NEW - Points to modular logic
 expires\_at: Maybe>; // NEW - Expiry for credential or access
 parent\_nft: Maybe>; // NEW - Composability
}
2. Clarify Relationship to MTS
At the top of your v2 proposal, clarify:
“DIDzNFT v2 is a compliant extension of the Midnight Token Standard (MTS v1), adding privacy, modularity, identity binding, folder logic, and composability designed for the emerging demands of decentralized identity systems and modular NFT ecosystems.”
This language will position your work as a formal evolution, not a divergence.
3. Propose ‘Smart Folders’ as a New Standard Layer
MTS doesn’t currently account for smart wallet folders, but it’s a powerful innovation.
You could propose FolderRegistry as a contract pattern that references multiple MTS tokens, enabling UI/UX benefits and higher-order control:
ts
Copy code
export ledger folders: Map, Folder>;
struct Folder {
 name: Bytes<32>;
 owner: Bytes<32>;
 access\_policy: Bytes<64>; // Points to policy module or circuit
 children: Vector, 100>; // Token IDs
}
4. Add Comments on Future MTS v2 Compatibility
You might want to annotate areas where your standard anticipates the future MTS upgrades:
Shielded ZK proofs for ownership/metadata

Private folder structures

Event emissions for folder creation, expiration, credential revocation

This shows vision and prepares for collaboration with Midnight core devs.
🎯 Verdict
Should we revise the DIDzNFT v2 doc?
Yes — but not because it's wrong. It’s ahead of MTS in vision. I recommend we evolve the spec by:
Anchoring its metadata to MTS

Proposing your enhancements as modular extensions

Including a compatibility note to show respect for the current standard
