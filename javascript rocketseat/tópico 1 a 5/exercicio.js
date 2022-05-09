let weight

console.log(typeof weight) // undefined

let name = 'Caio'
let age = 23
let stars = 4.5
let isSubscribed = true

// object

let student = {
  name: 'Caio',
  age: 23,
  weight: 80.7,
  isSubscribed: true
}

console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} Kg.`
)

let students = []

students = [student]

console.log(students)

console.log(students[0])

const madu = {
  name: 'Madu',
  age: 20,
  weight: 50.5,
  isSubscribed: true
}

// students = [student, madu]

students[1] = madu

console.log(students)

console.log(students[1])
