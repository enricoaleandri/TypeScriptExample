var x = "asdas";
var y = 12;
function quadrato(n:number) {
    return n*n;
};

var y = quadrato(y);

console.log(y);
var test1 = "Ciao Mondo";

if(test1.indexOf("on") !== -1){
  console.log("ON Trovato");
}else{
  console.log("ON non Trovato");
}
function firstChar (a:string){
  return a.substr(0,1);
}
var res = firstChar(test1);
console.log(res);
