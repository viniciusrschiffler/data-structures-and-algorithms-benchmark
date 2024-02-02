import { writeFile } from "fs/promises";

const NUMBER_OF_NUMBERS = 500000;
(async () => {
    await writeFile('./src/numbers.json', JSON.stringify(generateRandomNumbers()))
    await writeFile('./src/numbers2.json', JSON.stringify(generateRandomNumbers()))
})()

function generateRandomNumbers() {
    const numbers: number[] = [];

    for (let i = 0; i < NUMBER_OF_NUMBERS; i++) {
        numbers.push(Math.floor(Math.random() * (99999999 - 1) + 1));
    }
    
    return numbers;
}