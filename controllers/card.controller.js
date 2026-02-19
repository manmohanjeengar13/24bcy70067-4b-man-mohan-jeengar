import * as CardService from "../services/card.service.js";

export const getCards = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  res.json(CardService.paginateCards(page, limit));
};

export const getCardById = (req, res) => {
  const card = CardService.getCardById(req.params.id);
  if (!card) return res.status(404).json({ message: "Card not found" });
  res.json(card);
};

export const createCard = (req, res) => {
  const { suit, value, collection } = req.body;
  if (!suit || !value || !collection)
    return res.status(400).json({ message: "All fields required" });

  const card = CardService.createCard(req.body);
  res.status(201).json(card);
};

export const updateCard = (req, res) => {
  const updated = CardService.updateCard(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Card not found" });
  res.json(updated);
};

export const deleteCard = (req, res) => {
  const deleted = CardService.deleteCard(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Card not found" });
  res.json({ message: "Card deleted", deleted });
};
