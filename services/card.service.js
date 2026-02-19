import * as CardModel from "../models/card.model.js";

export const paginateCards = (page = 1, limit = 10) => {
  const cards = CardModel.getAllCards();

  const start = (page - 1) * limit;
  const end = page * limit;

  return {
    totalCards: cards.length,
    totalPages: Math.ceil(cards.length / limit),
    currentPage: page,
    limit,
    cards: cards.slice(start, end),
    next: end < cards.length ? { page: page + 1, limit } : null,
    previous: start > 0 ? { page: page - 1, limit } : null
  };
};

export const createCard = (data) => {
  const newCard = { id: Date.now().toString(), ...data };
  return CardModel.addCard(newCard);
};

export const getCardById = CardModel.getCardById;
export const updateCard = CardModel.updateCard;
export const deleteCard = CardModel.deleteCard;
