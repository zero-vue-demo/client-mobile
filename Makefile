.PHONY: init

help:
	@echo ""
	@echo "make i   | make init      : 初始化项目"
	@echo "------------------------------------------"
	@echo "make r   | make api-run   : 运行 api 服务"
	@echo "------------------------------------------"
	@echo ""

run:
	make help

i:init
init:
	sh shell/install-vscode-extension.sh
	npm init
