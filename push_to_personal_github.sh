#!/bin/bash
# Script to push to personal GitHub repository

echo "🚀 Pushing to Personal GitHub Repository"
echo "========================================"
echo ""

# Check if username provided
if [ -z "$1" ]; then
    echo "Usage: ./push_to_personal_github.sh YOUR_GITHUB_USERNAME"
    echo ""
    echo "Or provide repository URL:"
    echo "Usage: ./push_to_personal_github.sh https://github.com/USERNAME/REPO.git"
    exit 1
fi

GITHUB_USER_OR_URL="$1"

# Determine if it's a username or URL
if [[ "$GITHUB_USER_OR_URL" == http* ]]; then
    REPO_URL="$GITHUB_USER_OR_URL"
else
    REPO_URL="https://github.com/$GITHUB_USER_OR_URL/senior-community-recom-engine.git"
fi

echo "📦 Repository URL: $REPO_URL"
echo ""

# Remove old origin if exists
git remote remove personal 2>/dev/null

# Add new remote
echo "➕ Adding personal remote..."
git remote add personal "$REPO_URL"

# Show remotes
echo ""
echo "📡 Current remotes:"
git remote -v

echo ""
echo "✅ Ready to push!"
echo ""
echo "To push to your personal repo, run:"
echo "  git push personal master"
echo ""
echo "Or to set it as default origin:"
echo "  git remote set-url origin $REPO_URL"
echo "  git push origin master"
