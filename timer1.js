//timer function
const timer = function(timeDelay) {
const parsedDelay = parseInt(timeDelay);
// console.log(parsedDelay);

  if (isNaN(parsedDelay)) {
    return;
  }
  if (parsedDelay < 0) {
    return;
  }

  setTimeout(() => {
    console.log(`${parsedDelay} seconds`);
    process.stdout.write('\x07');
  }, timeDelay * 1000)
};

//loop over user input
for (let j = 2; j < process.argv.length; j++) {
  timer(process.argv[j]);
}