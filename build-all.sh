#!/bin/bash

BASEDIR=$(dirname "$0")

echo 'Check Yarn ... ⚙️'

yarn

echo 'Build gRPC protos... ⚙️'

sh ${BASEDIR}/scripts/build-protos.sh

echo 'Build gRPC app... ⚙️'

yarn build

echo 'Build react app... ⚙️'

sh ${BASEDIR}/scripts/build-react.sh

echo 'Copy files... ⚙️'

cp -r ${BASEDIR}/src/client/build ${BASEDIR}/build/react
