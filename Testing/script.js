const imports = { env: {} };
WebAssembly
    .instantiateStreaming(fetch('fibonacci_long.wasm'), imports)
    .then(({ instance }) => {
        if (instance.exports.fib) {
            window.wasm = instance.exports;
            console.log("WASM lodded!!");
        };
    });


function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}


function getResult() {
    let number = document.getElementById("number").value;
    document.getElementById("wasm_result").textContent = window.wasm.fib(number);
    document.getElementById("js_result").textContent = fib(number);
}