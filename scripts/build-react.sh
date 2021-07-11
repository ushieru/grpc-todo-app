#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

cd ./src/client/

yarn
yarn build