"use strict";


/** 1. countWords */
function countWords(phrase) {
	// Replace this with your code
  const wordCount = {};
  for(const word of phrase.split(' ')){
    if(Object.keys(wordCount).includes(word)){
        wordCount[word] += 1;
    }
    else{
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

console.log(countWords('hollo world hello hello'))
/** 2. getMelonsAtPrice */
function getMelonsAtPrice(price) {
	// Replace this with your code
  const melon_price = {
        2.50: ['Cantaloupe', 'Honeydew'],
        2.95: ['Watermelon'],
        3.25: ['Musk', 'Crenshaw'],
        14.25: ['Christmas']
  };
  //console.log(Object.keys(melon_price).includes(price.toString()));
  if (Object.keys(melon_price).includes(price.toString())){
      return melon_price[price];
    }
}

console.log(getMelonsAtPrice(3.25));


function wordsInCommon(words1, words2){
  const words1_set = new Set(words1);
  const words2_set = new Set(words2);

  const result = new Set();

  for (const word of words1_set){
    if (words2_set.has(word)){
      result.add(word);
    }
  }
  return Array.from(result);
}

console.log(wordsInCommon(['hi','hi','set'],['hi','hi','setting']))

function kidsGame(wordList){
  const result = [].push(wordList.shift());
  const wordListObj = {};

  for(const word of wordList){
    if(wordListObj[word[0]] === undefined){
       wordListObj[word[0]] = [];
      }
    
    wordListObj[word[0]].push(word);
  }
  let lengthOfResult = 0;
  let startLetter;
  let lengthOfWord;
  let searchWord;
  while(true){
    lengthOfResult = result.length;
    searchWord =result[lengthOfResult-1];
    lengthOfWord = searchWord.length;
  
    startLetter = result[lengthOfResult-1][lengthOfWord-1];
    if(wordListObj[startLetter] === []){
      break;
    }
    result.push(wordListObj[startLetter].shift());
  }
  console.log(result)
}
kidsGame(["noon", "naan", "nun"]);