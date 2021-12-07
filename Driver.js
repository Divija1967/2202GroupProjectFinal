//reading file with promise
const fs = require('fs');
const { prototype } = require('module');


function getDataPromise(fileName, dataType){

    let promise = new Promise( (resolve, reject) => {

        fs.readFile("Optimism and your health.txt", "utf8", (error, data) => {
            if (data)
            resolve(data);
            else
            reject(error);
        }  );
    });

    return promise;
}

// getDataPromise('./Optimism and your health.txt', 'sample').then((data) => {
//    // console.log(data);
// });


const words = require('./words.json'); // imports and parses 
// Count the number of times the words of each category were mentioned. 
let arr = [];
function wordCount (text, cat, wordsArr){
    let wordCat = Object.getPrototypeOf(words);
    wordCat.category = cat;
    let counter =0;
    for(let i =0; i<wordsArr.length;i++){
        let textArr = text.toUpperCase().split(/\s_/g);
        for ( e of textArr){
            if (e.replace(".","")==wordsArr[i].toUpperCase()){
                counter++;
            }
        }
    }
    wordCat.occurences = counter;
    return wordCat;
}

// function wordCount (text, cat, wordsArr){
//     let wordTypeObj = Object.getPrototypeOf(words);
//     wordTypeObj.category = cat;
//     let counter =0;
//     for(let i =0; i<wordsArr.length;i++){
//         let textArr = text.toUpperCase().split(/\s_/g);
//         for ( e of textArr){
//             if (e.replace(".","")==wordsArr[i].toUpperCase()){
//                 counter++;
//             }
//         }
//     }
//     wordTypeObj.occurences = counter;
//     return wordTypeObj;
// }

function getWords(fileName, dataType){

    let promise = new Promise( (resolve, reject) => {

        fs.readFile("words.json", "utf8", (error, data) => {
            if (data)
            resolve(data);
            else
            reject(error);
        }  );
    });

    return promise;
}

let opt = "Optimism and your health.txt";
getWords('./words.json', 'sample').then((data) => {
   //console.log(data);

    const obj = JSON.parse(data);
    
});
    let synArr = obj.Synonyms;
    console.loh(synArr);
    let relArr = obj.Related;
    let nearArr = obj.Near_Antonyms;
    let antArr = obj.Antonyms;



console.log(wordCount(opt, "Synonyms", arr));
console.log(arr);

//E.g. when a word in the synonyms category is mentioned you increment the count for that category.


// Write the results in a file called results.txt
