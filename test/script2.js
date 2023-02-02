//
let name = "noona"
let age = 17
let person = {
  name, //same the name 
  age
}

//
let person = {
  name: "noona",
  age: 20
}

//let name = person.name
//let age = person['age']
let { name, age } = person

//
let array = { 1, 2, 3, 4}
let [a, b, ...rest] = array
consloe.log(a, b) //1,2

//spread
let person = { name: "noona", age: 12 }
let person2 = { ...person, name: "jimin" }
let person3 = person

//
let a = [1, 2]
let b = [...a, 3]
let c = [...a, ...b] //{1,2,1,2,3}

// 
let person = { name: "noona", age="17" } //true // null - false
if (person) {
  console.log(person.name)
} else {
  console.log("there is no person")
}

person ? person.name : "there is no person" //threehang

