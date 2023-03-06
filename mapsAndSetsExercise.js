//what does the Set return??
{1, 2, 3, 4};

//What does the code return?
"ref";

// WHat does Map m look like after running the code??
0: {Array(3) => true}
1: {Array(3) => false}
//it does this because it is based on their order.

//Write an array that returns true or false based on if the array has duplicates

const hasDuplicate = arr => new Set(arr).size !== arr.length
//based on the examples I assumed 'true' for has duplicates.  for the reverse you would just remove the 


//Write a function that takes a string and :
//returns a map where keys are vowels and values are vowel counts

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let smallChar = char.toLowerCase()
      if(isVowel(smallChar)){
        if(vowelMap.has(smallChar)){
          vowelMap.set(smallChar, vowelMap.get(smallChar) + 1);
        } else {
          vowelMap.set(smallChar, 1);
        }
      }
    }
    return vowelMap;
  }