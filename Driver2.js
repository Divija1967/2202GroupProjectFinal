// Write a script to
// Read the contents of both files (must use Promises when reading the text file)

"use strict";

const {promises: {readFile}} = require("fs");

const words = require('./words.json');

// Reads both files
Promise.all([
  readFile("words.json"),
  readFile("Optimism_and_your_health.txt"),
]).then(([words, opt]) => {

  console.log(words.toString()); // prints json file as variable
  console.log(opt.toString()); // prints txt file as variable

  /*
  * *** currently prints a word count of zero for every category ***
  */

  console.log("Synonyms word count: " + wordCount(opt.toString(), "Synonyms", JSON.parse(words)).occurences);
  console.log("Related word count: " + wordCount(opt.toString(), "Related", JSON.parse(words)).occurences);
  console.log("Near Antonyms word count: " + wordCount(opt.toString(), "Near Antonyms", JSON.parse(words)).occurences);
  console.log("Antonyms word count: " + wordCount(opt.toString(), "Antonyms", JSON.parse(words)).occurences);
  
}).catch(error => {
  console.error(error.message);
  process.exit(1);
});


// Count the number of times the words of each category were mentioned. 
//E.g. when a word in the synonyms category is mentioned you increment the count for that category.
function wordCount (text, cat, wordsArr){
    let wordTypeObj = Object.getPrototypeOf(words);
    wordTypeObj.category = cat;
    let counter =0;
    for(let i =0; i<wordsArr.length;i++){
        let textArr = text.toUpperCase().split(/\s_/g);
        for (e of textArr){
            if (e.replace(".","")==wordsArr[i].toUpperCase()){
                counter++;
            }
        }
    }
    wordTypeObj.occurences = counter;
    return wordTypeObj;
}
