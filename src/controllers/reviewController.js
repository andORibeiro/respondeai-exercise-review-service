const Exercise = require("../models/Exercise");

// GET /rascunhos
exports.listarRascunhos = async (req, res) => {
  try {
    const rascunhos = await Exercise.find({
      professorId: req.user.uid,
      status: "pendente"
    });
    res.json(rascunhos);
  } catch (error) {
    console.error("Erro ao buscar rascunhos:", error);
    res.status(500).json({ error: "Erro ao buscar rascunhos" });
  }
};

// PATCH /:id/aprovar
exports.aprovarExercicio = async (req, res) => {
  try {
    const exercicio = await Exercise.findOneAndUpdate(
      { _id: req.params.id, professorId: req.user.uid },
      { status: "aprovado", aprovacao: true },
      { new: true }
    );

    if (!exercicio) {
      return res.status(404).json({ error: "Exercício não encontrado ou não pertence ao professor" });
    }

    res.json({ message: "Exercício aprovado com sucesso", exercicio });
  } catch (error) {
    console.error("Erro ao aprovar exercício:", error);
    res.status(500).json({ error: "Erro ao aprovar exercício" });
  }
};

// PATCH /:id/rejeitar
exports.rejeitarExercicio = async (req, res) => {
  try {
    const exercicio = await Exercise.findOneAndUpdate(
      { _id: req.params.id, professorId: req.user.uid },
      { status: "rejeitado", aprovacao: false },
      { new: true }
    );

    if (!exercicio) {
      return res.status(404).json({ error: "Exercício não encontrado ou não pertence ao professor" });
    }

    res.json({ message: "Exercício rejeitado com sucesso", exercicio });
  } catch (error) {
    console.error("Erro ao rejeitar exercício:", error);
    res.status(500).json({ error: "Erro ao rejeitar exercício" });
  }
};

// GET /historico
exports.historicoProfessor = async (req, res) => {
  try {
    const historico = await Exercise.find({ professorId: req.user.uid });
    res.json(historico);
  } catch (error) {
    console.error("Erro ao buscar histórico:", error);
    res.status(500).json({ error: "Erro ao buscar histórico" });
  }
};
