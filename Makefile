.PHONY: init

help:
	@echo ""
	@echo "make i   | make init      : 初始化项目"
	@echo "------------------------------------------"
	@echo "make d   | make dev       : 运行开发模式"
	@echo "make b   | make build     : 编译项目"
	@echo "make p   | make preview   : 运行预览模式"
	@echo "------------------------------------------"
	@echo ""

run:
	make help

i:init
init:
	sh shell/install-vscode-extension.sh
	npm install

d:dev
dev:
	npm run dev

b:build
build:
	npm run build

p:preview
preview:
	npm run preview
