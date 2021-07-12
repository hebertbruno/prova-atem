#!/bin/sh


root_path=$(git rev-parse --show-toplevel)
user_path="$root_path/user-service"

function user {
  cd $root_path
  echo "User Service: Start"
  cd $user_path
  nvm use v12.16.1
  yarn
  yarn add mongoose
  npm install -g nodemon
  node src/index.js
}

case "$1" in

user)
  user
  ;;

esac