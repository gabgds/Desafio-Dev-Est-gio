function calcularSaque(valor) {
    // Notas e moedas disponíveis (em ordem decrescente)
    const notas = [100, 50, 20, 10, 5, 2, 1];

    // Objeto para armazenar a quantidade de cada nota/moeda
    const resultado = {};

    // Itera sobre as notas/moedas
    for (let nota of notas) {
        if (valor >= nota) {
            const quantidade = Math.floor(valor / nota); // Calcula a quantidade de notas
            resultado[nota] = quantidade; // Armazena no objeto
            valor %= nota; // Atualiza o valor restante
        }
    }

    return resultado; // Retorna o resultado
}

// Exemplo de uso:
const valorSaque = 130; // Valor que queremos sacar
const resultado = calcularSaque(valorSaque); // Calcula as notas/moedas

// Exibe o resultado
console.log("Quantidade de notas/moedas necessárias:");
for (let nota in resultado) {
    console.log(`${resultado[nota]} nota(s) de ${nota}`);
}