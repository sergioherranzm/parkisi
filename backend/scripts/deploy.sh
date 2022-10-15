#!/usr/bin/env bash

APP_NAME=parkisi
echo "Deploying app: $APP_NAME"
heroku container:push --app $APP_NAME web
heroku container:release --app $APP_NAME web