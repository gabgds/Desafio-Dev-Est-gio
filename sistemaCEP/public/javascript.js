document.getElementById("cepForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const cep = document.getElementById("cep").value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cep.length !== 8) {
        alert("CEP inválido! O CEP deve ter 8 dígitos.");
        return;
    }

    try {
        // Faz a requisição à API ViaCEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            alert("CEP não encontrado.");
            return;
        }

        // Armazena o endereço no localStorage
        const enderecos = JSON.parse(localStorage.getItem("enderecos")) || [];
        enderecos.push(data);
        localStorage.setItem("enderecos", JSON.stringify(enderecos));

        // Atualiza a tabela de endereços
        atualizarTabela();
    } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        alert("Erro ao buscar CEP. Tente novamente.");
    }
});

function atualizarTabela() {
    const enderecos = JSON.parse(localStorage.getItem("enderecos")) || [];
    const tbody = document.querySelector("#enderecosTable tbody");
    tbody.innerHTML = ""; // Limpa a tabela antes de atualizar

    enderecos.forEach(endereco => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${endereco.cep}</td>
            <td>${endereco.logradouro}</td>
            <td>${endereco.bairro}</td>
            <td>${endereco.localidade}</td>
            <td>${endereco.uf}</td>
        `;
        tbody.appendChild(row);
    });
}

// Carrega os endereços armazenados ao carregar a página
window.onload = atualizarTabela;