const createValidationSuiteRunner = reducer => validators => value => {
    return validators.reduce(reducer.bind(null, value), true);
};

const validationReducer = (value, isValid, validator) => {
    return isValid && validator(value)
};

const validateCardProperties = card => {
    return Boolean(Object.keys(card).length === 2 && card.front && card.back);
};

const validateDeckShape = callback => deck => {
    return deck.every(callback);
};

export const deckValidator = createValidationSuiteRunner(validationReducer)([
    validateDeckShape(validateCardProperties)
]);