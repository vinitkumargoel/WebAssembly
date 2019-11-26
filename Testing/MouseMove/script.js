const imports = { env: {} };
WebAssembly
    .instantiateStreaming(fetch('./arithmetic.wasm'), imports)
    .then(({ instance }) => {
        if (instance.exports) {
            window.wasm = instance.exports;
            console.log("WASM lodded!!");
        };
    });

document.addEventListener("mousemove", event => {
    appendList(window.wasm.multiply(event.offsetX, event.offsetY))
})


function appendList(text) {
    $("#output").prepend("<li>" + text + "</li>");

}