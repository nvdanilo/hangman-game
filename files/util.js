const generateIntRandom = (min, max) => 
    Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

export const getRandomElement = array =>
    array[generateIntRandom(0, array.length - 1)];