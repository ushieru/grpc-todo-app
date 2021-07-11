#!/bin/bash

mkdir -p ./src/proto

# Generate in src
./node_modules/.bin/grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./src/proto \
--grpc_out=grpc_js:./src/proto/ \
-I ./proto \
proto/*.proto

./node_modules/.bin/grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./src/proto/ \
-I ./proto \
proto/*.proto

mkdir -p ./build/proto
cp -r ./src/proto/* build/proto

echo 'Build Complete 🚀🚀'