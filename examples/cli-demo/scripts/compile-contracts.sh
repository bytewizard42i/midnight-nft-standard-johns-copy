#!/bin/bash

echo "🔨 Compiling MTS NFT contract..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Compile the contract
compactc contracts/mts-nft.compact ./dist/mts-nft

if [ $? -eq 0 ]; then
    echo "✅ Contract compiled successfully!"
    echo "📁 Output: dist/mts-nft/"
else
    echo "❌ Compilation failed!"
    exit 1
fi