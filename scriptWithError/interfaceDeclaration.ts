

function chiamaTaxi(chiamata: {partenza: string, destinazione: string, passeggeri:number}) {
    //immaginary service
    console.log("Partenza:", chiamata.partenza,
    "Destinazione :",chiamata.destinazione,
    "n° passeggeri :",chiamata.passeggeri);
};

var basicCall = {
  partenza : "Reggio Nell'Emilia",
  destinazione : "Milano"
};

chiamaTaxi(basicCall); // missing params required from interface
