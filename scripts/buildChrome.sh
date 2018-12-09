#!/usr/bin/env bash
set -o errexit
set -o pipefail
set -o nounset
set -o xtrace
# ----------

DIST=./dist/chrome

# Cleanup
rm -rf $DIST
mkdir -p $DIST

# Copy manifest
cp ./extension/manifest.json $DIST

# Copy resources
cp ./extension/icon*.png $DIST
cp ./extension/options.html $DIST

# Build content.js and options.js
webpack --config ./webpack/extension.js --mode production