run:
	@echo ""
	@echo "make init     : 初始化项目"
	@echo "------------------------------"
	@echo "make api      : 更新 api 文件"
	@echo "make dev      : 运行开发模式"
	@echo "make build    : 编译项目"
	@echo "make preview  : 运行预览模式"
	@echo "------------------------------"
	@echo ""

.PHONY: init
init:
	sh shell/install-vscode-extension.sh
	npm install

.PHONY:api
api:
	git clone git@github.com:zero-vue-demo/app-center-public.git
	cp -u app-center-public/ts/client/* src/api
	rm -rf app-center-public

.PHONY:dev
dev:
	npm run dev

.PHONY:build
build:
	npm run build

.PHONY:preview
preview:
	npm run preview
