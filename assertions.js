export const assertEqual = (actual, expected, message = 'Values are not equal') => {
    if (actual !== expected) {
        throw new Error(`${message}: Expected ${expected}, but got ${actual}`);
    }
};

export const assertNotEqual = (actual, expected, message = 'Values are equal') => {
    if (actual === expected) {
        throw new Error(`${message}: Expected not ${expected}, but got ${actual}`);
    }
};

export const assertTrue = (value, message = 'Value is not truthy') => {
    if (!value) {
        throw new Error(`${message}: Expected truthy, but got ${value}`);
    }
};

export const assertFalse = (value, message = 'Value is not falsy') => {
    if (value) {
        throw new Error(`${message}: Expected falsy, but got ${value}`);
    }
};

export const assertContains = (array, item, message = 'Array does not contain the item') => {
    if (!array.includes(item)) {
        throw new Error(`${message}: Expected array to contain ${item}`);
    }
};