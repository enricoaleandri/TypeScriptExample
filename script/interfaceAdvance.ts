interface FunzioneSuNumeri {
    (x: number, y: number, z:number):number
}

var somma: FunzioneSuNumeri;

// This doesn't give error, because the implementation can have less params declared
// but in fact you are obligated to invoke this function with signature declared number( and type) params
somma = function(a:number, b:number) {
    return a + b;
};
console.log("somma (2,3,3)",somma(2,3,3)); // this sum only the first two params, the third is ignored


interface ArrayDiStringhe {
    [index:number]: string
}

var arr: ArrayDiStringhe = ["uno", "due", "tre"];
console.log("Array :",JSON.stringify(arr));





interface Dizionario {
    [index:string]: string
}
var diz: Dizionario = {};
diz["chiave1"] = "valore1";
diz["chiave2"] = "valore2";
diz[22.3] = "test"; //Number of Index is casted in String value {"22.3":"test"}}
diz[0] = "test 3"; //Number of Index is casted in String value {"0":"test 3"}}

console.log("DIZ : ",JSON.stringify(diz));




interface ArrayDiOggetti {
  [index: number]: {id: number, label: string};
}
var arrObj: ArrayDiOggetti = [
  {id:1, label:"aaa"},
  {id:5, label:"bbb"}
];
console.log("Array of Object :",JSON.stringify(arrObj));




interface OggettoDiOggetti {
  [index: string]: {tel: string, name: string, timestamp : number};
}
var objObj: OggettoDiOggetti = {
    "Nuovo": {tel : "3235845658", name:"Marco", timestamp: 1231234234123},
    "Vecchio" : {tel: "3256859658", name:"Marco", timestamp: 1643463635234}
  };
console.log("Object of Object :",JSON.stringify(objObj));
