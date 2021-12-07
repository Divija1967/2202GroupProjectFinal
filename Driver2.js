// Write a script to
// Read the contents of both files (must use Promises when reading the text file)

"use strict";

const {promises: {readFile}} = require("fs");

const words = require('./words.json');
let synArr = words['Synonyms'];
//console.log(synArr);
let relArr = words['Related'];
let nearArr = words['Near Antonyms'];
let antArr = words['Antonyms'];

// Reads both files
Promise.all([
  readFile("words.json"),
  readFile("Optimism and your health.txt"),
]).then(([words, opt]) => {
  
    
  //console.log(words.toString()); // prints json file as variable
  //console.log(opt.toString()); // prints txt file as variable

  /*
  * *** currently prints a word count of zero for every category ***
  */

  console.log("Synonyms word count: " + wordCount(opt.toString(), "Synonyms", synArr));
  console.log("Related word count: " + wordCount(opt.toString(), "Related", relArr));
  console.log("Near Antonyms word count: " + wordCount(opt.toString(), "Near Antonyms", nearArr));
  console.log("Antonyms word count: " + wordCount(opt.toString(), "Antonyms", antArr));
  
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
       // console.log(wordsArr[i]);
        let textArr = text.toUpperCase().split(/\s_/g);
        let e = textArr[i];
        //counter++;
        for (e of textArr){
            if (e.replace(".","")==wordsArr[i].toUpperCase()){
                counter++;
            }
            counter++;
        }
    }
    //console.log(counter);
    //wordTypeObj.occurences = counter;
    return counter;
}
