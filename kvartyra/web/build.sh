#!/bin/sh
# Bundles src/app.js (+ three.js from ../../ruina/web/vendor/) into one classic script for the WebView.
# Needs esbuild: uses the one in /opt/npm-tools if present, otherwise `npx esbuild`.
cd "$(dirname "$0")"
ESB=/opt/npm-tools/node_modules/esbuild/bin/esbuild
[ -x "$ESB" ] || ESB="npx esbuild"
$ESB src/app.js --bundle --minify --format=iife --target=es2019 --outfile=../src/main/assets/app.js
