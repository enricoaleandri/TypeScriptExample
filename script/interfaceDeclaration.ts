
function _extend(origin, add?:any) {
  // Don't do anything if add isn't an object
  if (!add || typeof add !== 'object') return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

interface ChiamataTappeIntermedie {
    partenza: string,
    destinazione: string,
    passeggeri:number,
    sosteIntermedie : Array<string>,
    bagagli? : number // This means  the bagagli can be optional
}

function chiamataTaxiTappeIntermedie(chiamata: ChiamataTappeIntermedie) {
    //do som beautiful stuff with sosteIntermedie, like retrive coordinate or check price.

    chiamaTaxi(chiamata); // invoke basic immaginary service call
}
function chiamaTaxi(chiamata: {partenza: string, destinazione: string, passeggeri:number}) {
    //immaginary service
    console.log("Partenza:", chiamata.partenza,
    "Destinazione :",chiamata.destinazione,
    "n° passeggeri :",chiamata.passeggeri,
   );
   if(Object.keys(chiamata).length > 3){
     var othersParam = _extend({},chiamata);
     delete othersParam.partenza;
     delete othersParam.destinazione;
     delete othersParam.passeggeri;
     console.log("Other params:", JSON.stringify(othersParam));
   }
};


enum paymentMethod  {Visa = 10, Mastercard = 11, Cash = 0};
var basicCall = {
  partenza : "Reggio Nell'Emilia",
  destinazione : "Milano",
  passeggeri : 3
};

var extendCall = {
  bagagli : 4,
  sosteIntermedie : [
    "Parma",
    "Lodi"
  ],
  paymentMethod : paymentMethod[paymentMethod.Cash]
};


chiamaTaxi(basicCall);
chiamaTaxi(_extend(basicCall, extendCall));
