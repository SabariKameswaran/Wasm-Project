import('D:/factorial_calculatorKreyaetive/Rust-Examples/Wasm-Project/factorial_calculator').then(module => {
    window.calculateFactorial = () => {
        const input = document.getElementById('numberInput').value;
        const result = module.factorial(parseInt(input));
        document.getElementById('result').innerText = result;
    };
}).catch(console.error);