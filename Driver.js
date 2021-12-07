// Write a script to
// Read the contents of both files (must use Promises when reading the text file)

const {readFile} = require("fs");

const fileRead = (path) => {
  readFile(path, (error, fileBuffer) => {
    if (error) {
      console.error(error.message);
      process.exit(1);
    }

    const fileContent = fileBuffer.toString();

    console.log(fileContent);
  });
};

fileRead("package.json");
fileRead("README.md");
fileRead("index.js");

// teddy bear
const fs = require('fs');
const { Module } = require('module');
function getData(fileName, type) {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(fileName, type, (error, data)=>{
            if (data){
                resolve(data);
            } 
            else{
                reject(error);
            }
        });
    });
    return promise;

}
        module.exports = file;


        function wordCount (text, cat, wordsArr){
            let wordTypeObj = Object.getPrototypeOf(words);
            wordTypeObj.category = cat;
            let counter =0;
            for(let i =0; i<wordsArr.length;i++){
                let textArr = text.toUpperCase().split(/\s_/g);
                for ( e of textArr){
                    if (e.replace(".","")==wordsArr[i].toUpperCase()){
                        counter++;
                    }
                }
            }
            wordTypeObj.occurences = counter;
            return wordTypeObj;
        }
 //       return new Promise(function(resolve, reject) {
   //         for (let i = 0; i < data.length; i++) {
       //         arr.push(data[i]);
     //       }

 //           resolve();
   //     });
    //});
//}

getData('./Optimism_and_your_health.txt', 'sample').then((data) => {
    console.log(data);
});

// Count the number of times the words of each category were mentioned. 
//E.g. when a word in the synonyms category is mentioned you increment the count for that category.


// Write the results in a file called results.txt


