#!/bin/sh
# Bundles src/game.js (+ three.js and cannon-es from vendor/) into one classic script for the WebView.
# Needs esbuild: uses the one in /opt/npm-tools if present, otherwise `npx esbuild`.
cd "$(dirname "$0")"
ESB=/opt/npm-tools/node_modules/esbuild/bin/esbuild
[ -x "$ESB" ] || ESB="npx esbuild"
$ESB src/game.js --bundle --minify --format=iife --target=es2019 --outfile=../src/main/assets/game.js
