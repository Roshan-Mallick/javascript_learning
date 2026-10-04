let string_val = "roshan"
let number_val = 747

let convert_string_to_number = Number(string_val)
console.log(convert_string_to_number)   // NaN: "roshan" cannot be converted to a number; typeof NaN is "number"
console.log(typeof convert_string_to_number)

let convert_number_to_string = String(number_val)
console.log(convert_number_to_string)
console.log(typeof convert_number_to_string)


let val = 100
let negative_val = -val

console.log(negative_val)

let first_name = "Roshan "
let second_name = "Mallick"

console.log(first_name + second_name)

let full_name = first_name + second_name

console.log(full_name)


console.log(1 + 1 + 1)       // 3
console.log("1" + 1 + 1)    // "111" - string comes first, so concatenation happens
console.log(1 + 1 + "1")     // "21" - 1+1 happens first, then concatenation
console.log(1 + "1" + 1)     // "111" - string comes first, so concatenation happens


let num = 100

console.log(num++)           // 100 - POSTFIX: uses current value first, then increases num to 101
console.log(num)             // 101 - value increased after num++


console.log(num--)           // 101 - POSTFIX: uses current value first, then decreases num to 100
console.log(num)             // 100 - value decreased after num--


let num1 = 100

console.log(++num1)          // 101 - PREFIX: increases value first (100 → 101), then uses it
console.log(--num1)          // 100 - PREFIX: decreases value first (101 → 100), then uses it
