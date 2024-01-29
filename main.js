function randint(min, max) {
  var alea = min + Math.floor(Math.random() * (max - min + 1));
  //console.log(alea);
  return alea;
}

meteo = randint(1,5) // 1 is snowy ; 2 is stormy ; 3 is rainy ; 4 is cloudy ; 5 is sunny
previousMeteo = "";
temperature = null;

money = 0 ; jour = 0
const moneyHtml = $("#argent")
const jourHtml = $("#jour")

function updateJour() {
  jourHtml.html("Jour: "+jour)
}
function updateMoney() {
  moneyHtml.html("Argent: $"+money)
}
updateJour() ; updateMoney()

function setMeteo(meteo) {
  $(previousMeteo).hide();

  if (meteo === 1) {
    temperature = randint(15,20)
    $("#neige").show() ; previousMeteo = "#neige";
  }
  else if (meteo === 2) {
    temperature = randint(17,22)
    $("#tempete").show() ; previousMeteo = "#tempete";
  }
  else if (meteo === 3) {
    temperature = randint(19,24)
    $("#pluie").show() ; previousMeteo = "#pluie";
  }
  else if (meteo === 4) {
    temperature = randint(22,27)
    $("#nuage").show() ; previousMeteo = "#nuage";
  }
  else if (meteo === 5) {
    temperature = randint(27,35)
    $("#soleil").show() ; previousMeteo = "#soleil";
  }
}
setMeteo(meteo)

function CustomersPerday(Customers){
  customers = temperature*0.5
}

function customerMove(){
  Customer1= $("#customer1")
  Customer1.css("","")
} 

function lancerJeu() {
  $("#startGame").attr("disabled", "disabled");
  setMeteo(meteo) ; updateJour() ; updateMoney()
}

function ConfirmerAchat() {
  ice = $("#numIceValue").val()
  lemonade = $("#numIceValue").val()
  sugar = $("#numIceValue").val()
  lemonade = $("#numIceValue").val()
  
  confirmer = $("#confirmerStock")
  
  htmlIce = $("#iceStock")
  htmlLemonade = $("#lemonadeStock")
  htmlSugar = $("#sugarStock")
  htmlX = $("#XStock")
   
}