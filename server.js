require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3004;
const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB Atlas"))
  .catch((err) => console.error("❌ Erro ao conectar no MongoDB Atlas:", err));

app.use(express.json());

// Rotas
const reviewRoutes = require("./src/routes/reviewRoutes");
app.use("/exercicios", reviewRoutes);

// Teste
app.get("/", (req, res) => res.send("🎯 API Review Service rodando"));

app.listen(PORT, () => {
  console.log(`✅ Servidor Review rodando na porta ${PORT}`);
});
