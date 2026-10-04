let string_val = "roshan"
let number_val = 747

let convert_string_to_number = Number(string_val)
console.log(convert_string_to_number)   // NaN: "roshan" cannot be converted to a number; typeof NaN is "number"
console.log(typeof convert_string_to_number)

let convert_number_to_string = String(number_val)
console.log(convert_number_to_string)
console.log(typeof convert_number_to_string)
