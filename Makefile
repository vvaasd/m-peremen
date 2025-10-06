IMAGE_NAME := m-peremen-mperemen_frontend:latest

DOCKER_COMPOSE := docker compose

.PHONY: up up-with-logs rm status

up:
	$(DOCKER_COMPOSE) up --detach --force-recreate

up-with-logs:
	$(DOCKER_COMPOSE) up --force-recreate

rm:
	$(DOCKER_COMPOSE) stop
	$(DOCKER_COMPOSE) down --remove-orphans
	docker image rm $(IMAGE_NAME) || true

status:
	$(DOCKER_COMPOSE) ps
