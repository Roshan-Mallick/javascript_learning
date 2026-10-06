// Stack Memory ------------------------------------------>

let a = 20;
let b = a

console.log(a)
console.log(b)

a = 30

console.log(a)
console.log(b)

b = 40

console.log(a)
console.log(b)



// Heap Memory -------------------------------------------->


let user_1 = {
  name: "Roshan Mallick",
  email: "Roshanmallick2025@gmail.com"
}

// user_2 receives the SAME reference as user_1.
// Both variables point to the same object in Heap memory.
let user_2 = user_1

console.log(user_1)
console.log(user_2)

// Changing the object through user_2 affects user_1

user_2.email = "test@123.com"

console.log(user_1)
console.log(user_2)
