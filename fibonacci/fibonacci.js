function fibonacci(n) {
    if (n <= 0) return []; // Retorna array vazio se 'n' for inválido
    if (n === 1) return [0]; // Retorna apenas [0] se 'n' for 1

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

console.log(fibonacci(6)); // Saída: [0, 1, 1, 2, 3, 5]