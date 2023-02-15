const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log("-input b to beep right away");
console.log("-input any number from 1 to 9, beep after that number of senconds");
console.log("-press Ctrl+c to exit the program");
stdin.on('data',(key) => {
  // process.stdout.write(key + "\n");
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
  if (key === 'b') process.stdout.write(`\x07`);
  if (+key > 0 && +key < 10) {
    process.stdout.write(`setting timer for ${key} seconds... \n`);
    setTimeout(() => {
      process.stdout.write(`\x07`);
    }, +key * 1000);
  }
}
);