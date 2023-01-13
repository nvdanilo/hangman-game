import promptSync from 'prompt-sync';
const prompt = promptSync();

export const print = text => console.log(text);

export const newLine = () => console.log();

export const read = text => prompt(text + " >> ");