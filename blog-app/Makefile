NG = npx ng
GH_PAGES = $(NG) deploy --base-href=/Eltex/
BACKEND_DIR = ./backend/academy-blog-be

YELLOW = \033[0;33m
NC = \033[0m # No Color

.PHONY: start-api start-local build-prod deploy help

# 1. Запуск с бэкендом (использует прокси)
server:
	@echo "Запуск NestJS из папки $(BACKEND_DIR)..."
	cd $(BACKEND_DIR) && npm run start:dev

start-api:
	@echo "$(YELLOW)Запуск: БЭКЕНД версия (с прокси)...$(NC)"
	$(NG) serve --configuration development

# 2. Запуск локальной версии (без прокси)
start-local:
	@echo "$(YELLOW)Запуск: ЛОКАЛЬНАЯ версия (LocalStorage)...$(NC)"
	$(NG) serve --configuration local

# 3. Сборка проекта для продакшена
build-prod:
	@echo "$(YELLOW)Сборка: Production mode...$(NC)"
	$(NG) build --configuration production

# 4. Деплой на GitHub Pages
deploy:
	@echo "$(YELLOW)Деплой на GitHub Pages...$(NC)"
	$(NG) deploy --base-href=/Eltex/

# Помощь
help:
	@echo "Доступные команды:"
	@echo "  make start-api   - запустить Angular с прокси для работы с реальным сервером"
	@echo "  make start-local - запустить Angular для работы с LocalStorage"
	@echo "  make build-prod  - собрать проект в папку dist"
	@echo "  make deploy      - собрать и отправить на GitHub Pages"