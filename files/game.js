import * as io from './io.js';
import { Word } from './word.js';

function play() {
    io.print("Welcome!");

    const word = new Word();

    while(true) {
        io.newLine();
        io.print(word.maskedWord);

        const letter = io.read("Guess");

        if (word.guess(letter)) {
            io.print("Hit!!! :D");
        } else {
            io.print("Miss... :(");
        }
    }
}

play();