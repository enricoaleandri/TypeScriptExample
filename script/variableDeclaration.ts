
var num: number = 123;
var numFloat: number = 123.23;
let str: string = "456";
var numeri: number[] = [10, 15, 45];
var numeri2: Array<number> = [10, 15, 45];

//Tuple definition
var persona: [string, number] = ["Mario Rossi", 25];
var persone: [string, number] = ["Mario Rossi", 25, "Marco Amedeo", 27, "Giovanni Calarossi", 12];

console.log("Number :",typeof num);
console.log("Number Float :",typeof numFloat);
console.log("String :", Object.prototype.toString.call(str));//Check String type
console.log("Number [] :",Object.prototype.toString.call(numeri)); // Check Array type
console.log("Array <Number> :",Object.prototype.toString.call(numeri2));// Check Array type
console.log("Tupla [string, number]",Object.prototype.toString.call(persone));
console.log("Tupla stringify:\n",persone.join("\n"));
