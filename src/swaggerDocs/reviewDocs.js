/**
 * @swagger
 * tags:
 *   name: Revisão de Exercícios
 *   description: Endpoints para revisar, aprovar e rejeitar exercícios
 */

/**
 * @swagger
 * /revisao/rascunhos:
 *   get:
 *     summary: Lista exercícios pendentes do professor autenticado
 *     tags: [Revisão de Exercícios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de exercícios pendentes
 *       401:
 *         description: Token inválido ou não fornecido
 *       500:
 *         description: Erro ao buscar rascunhos
 */

/**
 * @swagger
 * /revisao/{id}/aprovar:
 *   patch:
 *     summary: Aprova um exercício
 *     tags: [Revisão de Exercícios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do exercício a ser aprovado
 *     responses:
 *       200:
 *         description: Exercício aprovado com sucesso
 *       404:
 *         description: Exercício não encontrado
 *       500:
 *         description: Erro ao aprovar exercício
 */

/**
 * @swagger
 * /revisao/{id}/rejeitar:
 *   patch:
 *     summary: Rejeita um exercício
 *     tags: [Revisão de Exercícios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do exercício a ser rejeitado
 *     responses:
 *       200:
 *         description: Exercício rejeitado com sucesso
 *       404:
 *         description: Exercício não encontrado
 *       500:
 *         description: Erro ao rejeitar exercício
 */

/**
 * @swagger
 * /revisao/historico:
 *   get:
 *     summary: Lista o histórico completo de exercícios de um professor
 *     tags: [Revisão de Exercícios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista completa dos exercícios
 *       401:
 *         description: Token inválido ou não fornecido
 *       500:
 *         description: Erro ao buscar histórico
 */

