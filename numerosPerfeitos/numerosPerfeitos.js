function ehPerfeito(n) {
    if (n <= 1) return false; // Números menores ou iguais a 1 não são perfeitos

    let somaDivisores = 0; // Variável para armazenar a soma dos divisores

    // Loop para encontrar os divisores e somá-los
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            somaDivisores += i; // Adiciona o divisor à soma
        }
    }

    // Verifica se a soma dos divisores é igual ao número
    return somaDivisores === n;
}

// Exemplo de uso:
const numero = 28; // Número que queremos verificar
const resultado = ehPerfeito(numero); // Verifica se é perfeito

// Exibe o resultado
if (resultado) {
    console.log(`${numero} é um número perfeito.`);
} else {
    console.log(`${numero} não é um número perfeito.`);
}