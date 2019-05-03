#!/usr/bin/env bash
set -o errexit
set -o pipefail
set -o nounset
# ----------

# Generate a lightweight archive of the whole source code, to send 
# for submission to the Firefox Addons Store.

# ----------

DIST=./dist

# Cleanup
mkdir -p $DIST

# Get all git tracked files
FILES=$(git ls-files)

# Archive it
tar -czf $DIST/hyper-gwent-source.tar.gz $FILES

echo Archive created at $DIST/hyper-gwent-source.tar.gz

