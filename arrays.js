"use strict";


/** 1. printIndices */
const printIndices = (items) => {
  for(const item of items){
    console.log(item);
  }	
};

const items = [22, 13, 4,23,1];
// printIndices(items);

/** 2. everyOtherItem */
const everyOtherItem = (items) => {
	// Replace this with your code
  const result = [];
  for(const i in items){
    if(i%2 === 0){
        result.push(items[i]);
    }
  }
  printIndices(result);
};
// everyOtherItem(items);

/** 3. smallestNItems */
const smallestNItems = (items, n) => {
	// Replace this with your code
  items.sort((a,b)=>a-b);
  const result = items.slice(0,n);
  
  console.log(result);
};

smallestNItems(items, 4)