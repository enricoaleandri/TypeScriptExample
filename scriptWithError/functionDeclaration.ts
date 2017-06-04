
function intFun(a:number, b:number):number{
    a = a*b;
    return;
};

function isNumber(n:any):boolean{
    return !isNaN(n);
};

var isNum:any = isNumber("1234");
var isNum = isNumber("123.2134");//SubSequent variable declaration problem, dont know!!

var c = new Number(2);
var d = new Number(5);
intFun(c,d);

console.log("C :",c, "D :", d);
