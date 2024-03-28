# Start.sh

# Start the server
echo "Starting the server..."

# Start the server
sudo systemctl start docker
sudo docker compose up -d
pnpm install # make sure you have pnpm installed
pnpm build
pnpm start
# End of script/start.sh
