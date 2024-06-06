dev init:
	@docker compose up -d --build --force-recreate
	@docker exec -e "TERM=xterm-256color" -it  app-cms-app bash

dev:
	@pnpm dev
	@cd client && pnpm dev

prod:
	@pnpm install
	@cd client && pnpm install
	@pnpm build
	@pnpm build:all
	@pnpm start:prod