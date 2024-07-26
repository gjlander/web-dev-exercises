// Initialisation
// 1. Initialize an Array
// const myArray = [42, 'Hello, world!', true, 3, 14, 'JavaScript'];

// 2. Print the Array:
// console.log(myArray);

// 3. Access Array Elements:
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// 4. Modify an Array Element:
// myArray[1] = 'Changed Value';
// console.log(myArray[1]);

//Push, pop, shift, unshift
//1. Initialize an Array:
const myArray = [1, 2, 3, 4, 5];

// 2. Add Elements to the End of the Array:
myArray.push(6, 7);
console.log(myArray);

// 3. Remove the Last Element from the Array:
myArray.pop();
console.log(myArray);

// 4. Remove the First Element from the Array:
myArray.shift();
console.log(myArray);

// 5. Add Elements to the Beginning of the Array:
myArray.unshift(-1, 0);
console.log(myArray);

//Reversing
// Array 1: Use reverse() method
const array1 = [1, 2, 3, 4, 5];
// Reverse array1 in place and print the result

// Array 2: Use toReversed() method
const array2 = ['a', 'b', 'c', 'd', 'e'];

//1. Reverse the First Array in Place:
array1.reverse();

//2. Create a Reversed Copy of the Second Array:
const revArray = array2.toReversed();

//3. Print the Results:
console.log(array1);
console.log(revArray);
console.log(array2);

//Splicing
// Array 1: Use splice() method
const arrayA = [10, 20, 30, 40, 50];
// Modify array1 in place by removing and adding elements, then print the result

// Array 2: Use toSpliced() method
const arrayB = ['x', 'y', 'z'];
// Create a modified copy of array2 and print both arrays

//1. Remove the element at index 2 and add 35 and 36:
arrayA.splice(2, 1, 35, 36);

//2. Remove the element at index 1 and add b and c with toSpliced
const newArray = arrayB.toSpliced(1, 1, 'b', 'c');

//3. Print the Results:
console.log(arrayA);
console.log(newArray);
console.log(arrayB);
