// Write a script to
// Read the contents of both files (must use Promises when reading the text file)

"use strict";
const fs = require('fs');
const {promises: {readFile}} = require("fs");


const words = require('./words.json'); // imports and parses 
    let synArr = words['Synonyms'];
    let relArr = words['Related'];
    let nearArr = words['Near Antonyms'];
    let antArr = words['Antonyms'];

    // Reads both files
Promise.all([
  readFile("words.json"),
  readFile("Optimism and your health.txt"),
]).then(([words, opt]) => {

 // console.log(words.toString()); // prints json file as variable
 // console.log(opt.toString()); // prints txt file as variable

  /*
  * *** currently prints a word count of zero for every category ***
  */
  let resultsSyn = "Synonyms word count: " + wordCount(opt.toString(), "Synonyms", synArr);
  let resultsRel = "Related word count: " + wordCount(opt.toString(), "Related", relArr);
  let resultsNearA = "Near Antonyms word count: " + wordCount(opt.toString(), "Near Antonyms", nearArr);
    let resultsAnt = "Antonyms word count: " + wordCount(opt.toString(), "Antonyms", antArr);
    let results = resultsSyn + "\n" + resultsRel + "\n" + resultsNearA + "\n" + resultsAnt + "\n";
    fs.writeFile("results",results, function (err){
      if (err) throw err;
      console.log("Saved!");
  });
  
}).catch(error => {
  console.error(error.message);
  process.exit(1);
});

// fs.appendFile("results.txt","These are the results:",function (err)){
//     if (err) throw err;
//     console.log("Saved!");
// }


// fs.writeFile("Related word count: " + wordCount(opt.toString(), "Related", relArr));
// fs.writeFile("Near Antonyms word count: " + wordCount(opt.toString(), "Near Antonyms", nearArr));
// fs.writeFile("Antonyms word count: " + wordCount(opt.toString(), "Antonyms", antArr));
  

// Count the number of times the words of each category were mentioned. 
//E.g. when a word in the synonyms category is mentioned you increment the count for that category.
function wordCount (text, cat, wordsArr){
    let wordTypeObj = Object.getPrototypeOf(words);
    wordTypeObj.category = cat;
    let counter = 0;
    for(let i = 0; i<wordsArr.length;i++){
        let textArr = text.toUpperCase().split(/\s+/g);
        let e = textArr[i];
        for (e of textArr){
            if (e.replace(".", "")==wordsArr[i].toUpperCase()){
               // console.log(e);
                counter++;
            }
            e++;
            //counter++;
         
        }
        
    }
    wordTypeObj.occurences = counter;
    return counter;
}


