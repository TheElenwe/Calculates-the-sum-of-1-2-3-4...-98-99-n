let readlineSync = require('readline-sync')

let number = readlineSync.question("Give me number: ");

number = parseFloat(number)


let total=0;
for (let i=0; i<99; i++){
    total= total +(i+1);
 totalAmount=(total+number)
}
console.log(totalAmount)

