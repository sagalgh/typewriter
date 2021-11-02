//Animate the sentence, revealing one character at a time
//Take a sentence and display it as an animation, with a 50 ms delay after each letter is printed
const sentence = "hello there from lighthouse labs";
const word = sentence.split(" ");
console.log(word)
let delay = 50;
for (const letter of word) {
  setTimeout(() => {
    process.stdout.write(letter + " ");
  }, delay) 
  delay +=50;
}
