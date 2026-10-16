// ++++++++++++++++++ Numbers +++++++++++++++++++++++++ //

const user1_bal = 10000;

const user2_bal = new Number(1000000);

console.log(user1_bal);

console.log(typeof (user1_bal));

console.log(user2_bal);

console.log(typeof (user2_bal));

console.log(user2_bal.toFixed(4));

console.log(user2_bal.toString().length);

const dec_number = 82.989899999;

console.log(dec_number.toPrecision(2));

console.log(dec_number.toPrecision(3));

console.log(dec_number.toPrecision(4));


const value = 100000000;

console.log(value.toLocaleString('en-IN'));





//+++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++


console.log(Math);

console.log(Math.PI);

console.log(Math.abs(-4));

console.log(Math.abs(4));

console.log(Math.round(5.3));

console.log(Math.ceil(5.4));

console.log(Math.floor(5.8));


console.log(Math.sqrt(4));

console.log(Math.pow(2, 2));

console.log(Math.min(2, 3, 4, 5, 1, 7));

console.log(Math.max(2, 3, 4, 5, 1, 7));

console.log(Math.random());

console.log(Math.random() * 10 + 1);

console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10 + 1));

console.log(Math.ceil(Math.random() * 10));


const min = 10;

const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

console.log(Math.ceil(Math.random() * (max - min)) + min);
