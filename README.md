🃏 REST API for Playing Card Collection
🎯 Aim

To develop a RESTful API for managing playing card collections using Express.js, following MVC architecture and implementing full CRUD operations with pagination and request logging.

🛠️ Hardware / Software Requirements

Node.js 18+

Express.js

pnpm

Postman

VS Code

MongoDB (optional – current implementation uses in-memory storage)

📦 Project Overview

This project builds a small REST API for managing a collection of playing cards.

The API:

Uses an in-memory array as a mock database

Follows MVC architecture

Supports CRUD operations

Implements pagination

Logs requests in the terminal using custom middleware

📁 Folder Structure
24bcy70067-4b-manmohan-jeengar/
│
├── index.js
├── package.json
├── controllers/
│   └── card.controller.js
├── models/
│   └── card.model.js
├── routes/
│   └── card.routes.js
└── services/
    └── card.service.js

⚙️ Installation & Setup
1️⃣ Navigate to Project
cd 24bcy70067-4b-manmohan-jeengar

2️⃣ Install Dependencies
pnpm install

3️⃣ Run the Server
pnpm dev


Server will start at:

http://localhost:3000

📜 package.json Configuration
{
  "name": "24bcy70067-4b-manmohan-jeengar",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}

🧠 Architecture (MVC Pattern)
1️⃣ Model (Data Layer)

Manages in-memory storage.

let cards = [];

export const getAllCards = () => cards;

export const addCard = (card) => {
  cards.push(card);
  return card;
};

2️⃣ Service (Business Logic)

Handles pagination and business rules.

export const paginateCards = (page = 1, limit = 10) => {
  const cards = CardModel.getAllCards();
  const start = (page - 1) * limit;
  const end = page * limit;

  return {
    totalCards: cards.length,
    totalPages: Math.ceil(cards.length / limit),
    currentPage: page,
    limit,
    cards: cards.slice(start, end)
  };
};

3️⃣ Controller (Request Handling)

Handles validation and responses.

export const createCard = (req, res) => {
  const { suit, value, collection } = req.body;

  if (!suit || !value || !collection) {
    return res.status(400).json({ message: "All fields required" });
  }

  const card = CardService.createCard(req.body);
  res.status(201).json(card);
};

4️⃣ Routes

Defines API endpoints.

router.get("/", controller.getCards);
router.post("/", controller.createCard);
router.put("/:id", controller.updateCard);
router.delete("/:id", controller.deleteCard);

🔄 Middleware Used
JSON Parser
app.use(express.json());

CORS Support
app.use(cors());

Custom Logging Middleware

Logs every incoming request in the terminal.

app.use((req, res, next) => {
  console.log(`📌 ${req.method} ${req.url}`);
  next();
});

Example Terminal Output
🚀 Server running on port 3000
📌 GET /cards
📌 POST /cards
📌 PUT /cards/171836785992
📌 DELETE /cards/171836785992

🌐 API Base URL
http://localhost:3000

📌 API Endpoints
🔹 GET /cards

Retrieve all cards (supports pagination).

Query Parameters
Parameter	Default	Description
page	1	Page number
limit	10	Items per page
Example
GET /cards?page=1&limit=5

Response Example
{
  "totalCards": 1,
  "totalPages": 1,
  "currentPage": 1,
  "limit": 10,
  "cards": [
    {
      "id": "171836785992",
      "suit": "diamonds",
      "value": "queen",
      "collection": "royal"
    }
  ]
}

🔹 GET /cards/:id

Retrieve a specific card by ID.

🔹 POST /cards

Create a new card.

Request Body
{
  "suit": "hearts",
  "value": "ace",
  "collection": "classic"
}

🔹 PUT /cards/:id

Update a card.

{
  "suit": "spades"
}

🔹 DELETE /cards/:id

Delete a card by ID.

🧪 Testing with Postman

Select request type (GET, POST, PUT, DELETE)

Enter URL: http://localhost:3000/cards

For POST/PUT:

Go to Body → raw → JSON

Add header:

Content-Type: application/json


Click Send