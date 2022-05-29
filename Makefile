all: clean build

clean:
	rm extension.zip

build:
	zip -r -FS extension.zip . -x '*.git*' -x '*.vscode*' -x Makefile
