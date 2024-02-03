// RANDINT FUNCTION //
function randint(min, max) {
  var alea = min + Math.floor(Math.random() * (max - min + 1));
  //console.log(alea);
  return alea;
}
//
// SLIDER VARAIBLES //
sliderL = $("#sliderLemonadeValue") ; sliderL.on("input", function () {changeSliderVal("#sliderLemonadeValue","#lemonadePrice")});
sliderI = $("#sliderIceValue") ; sliderI.on("input", function () {changeSliderVal("#sliderIceValue","#icePrice")});
sliderS = $("#sliderSugarValue") ; sliderS.on("input", function () {changeSliderVal("#sliderSugarValue","#sugarPrice")});
sliderSlice = $("#sliderSliceValue") ; sliderSlice.on("input", function () {changeSliderVal("#sliderSliceValue","#slicePrice")});
priceL = $("#lemonadePrice") ; priceI = $("#icePrice") ; priceS = $("#sugarPrice") ; priceSlice = $("#slicePrice")
lemonadePrice = 0 ; icePrice = 0 ; sugarPrice = 0 ; slicePrice = 0
//
// STOCK VARIABLES //
iceVal = $("#numIceValue")
lemonadeVal = $("#numLemonadeValue")
sugarVal = $("#numSugarValue")
sliceVal = $("#numSliceValue")
htmlIce = $("#iceStock") ; totalIceStock = 0
htmlLemonade = $("#lemonadeStock") ; totalLemonadeStock = 0
htmlSugar = $("#sugarStock") ; totalSugarStock = 0
htmlSlice = $("#sliceStock") ; totalSliceStock = 0
//
// UPGRADE VARIABLES
upgrade1Owned = false ; upgrade2Owned = false
upg1But = $("#upgrade1Button") ; upg2But = $("#upgrade2Button")
upg1Title = $("#upg1Title") ; upg2Title = $("#upg2Title")
//
// WEATHER VARIABLES //
meteo = randint(1,5) // 1 is snowy ; 2 is stormy ; 3 is rainy ; 4 is cloudy ; 5 is sunny
previousMeteo = "";
temperature = null;
//
// TIME VARIABLES //
day = 0
time_left = 0
//
// MONEY AND DAY VARIABLES AND FUNCTIONS //
money = 1500000 ; jour = 0
moneyHtml = $("#argent")
jourHtml = $("#jour")

function updateJour() {
  jourHtml.html("Jour: "+jour)
}
function updateMoney() {
  moneyHtml.html("Argent: $"+money)
}
updateJour() ; updateMoney()
//

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

function dayTimer() {
  time_left = 250
  // wait 1 second then time left -1
}
function demarrerJournee() {
  
  $("#startGame").attr("disabled", "disabled");
  jour += 1 ; money += 25
  setMeteo(meteo) ; updateJour() ; updateMoney() ; dayTimer()

  while (time_left !== 0) {
    //customer walk function
    // wait customer's wait time
  }
  alert("Journee terminee!") ; // $("#startGame").removeAttr("disabled")
  //end customer function (it should have while time elft not)

}

function CustomersPerday(Customers){
  customers = temperature*0.5
}

function customerMove(){
  Customer1= $("#customer1")
  current_margin = 0
  Customer1.css("margin-left",current_margin)
  current_margin += 1
  // smth like this w/a while loop
}

function ConfirmerAchatStock() { 

  var prixTotal = Number(iceVal.val())*0.25 + Number(lemonadeVal.val())*1.00 + Number(sugarVal.val())*0.50 + Number(sliceVal.val())*0.50
  console.log(prixTotal)
  if (prixTotal <= money) {
    totalIceStock += Number(iceVal.val()) ; totalLemonadeStock += Number(lemonadeVal.val()) ; totalSugarStock += Number(sugarVal.val()) ; totalSliceStock += Number(sliceVal.val())
    htmlIce.html(totalIceStock+" | $0.25") ; htmlLemonade.html(totalLemonadeStock+" | $1.00") ; htmlSugar.html(totalSugarStock+" | $0.50") ; htmlSlice.html(totalSliceStock+" | $0.50")
    money -= prixTotal ; updateMoney()
    iceVal.val(0) ; lemonadeVal.val(0) ; sugarVal.val(0) ; sliceVal.val(0)
  }

}

function ConfirmerAchatUpgrades(upgradeNum) {
  if (upgradeNum == 1 && 50 <= money) {
    money -= 50 ; updateMoney()
    upg1But.css("display","none")
    upg1Title.html("Upgrade 1: Permanent Weekly Weather Forecast : ✅✅✅")
    upgrade1Owned = true ; upgrade1()
  } else if (upgradeNum == 2 && 100 <= money) {
    money -= 100 ; updateMoney()
    upg2But.css("display","none")
    upg2Title.html("Upgrade 2: Something else : ✅✅✅")
    upgrade2Owned = true ; upgrade2()
  }
}

function upgrade1() {
  alert("Upgrade 1 purchased succesfully")
  // loop or smth
}
function upgrade2() {
  alert("Upgrade 2 purchased succesfully")
  // loop or smth
}

function changeSliderVal(slider,price) {

  if (slider === "#sliderLemonadeValue") {
    val = Math.round(($(slider).val() / 100)*2) / 2
    $(price).html("$"+val)
    lemonadePrice = val
  }
  else if (slider === "#sliderIceValue") {
    val = Math.round(($(slider).val() / 100)*10) / 10
    $(price).html("$"+val)
    icePrice = val
  }
  else if (slider === "#sliderSugarValue") {
    val = Math.round(($(slider).val() / 100)*4) / 4
    $(price).html("$"+val)
    sugarPrice = val
  }
  else if (slider === "#sliderSliceValue") {
    val = Math.round(($(slider).val() / 100)*4) / 4
    $(price).html("$"+val)
    slicePrice = val
  }

}
