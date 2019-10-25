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
