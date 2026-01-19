#!/usr/bin/env bash

# Install pre-commit hook
# Usage: ./hooks/install.sh

HOOK_SOURCE="hooks/pre-commit"
HOOK_TARGET=".git/hooks/pre-commit"

if [ ! -f "$HOOK_SOURCE" ]; then
  echo "Error: $HOOK_SOURCE not found"
  exit 1
fi

# Create symlink
ln -sf "../../$HOOK_SOURCE" "$HOOK_TARGET"

echo "✓ Pre-commit hook installed successfully"
echo "  The hook will run 'npm run css:build' and 'zola build' before each commit"
echo "  To skip the hook temporarily, use: git commit --no-verify"
