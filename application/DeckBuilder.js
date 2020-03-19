function DeckBuilder() {
    return {
        build()  {
            if (this.validator(this.deckData)) {
                return new DeckClass(this.deckData);
            }

            throw 'deckData is invalid';
        },
        fromClass(DeckClass) {
            this.DeckClass = DeckClass;

            return this;
        },
        fromDeckData(deckData) {
            this.deckData = deckData;

            return this;
        },
        withValidator(validator) {
            if (typeof validator === 'function') {
                this.validator = validator;

                return this;
            }

            throw 'arg: validator must be a function';
        }
    };
}