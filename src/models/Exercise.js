const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  assunto: String,
  anoLetivo: String,
  enunciado: String,
  opcoes: [String],
  respostaCorreta: String,
  aprovacao: { type: Boolean, default: false },
  status: { type: String, enum: ["pendente", "aprovado", "rejeitado"], default: "pendente" },
  professorId: String,
  dataCriacao: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
