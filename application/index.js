import { DeckBuilder } from './DeckBuilder';
import { deckValidator } from './validation';
import { Deck } from './Deck';

const buildDeck = (Builder, validator, DeckClass) => deck => {
    return Builder().fromClass(DeckClass).withValidator(validator).fromDeckData(deck).build();
};

export const createDeckFromData = buildDeck(DeckBuilder, deckValidator, Deck);