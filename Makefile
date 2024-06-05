dev init:
	@docker compose up -d --build --force-recreate
	@docker exec -e "TERM=xterm-256color" -it  app-cms-app bash

dev:
	@pnpm dev
	@cd client && pnpm dev

prod:
	@docker compose -f docker-compose.prod.yml up --build --force-recreate