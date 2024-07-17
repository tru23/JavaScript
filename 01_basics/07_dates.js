let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())

console.log(typeof myDate)

//let myCreateDate=new Date(2001,7,23)
let myCreateDate=new Date(" 2001-08-23")
console.log(myCreateDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp);

// console.log(myCreateDate.getTime());

console.log(Date.now());