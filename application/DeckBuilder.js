function DeckBuilder() {
    return {
        _builderContainsRequiredProperties() {
            return Boolean(this.DeckClass && this.deckData && this.validator);
        },
        build()  {
            if (_builderContainsRequiredProperties()) {
                if (this.validator(this.deckData)) {
                    try {
                        return new DeckClass(this.deckData);
                    }

                    catch(e) {
                        throw 'Unexpected error: ' + e;
                    }
                }

                throw 'deckData is invalid';
            }

            throw 'DeckBuilder requires a DeckClass, deckData, and validator to build';
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