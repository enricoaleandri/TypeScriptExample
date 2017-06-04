function chiamaTaxi(chiamata: {partenza: string, destinazione: string, passeggeri:number}) {
    //immaginary service
    console.log("Partenza:", chiamata.partenza,
    "Destinazione :",chiamata.destinazione,
    "n° passeggeri :",chiamata.passeggeri);
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

Object.assign(extendCall,basicCall);
console.log(extendCall);
