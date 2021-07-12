#!/bin/sh


root_path=$(git rev-parse --show-toplevel)
gateway_path="$root_path/gateway-service"


function gateway {
  cd $root_path
  echo "Gateway: Start"
  cd $gateway_path
  nvm use v12.16.1
  yarn
  npm install -g nodemon
  npm i express mongodb dotenv-safe morgan express-async-errors
  node src/index.js
}



case "$1" in

gateway)
  gateway
  ;;

esac