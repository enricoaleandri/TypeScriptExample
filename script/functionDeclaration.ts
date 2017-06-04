
//just void function ,no return type
function voidFun():void {
    console.log("NO return function");
};

//editing local scope variable and return it
function moltiplicateFun(a:number, b:number):number{
    a = a*b;
    return a;
};

//Boolean return function, getting any value from params, this could throws exception
function isNumber(n:any):boolean{
    return !isNaN(n);
};



var a = 3;
var b = 6;
voidFun();
var res:number = moltiplicateFun(a,b);
//SubSequent varible declaration, same
var isNum:boolean = isNumber(1234);
console.log("isNum:Boolean", isNum);
// if I leave without type, I cane override the declaration with new definition like normal javascript
var isNum:boolean  = true;
var isNum = isNumber("1234");
console.log("isNum ", isNum)
//in case of different type of variable, I have to change name of variable to respect the constraint
var isNumA:any = isNumber("123.2134");
console.log("isNumA:any", isNumA);
//in case of different variable type, i have to change name of variable
var isNumN:number = isNumber("stoca")?1:0;
console.log("isNumN:number(casted)", isNumN);

console.log("A :",a, "B :", b, " RES : ",res);
