const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rota para buscar CEP
app.get("/buscar-cep/:cep", async (req, res) => {
    const { cep } = req.params;

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar CEP" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});