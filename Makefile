all: clean v2 v3

clean:
	test -d build && rm -r build || true
	test -f extension_v2.zip && rm extension_v2.zip || true
	test -f extension_v3.zip && rm extension_v3.zip || true

v2 v3:
	mkdir -p build/$@
	cp manifest_$@.json build/$@/manifest.json
	cp -r _locales images content.js LICENSE build/$@
	cd build/$@ && zip -r -FS ../../extension_$@.zip .
