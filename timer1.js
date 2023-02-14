const args = process.argv.slice(2);

for (let arg of args) {
  if (!Number.isNaN(+arg) && +arg > 0) {
    setTimeout(() => {
      process.stdout.write(`\x07 • ${arg} seconds\n`);
    }, arg * 1000);
  }
}