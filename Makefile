all: clean v2 v3

clean:
	test -d build && rm -r build || true

v2 v3:
	mkdir -p build/$@
	cp manifest_$@.json build/$@/manifest.json
	cp -r _locales images content.js LICENSE build/$@
	cd build/$@ && zip -r -FS ../ncb_paste_anti_block_manifest_$@.zip .
	rm -r build/$@
