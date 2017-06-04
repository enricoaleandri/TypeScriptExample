

//tuple definition

var person: [string, number] = ["Mario Rossi", 25, 180, "Via le mani dal naso", true, {isNew : true}];

var c =  Number(2);
var d =  Number(5);
function sum(c:Number, d:Number){
  var x = c+d; //This normally works without TypeScript, it Tow Number Object can be summed with + operator
  console.log(x);
};

sum(c,d);
