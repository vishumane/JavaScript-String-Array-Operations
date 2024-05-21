import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [neg, setNeg] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState([]);

  const onClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('hello');
  });
  const onClickk = () => {
    setNeg(neg - 1);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const addValue = () => {
    if (inputValue.trim() !== '') {
      setValues([...values, inputValue]);
      setInputValue('');
    }
  };

  const compareString = () => {
    // const temp = 'vishal';
    // console.log(temp, 'temp');
    let temp = 'vishal';
    let trup = 'Mane';
    if (temp === trup) {
      console.log('true');
    } else {
      console.log('false');
    }
  };

  let str1 = 'Hello, World!';
  let str2 = 'JavaScript is fun.';
  let str3 = `This is a template literal.`;

  let length = str1.length;
  console.log(length);
  // char and charAt
  let char = str1[0];
  let charAt = str1.charAt(0);
  console.log(char, charAt);
  // string operation with index

  let indexOfWorld = str1.indexOf('World'); // 7
  let lastIndexOfL = str1.lastIndexOf('l'); // 10
  let includesHello = str1.includes('Hello'); // true
  let startsWithHello = str1.startsWith('Hello'); // true
  let endsWithExclamation = str1.endsWith('!'); // true

  console.log(
    indexOfWorld,
    lastIndexOfL,
    includesHello,
    startsWithHello,
    endsWithExclamation
  );
  // string andf its sub-string
  let substring = str1.substring(0, 5); // 'Hello'
  let slice = str1.slice(7, 12); // 'World'
  let substr = str1.substr(7, 5); // 'World'
  console.log(substring, slice, substr);

  // casing [ uppcase- lowercase]
  let upper = str1.toUpperCase(); // 'HELLO, WORLD!'
  let lower = str1.toLowerCase(); // 'hello, world!'
  console.log(upper, lower);

  // trim methods
  let trimmed = '  Hello, World!  '.trim(); // 'Hello, World!'
  let trimStart = '  Hello, World!  '.trimStart(); // 'Hello, World!  '
  let trimEnd = '  Hello, World!  '.trimEnd(); // '  Hello, World!'

  console.log(trimmed, trimStart, trimEnd);

  // advanced string operation
  let newStr = str1.replace('World', 'JavaScript'); // 'Hello, JavaScript!'
  let newStrAll = str1.replace(/l/g, '1'); // 'He11o, Wor1d!' (using regex to replace all occurrences)

  console.log(newStr, newStrAll);
  // spliting string
  let parts = str1.split(', '); // ['Hello', 'World!']
  let chars = str1.split(''); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']
  console.log(parts, chars);

  // String concatnation

  let combined = str1.concat(' ', str2); // 'Hello, World! JavaScript is fun.'
  let combinedWithPlus = str1 + ' ' + str2; // 'Hello, World! JavaScript is fun.'

  console.log(combined, combinedWithPlus);

  //String literals
  let name = 'Alice';
  let greeting = `Hello, ${name}!`; // 'Hello, Alice!'
  let multiline = `This is a multiline string.`; // 'This is a\nmultiline string.'
  console.log(greeting, multiline);

  // regular expression
  let regex = /world/i; // case-insensitive
  let found = regex.test(str1); // true
  let match = str1.match(regex); // ['World']
  let replaced = str1.replace(regex, 'JavaScript'); // 'Hello, JavaScript!'

  console.log(found, match, replaced);

  //match , replace opeartion
  let complexRegex = /\b(\w+)\b/g; // match all words
  let allWords = str1.match(complexRegex); // ['Hello', 'World']
  let replacedWords = str1.replace(complexRegex, '$1!'); // 'Hello!, World!'
  console.log(allWords, replacedWords);

  // reverse String
  let reversed = str1.split('').reverse().join(''); // '!dlroW ,olleH'
  console.log(reversed);

  // capitalized first letter
  let titleCase = str2
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '); // 'JavaScript Is Fun.'

  console.log(titleCase);
  // string Palindrome
  let isPalindrome = (str: string) => {
    let cleaned = str.toLowerCase().replace(/[^a-z]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  };
  isPalindrome('A man, a plan, a canal, Panama'); // true

  console.log(isPalindrome('A man, a plan, a canal, Panama'));
  // array basic operations
  let array1 = [1, 2, 3, 4, 5];
  let array2 = new Array(3); // Creates an array of length 3
  let array3 = Array.from('hello'); // Creates an array from a string: ['h', 'e', 'l', 'l', 'o']
  console.log(array1, array2, array3);

  // accessing elements
  let firstElement = array1[0]; // 1
  let lastElement = array1[array1.length - 1]; // 5
  console.log(firstElement, lastElement);

  // iterating over array
  array1.forEach((item) => {
    console.log(item); // using the foreach
  });

  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]); // using for loop
  }

  for (let item of array1) {
    console.log(item); // using for loop
  }

  // Adding elements
  array1.push(6); // Adds 6 to the end
  array1.unshift(0); // Adds 0 to the beginning

  // Removing elements
  let popped = array1.pop(); // Removes and returns the last element
  let shifted = array1.shift(); // Removes and returns the first element
  console.log(popped, shifted);

  // slicing and spling array
  let sliced = array1.slice(1, 4); // Extracts elements from index 1 to 3
  let spliced = array1.splice(2, 2, 'a', 'b'); // Removes 2 elements starting from index 2, and inserts 'a' and 'b' in their place
  console.log(sliced, spliced);

  // concating arrays

  let concatenated = array1.concat([7, 8, 9]); // Concatenates array1 with another array
  let spreadConcat = [...array1, ...[7, 8, 9]]; // Another way to concatenate arrays using spread syntax
  console.log(concatenated, spreadConcat);

  // finding array element
  let index = array1.indexOf(3); // Finds the index of the first occurrence of 3
  let lastIndex = array1.lastIndexOf(3); // Finds the index of the last occurrence of 3
  let includes = array1.includes(3); // Checks if the array contains 3
  let founds = array1.find((item) => item > 3); // Finds the first element greater than 3
  let foundIndex = array1.findIndex((item) => item > 3); // Finds the index of the first element greater than 3
  console.log(index, lastIndex, includes, founds, foundIndex);

  // filtering element
  let filtered = array1.filter((item) => item % 2 === 0); // Filters even numbers
  console.log(filtered);

  //mapping array element
  let mapped = array1.map((item) => item * 2); // Doubles each element
  console.log(mapped, 'test');

  // reducing array element
  let reduced = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ); // Sums up all elements
  console.log(reduced, 'value');

  //sort method 

  let sorted = array1.slice().sort(); // Sorts the array
  let customSorted = array1.slice().sort((a, b) => a - b); // Sorts numerically
  console.log(sorted, customSorted);

// length of array 
  let isEmpty = array1.length === 0; // Checks if the array is empty
  let isArray = Array.isArray(array1); // Checks if it's an array
  console.log(isEmpty,isArray);
  return (
    <>
      <h1>React JS</h1>
      <button onClick={onClick}>plus {count}</button>
      <button onClick={onClickk}>minus {neg}</button>
      <input
        type="text"
        id="inputText"
        name="inputText"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={addValue}>Add</button>
      <ul>
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <button onClick={compareString}>test</button>
    </>
  );
}

export default App;
