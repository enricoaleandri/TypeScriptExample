function printData(a:number, b:Array<String>, c:string){
  console.log("Number :", a, "Array : [",b.join(","),"] String :",c);
}
var numberData = 12;
var arrayStringData = ["Ciao", "Mondo", "Guarda", "Come", "mi", "diverto"];
var stringData = "Ciao Mondo";

printData(
  numberData,
  arrayStringData,
  stringData
);


printData(
  null, // number can be null
  arrayStringData,
  stringData
);


printData(
  arrayStringData,
  numberData,
  stringData
);
