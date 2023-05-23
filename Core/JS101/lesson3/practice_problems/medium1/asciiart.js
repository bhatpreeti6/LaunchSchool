const line = 'The Flintstones Rock!';
for (let i = 0; i < 10; i += 1) {
  console.log(line.padStart(line.length + i));
}
