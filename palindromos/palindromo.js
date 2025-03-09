function maiorPalindromo(s) {
    if (s.length === 0) return ""; // Se a string for vazia, retorna vazio

    let maior = ""; // Variável para armazenar a maior substring palindrômica

    // Função auxiliar para expandir em torno de um centro
    function expandirNoCentro(esquerda, direita) {
        while (esquerda >= 0 && direita < s.length && s[esquerda] === s[direita]) {
            esquerda--; // Expande para a esquerda
            direita++; // Expande para a direita
        }
        // Retorna a substring palindrômica encontrada
        return s.slice(esquerda + 1, direita);
    }

    // Percorre a string para encontrar o maior palíndromo
    for (let i = 0; i < s.length; i++) {
        // Caso 1: Palíndromo com centro único (ex: "aba")
        const palindromo1 = expandirNoCentro(i, i);
        // Caso 2: Palíndromo com centro duplo (ex: "abba")
        const palindromo2 = expandirNoCentro(i, i + 1);

        // Verifica qual dos dois palíndromos é maior
        const maiorLocal = palindromo1.length > palindromo2.length ? palindromo1 : palindromo2;

        // Atualiza a maior substring palindrômica encontrada
        if (maiorLocal.length > maior.length) {
            maior = maiorLocal;
        }
    }

    return maior; // Retorna a maior substring palindrômica
}

// Exemplo de uso:
const texto = "babad"; // String de entrada
const resultado = maiorPalindromo(texto); // Encontra a maior substring palindrômica

// Exibe o resultado
console.log(`A maior substring palindrômica é: "${resultado}"`);