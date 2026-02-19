let cards = [
  {
    id: Date.now().toString(),
    suit: "diamonds",
    value: "queen",
    collection: "royal"
  }
];

export const getAllCards = () => cards;

export const getCardById = (id) =>
  cards.find(card => card.id === id);

export const addCard = (card) => {
  cards.push(card);
  return card;
};

export const updateCard = (id, updatedData) => {
  const index = cards.findIndex(c => c.id === id);
  if (index === -1) return null;

  cards[index] = { ...cards[index], ...updatedData };
  return cards[index];
};

export const deleteCard = (id) => {
  const index = cards.findIndex(c => c.id === id);
  if (index === -1) return null;

  const deleted = cards[index];
  cards.splice(index, 1);
  return deleted;
};
