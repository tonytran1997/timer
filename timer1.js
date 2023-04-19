const input = process.argv.slice(2);
let timers = (input) => {
  for (let number of input) {
    let timer = number * 1000;
    setTimeout(() => {
      console.log('beep')
      process.stdout.write('\x07');
    }, timer);
  }
}
timers(input)