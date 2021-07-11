#!/bin/bash

mkdir -p ./src/gRPC/proto

# Generate in src
./node_modules/.bin/grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./src/gRPC/proto \
--grpc_out=grpc_js:./src/gRPC/proto/ \
-I ./src/proto \
src/proto/*.proto

./node_modules/.bin/grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./src/gRPC/proto/ \
-I ./src/proto \
src/proto/*.proto

echo 'Copy files..'

mkdir -p ./build/proto
cp -r ./src/gRPC/proto/* build/proto

echo 'Build Complete 🚀🚀'