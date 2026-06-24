import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const COUNT = 10;
let sum = 0;
let entered = 0;

const askNext = () => {
  rl.question(`Enter number ${entered + 1} of ${COUNT}: `, (answer) => {
    const value = Number(answer.trim());

    if (!Number.isFinite(value)) {
      console.log("That is not a valid number, please try again.");
      return askNext();
    }

    sum += value;
    entered += 1;

    if (entered < COUNT) {
      return askNext();
    }

    console.log(`Sum of the ${COUNT} numbers: ${sum}`);
    rl.close();
  });
};

askNext();
