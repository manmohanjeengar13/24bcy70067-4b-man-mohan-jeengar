import express from "express";
import * as controller from "../controllers/card.controller.js";

const router = express.Router();

router.get("/", controller.getCards);
router.get("/:id", controller.getCardById);
router.post("/", controller.createCard);
router.put("/:id", controller.updateCard);
router.delete("/:id", controller.deleteCard);

export default router;
