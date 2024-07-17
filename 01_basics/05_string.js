const name="trupti"
const repocount=25

//console.log(name + repocount)
console.log(`hello my name is ${name} and my repocount is ${repocount} `)

console.log(name[0])

console.log(name.__proto__)

console.log(name.length)

console.log(name.toUpperCase())

console.log(name.charAt(2))

console.log(name.indexOf('u'))

let newName=name.substring(0,4)
console.log(newName)

const anotherName=name.slice(2,5)
console.log(anotherName)

const newString="   trupti    "
console.log(newString)
console.log(newString.trim());

const url="https://trupti.com/trupti%20Hande"
console.log(url.replace('%20',' '));

console.log(url.includes('trupti'))

const anothername="my-name-is-trupti-hande"

console.log(anothername.split('-'))


