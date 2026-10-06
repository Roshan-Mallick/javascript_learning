
const user_name = "Roshan-Mallick";
const age = 21;
const id = "     eth0x1     ";

const info = `My name is ${user_name}\nMy age is ${age}\nMy ID is ${id}`;

console.log(info)


console.log(`Length of user_name : ${user_name.length}`);

console.log(`First char of user_name : ${user_name[0]}`);

console.log(`char at index 2 : ${user_name.charAt(2)}`);

console.log(`Position of "M" : ${user_name.indexOf('M')}`);

console.log(`Converted to uppercase : ${user_name.toUpperCase()}`);

console.log(`Converted to lowercase : ${user_name.toLowerCase()}`);


console.log(id);

const removed_spaces = id.trim();

console.log(removed_spaces);

const first_name = user_name.slice(0, 6);
const last_name = user_name.slice(7, 14);

console.log(first_name);
console.log(last_name);

const name_array = user_name.split("-");

console.log(name_array);

const fruit = "apple mango grapes apple"

const replace_all = fruit.replaceAll("apple", "orange");

console.log(replace_all)

const replace = fruit.replace("apple", "orange")

console.log(replace)

const sub_string = user_name.substring(1, 6)

console.log(sub_string)

console.log(user_name.substring(-8, 5)); // if we put negative number so by default it starts from 0

const full_name = first_name.concat(" ", last_name);

console.log(full_name)
