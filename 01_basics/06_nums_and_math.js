const score=400
console.log(score);

const balance=new Number(100)
console.log(balance) 

console.log(balance.toString().length)

console.log(balance.toFixed(2))

const anotherNumber=123.897
console.log(anotherNumber.toPrecision(3))

const anotherNumber2=1234.897
console.log(anotherNumber2.toPrecision(3))

const anotherNumber3=123.897
console.log(anotherNumber3.toPrecision(4))

const num=100000000000
console.log(num.toLocaleString('en-IN'))

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));

console.log(Math.random());

console.log(Math.random());

console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)