// TYPESCRIPT FUNCTION CARDIO
//1
function multiply(a: number, b: number) {
  return a * b;
}

multiply(2, 5); // 10
//@ts-expect-error
multiply('2', true);

//2
function greet(person: string) {
  return `Hello ${person}`;
}

greet('Steve'); //Hello Steve
//@ts-expect-error
greet({ id: 1, name: 'Steve' });

//3
const user = {
  firstName: 'Karl',
  lastName: 'Karlsen',
  email: 'karl@example.com'
};

type User = {
  firstName: string;
  lastName: string;
};

function getWelcomeMessage(user: User) {
  return `Welcome, ${user.firstName} ${user.lastName}`;
}

getWelcomeMessage(user); // "Welcome, Karl Karlsen"
//@ts-expect-error
getWelcomeMessage({ firstName: 'Alan' });

//4
function isEven(num: number): boolean {
  return num % 2 == 0;
}

isEven(4); //true
//@ts-expect-error
isEven('4');
//@ts-expect-error
const result: string = isEven(5);

//5
function getFirstElementofStringArray(arr: string[]) {
  return arr[0];
}

getFirstElementofStringArray(['a', 'b', 'c', 'd']); //"a"
//@ts-expect-error
getFirstElementofStringArray([1, 2, 3, 4]);

//6
function sumOfNumbers(number: number[]): number {
  return number.reduce((sum, current) => sum + current, 0);
}

sumOfNumbers([1, 2, 3, 4]); // 10
//@ts-expect-error
sumOfNumbers(['1', '2', '3']);

//7
function getProductInfo(product: [string, number]) {
  return `Product: ${product[0]}, Price: $${product[1]}`;
}

getProductInfo(['Laptop', 1200]); // "Product: Laptop, Price: $1200"
//@ts-expect-error
getProductInfo([1200, 'Laptop']);
//@ts-expect-error
getProductInfo(['Keyboard']);

//8
function formatUserInput(input: any) {
  return `User said ${input}`;
}

formatUserInput('hello'); // "User said hello"
formatUserInput(12434); // "User said 1243"
//@ts-expect-error
let output: number = formatUserInput(400);

// 9
type UserID = number;

function fetchUserData(id: UserID) {
  return { id, name: `User ${id}` };
}

fetchUserData(123); // id: 123, name: "User 123"
//@ts-expect-error
fetchUserData('aa1123b');

// 10
type Rectangle = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};
function getWidth(rectangle: Rectangle) {
  return rectangle.x2 - rectangle.x1;
}

getWidth({ x2: 100, x1: 50, y2: 220, y1: 120 });
//@ts-expect-error
getWidth({ y1: 2, y2: 1 });

//11
type Response = [number, string];

function handleResponse(response: Response) {
  return `Status: ${response[0]}, Body: "${response[1]}"`;
}

handleResponse([200, 'OK']);
handleResponse([404, 'Not Found']);
//@ts-expect-error
handleResponse([500]);
//@ts-expect-error
handleResponse('I am a teapot');

//12
function logValue(input: string | number | boolean) {
  console.log(input);
}

logValue('hello');
logValue(42);
logValue(false);

//@ts-expect-error
logValue({ value: 'no' });

//13
type ApiData = string;

async function fetchData(url: string) {
  return `Data from ${url}`;
}

// How do we need to change this line to make this work?
const data: ApiData = await fetchData('/api/user');
console.log(data);
