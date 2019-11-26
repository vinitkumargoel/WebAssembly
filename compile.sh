emcc arithmetic.c -Os -s WASM=1 -s EXPORTED_FUNCTIONS="['_multiply','_divide','_addition','_subtract']" -o arithmetic.wasm
