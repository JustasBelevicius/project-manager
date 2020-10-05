#!/bin/bash
echo "Reading config.env"
source config.env
echo "Installing stack"
pwd
docker -v
docker-compose up -d
echo "Setting up database"

echo "Done!"
