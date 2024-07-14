//let score="33abc"//NaN
//let score ="33"//converted to 33
//let score ="true"//converted to 1 if false converted to 0
//let score =null//converted to 0
let score =undefined//converted to NaN


console.log(typeof score)
console.log(typeof(score));

let valueInNumber=Number(score)//convert to number
console.log("convert to number")
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn)//convert to boolean
console.log("convert to boolean")
console.log(typeof(booleanIsLoggedIn))//gives type as boolean
console.log(booleanIsLoggedIn)//has true

let isLoggedIn2="";//empty string 
let booleanIsLoggedIn2=Boolean(isLoggedIn2)//convert to boolean
console.log(typeof(booleanIsLoggedIn2))//gives type as boolean
console.log(booleanIsLoggedIn2)//has false

let isLoggedIn3="trupti";//string 
let booleanIsLoggedIn3=Boolean(isLoggedIn3)//convert to boolean
console.log(typeof(booleanIsLoggedIn3))//gives type as boolean
console.log(booleanIsLoggedIn3)//has true

let someNumber=33
let stringNumber=String(someNumber)
console.log("convert to  string")
console.log(typeof(stringNumber))
console.log(stringNumber)

console.log("---------------------------------------------------------------------------------------------")
console.log("OPERATIONS")

let value=3
let negvalue=-value
console.log(negvalue);

console.log(2+2);
console.log(2-2)
console.log(2*2);
console.log(2**2);//power 2 rest to 2
console.log(2**3);//2 rest to 3
console.log(2/3)//devide
console.log(2%3);//remainder

console.log("STRING CONCATENATE")
let str1="hello"
let str2=" Trupti"

let str3=str1+str2
console.log(str3)

console.log("-----------------------------------------------------------------------------------------------")
console.log("COMPLEX ONES")



