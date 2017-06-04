function voidFun():void {
    console.log("NO return function");
};

function moltiplicateFun(a:number, b:number):number{
    a = a*b;
    return a;
};
function isNumber(n:any):boolean{
    return !isNaN(n);
};



var a = 3;
var b = 6;
var c =  Number(2);
var d =  Number(5);
voidFun();
var res:number = moltiplicateFun(a,b);
var isNumb:boolean = isNumber(1234);
var isNumN = isNumber("1234");
var isNum:any = isNumber("123.2134");

console.log("A :",a, "B :", b);
console.log("C :",c, "D :", d);
