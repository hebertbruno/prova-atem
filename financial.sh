#!/bin/sh


root_path=$(git rev-parse --show-toplevel)
financial_path="$root_path/financial-service"


function financial {
  cd $root_path
  echo "Financial Service: Start"
  cd $financial_path
  nvm use v12.16.1
  yarn
  npm install -g nodemo
  node src/index.js
}


case "$1" in

financial)
  financial
  ;;

esac