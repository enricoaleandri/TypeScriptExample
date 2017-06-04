
var num: number = 123;
var numFloat: number = 123.23;
let str: string = "456";
var numeri: number[] = [10, 15, 45];
var numeri2: Array<number> = [10, 15, 45];
//Enumeration type
enum Frutta {Mela, Arancia, Pera, Banana};
enum Lavori {Programmatore = 30000, Manager = 45000, Medico = 80000, Superman = 21000};
var MelaCode:Frutta = Frutta.Mela;
// Retrive name of enumeration type. Give Enum.Type value to Enum array.
var MelaName:string = Frutta[Frutta.Mela];
var LavoroName:string = Lavori[Lavori.Programmatore];
var LavoroRAL:Lavori = Lavori.Programmatore;
var AnyValue: any = 123;

AnyValue = "Una stringa";
AnyValue = true;
AnyValue = [12,12,12];


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
console.log("\n\n");
console.log("Frutta Stringify :",JSON.stringify(Frutta));
console.log("MelaCode :", MelaCode);
console.log("MelaName :", MelaName);
console.log("Lavori Stringify :",JSON.stringify(Lavori));
console.log("LavoroRAL :", LavoroRAL);
console.log("LavoroName :", LavoroName);
console.log("AnyValue :", AnyValue);
