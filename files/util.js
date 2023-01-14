const generateIntRandom = (min, max) => 
    Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

export const getRandomElement = array =>
    array[generateIntRandom(0, array.length - 1)];

export const isEqualArrays = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }

    const sortedA = [ ...a ].sort();
    const sortedB = [ ...b ].sort();

    return sortedA.every((e, i) => e === sortedB[i]);
}