var marco = 12;
var test1 = "Ciao mMondo";
var test2 = {ciao : "asdasd", asd : "asdasd"};

if(test1.indexOf("on") == -1){
    console.log("ON Trovato");
}else{
  console.log("ON non Trovato");
}

function firstChar (a:string){
  return a.substr(0,1);
}
var res = firstChar(test1);
console.log(res);
