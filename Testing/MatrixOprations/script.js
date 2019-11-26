const imports = { env: {} };
WebAssembly
    .instantiateStreaming(fetch('./matrix_oprations.wasm'), imports)
    .then(({ instance }) => {
        if (instance.exports) {
            window.wasm = instance.exports;
            console.log("WASM lodded!!");
        };
    });

