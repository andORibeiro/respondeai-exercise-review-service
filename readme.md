# ✅ RespondeAI Exercise Review Service

[![Documentação Swagger](https://img.shields.io/badge/Swagger-Documentação-green?logo=swagger)](http://localhost:3004/api-docs)

🚀 **RespondeAI Exercise Review Service** é um microserviço responsável pela revisão de exercícios gerados via IA. Ele permite que professores aprovem ou rejeitem exercícios que estão no estado de rascunho, controlando o fluxo de qualidade antes da publicação.

---

## 🧠 Inspirado por

Esse projeto faz parte do ecossistema **RespondeAI**, focado em soluções educacionais assistidas por IA.

---

## 🛠️ Funcionalidades

- **Listagem de exercícios pendentes de revisão (status: rascunho)**
- **Aprovação de exercícios**
- **Rejeição de exercícios**
- **Filtragem por assunto e ano letivo**
- **Integração com MongoDB Atlas**

---

## 📁 Estrutura de Pastas

```bash
respondeai-exercise-review-service/
├── .env.example                 # Exemplo de variáveis de ambiente
├── README.md                    # Documentação do projeto
├── server.js                    # Inicialização do servidor
├── src/
│   ├── config/
│   │   └── swaggerConfig.js     # Configuração do Swagger
│
│   ├── controllers/
│   │   └── reviewController.js  # Controlador principal do serviço
│
│   ├── models/
│   │   └── Exercise.js          # Modelo do exercício (espelhado do gerador)
│
│   ├── routes/
│   │   └── reviewRoutes.js      # Rotas da API para revisão de exercícios
│
│   └── swaggerDocs/
│       └── reviewDocs.js        # Comentários centralizados da documentação Swagger
```

---

## ✅ Pré-requisitos

- Node.js >= 18
- MongoDB Atlas (ou local)
- Postman ou Swagger para testes

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/respondeai-exercise-review-service.git

# Acesse a pasta
cd respondeai-exercise-review-service

# Instale as dependências
npm install

# Copie as variáveis de ambiente
cp .env.example .env

# Inicie o servidor
npm start
```

---

## 🔐 Variáveis de Ambiente

```bash
PORT=3004
MONGODB_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/respondeai_exercicios
```

---

## 📄 Endpoints Úteis

| Método | Rota                                | Descrição                              |
|--------|-------------------------------------|----------------------------------------|
| GET    | /revisao/rascunhos                  | Lista exercícios pendentes (rascunho)  |
| PATCH  | /revisao/:id/aprovar                | Aprova um exercício específico          |
| PATCH  | /revisao/:id/rejeitar               | Rejeita um exercício específico         |

---

## 📘 Documentação Swagger

Acesse a documentação interativa da API em:

```bash
http://localhost:3004/api-docs
```

### Nela você pode:
- Testar os endpoints diretamente
- Visualizar exemplos de requisições
- Entender os contratos de entrada e saída da API

---
