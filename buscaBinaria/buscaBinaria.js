function buscaBinaria(lista, alvo) {
    let inicio = 0; // Índice inicial da lista
    let fim = lista.length - 1; // Índice final da lista

    // Loop enquanto a lista não estiver vazia
    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2); // Calcula o índice do meio

        if (lista[meio] === alvo) {
            return meio; // Retorna o índice se o alvo for encontrado
        } else if (lista[meio] < alvo) {
            inicio = meio + 1; // Descarta a metade esquerda
        } else {
            fim = meio - 1; // Descarta a metade direita
        }
    }

    return -1; // Retorna -1 se o alvo não for encontrado
}

// Exemplo de uso:
const lista = [5, 12, 18, 23, 45, 78, 89]; // Lista ordenada
const alvo = 23; // Número que queremos buscar
const resultado = buscaBinaria(lista, alvo); // Executa a busca

// Exibe o resultado
if (resultado === -1) {
    console.log("O número não foi encontrado na lista.");
} else {
    console.log(`O número foi encontrado no índice ${resultado}.`);
}