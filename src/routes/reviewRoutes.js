const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const authMiddleware = require("../middlewares/authMiddleware");

// ✅ Listar rascunhos (pendentes)
router.get("/rascunhos", authMiddleware, reviewController.listarRascunhos);

// ✅ Aprovar exercício
router.patch("/:id/aprovar", authMiddleware, reviewController.aprovarExercicio);

// ✅ Rejeitar exercício
router.patch("/:id/rejeitar", authMiddleware, reviewController.rejeitarExercicio);

// ✅ Histórico do professor
router.get("/historico", authMiddleware, reviewController.historicoProfessor);

module.exports = router;
