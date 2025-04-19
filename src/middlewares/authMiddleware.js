module.exports = async (req, res, next) => {
    console.warn("⚠️ Autenticação mockada para testes.");
    req.user = { uid: "test-user" }; // substitua depois pelo Firebase real
    next();
  };
  