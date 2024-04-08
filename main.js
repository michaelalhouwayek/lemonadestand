$("#startDay").click(function() {demarrerJournee()})
$("#confirmerStock").click(function () {ConfirmerAchatStock()})
$("#upgrade1").click(function () {ConfirmerAchatUpgrades(1)})
$("#upgrade2").click(function () {ConfirmerAchatUpgrades(2)})
$("#confirmerTout").click(function() {disableButtons()});
// RANDINT FUNCTION //
function randint(min, max) {
  var alea = min + Math.floor(Math.random() * (max - min + 1));
  //console.log(alea);
  return alea;
}
//
// SLIDER VARAIBLES //
const sliderL = $("#sliderLemonadeValue") ; sliderL.on("input", function () {changeSliderVal("#sliderLemonadeValue","#lemonadePrice")}); changeSliderVal("#sliderLemonadeValue","#lemonadePrice")
const sliderI = $("#sliderIceValue") ; sliderI.on("input", function () {changeSliderVal("#sliderIceValue","#icePrice")}); changeSliderVal("#sliderIceValue","#icePrice")
const sliderS = $("#sliderSugarValue") ; sliderS.on("input", function () {changeSliderVal("#sliderSugarValue","#sugarPrice")}); changeSliderVal("#sliderSugarValue","#sugarPrice")
const sliderSlice = $("#sliderSliceValue") ; sliderSlice.on("input", function () {changeSliderVal("#sliderSliceValue","#slicePrice")}); changeSliderVal("#sliderSliceValue","#slicePrice")
const priceL = $("#lemonadePrice") ; const priceI = $("#icePrice") ; const priceS = $("#sugarPrice") ; const priceSlice = $("#slicePrice")
var lemonadePrice = 0.5 ; var icePrice = 0.1 ; var sugarPrice = 0.25 ; var slicePrice = 0.1
var lemonadeDJ = false ; var iceDJ = false ; var sliceDJ = false ; var sugarDJ = false ; const ingDJhtml = $("#ingDJhtml") /*its actually an input*/
//
// CUSTOMER VARIABLES
const cust1 = $("#customer1") ; var c1Live = false
const cust2 = $("#customer2") ; var c2Live = false
const cust3 = $("#customer3") ; var c3Live = false
const cust4 = $("#customer4") ; var c4Live = false
const cust5 = $("#customer5") ; var c5Live = false
const cust6 = $("#customer6") ; var c6Live = false
const cust7 = $("#customer7") ; var c7Live = false
const cust8 = $("#customer8") ; var c8Live = false
const standHTML = $("#lemonade_stand")
var custProcess = false
//
// STOCK VARIABLES //
const iceVal = $("#numIceValue")
const lemonadeVal = $("#numLemonadeValue")
const sugarVal = $("#numSugarValue")
const sliceVal = $("#numSliceValue")
const htmlIce = $("#iceStock") ; var totalIceStock = 0
const htmlLemonade = $("#lemonadeStock") ; var totalLemonadeStock = 0
const htmlSugar = $("#sugarStock") ; var totalSugarStock = 0
const htmlSlice = $("#sliceStock") ; var totalSliceStock = 0
var lemonadeVarP = 1.25 ; var iceVarP = 0.25 ; var sliceVarP = 0.25 ; var sugarVarP = 0.50
var icePJ = 0 ; var lemonadePJ = 0 ; var slicePJ  = 0 ; var sugarPJ = 0
const confirmerStock = $("#confirmerStock")
//
// UPGRADE VARIABLES
var upgrade1Owned = false ; var upgrade2Owned = false
const upg1But = $("#upgrade1Button") ; const upg2But = $("#upgrade2Button")
const upg1Title = $("#upg1Title") ; const upg2Title = $("#upg2Title")
//
// ADS VARIABLES
const adInput = $("#ads") ; adInput.on("input", function () {ConfirmerAchatAdvert()}) // 0 : pick, 5: +5% for $50, 10: 10% for $75, 15: 15% for $15
var adsValue = 0 ; const adsOptionRemove = $("#adsOptionRemove")
const adTen = $("#adTen") ; const adTwenty = $("#adTwenty") ; const adFifty = $("#adFifty") ; var liveAd = null
//
// WEATHER VARIABLES //
var meteo = null // 1 is snowy ; 2 is stormy ; 3 is rainy ; 4 is cloudy ; 5 is sunny
var previousMeteo = "";
var temperature = null;
var weatherMultiplier = 1
const neige = $("#neige"); const tempete = $("#tempete"); const pluie = $("#pluie"); const nuage = $("#nuage"); const soleil = $("#soleil")
//
// TIME VARIABLE //
var time_left = 0
var customerMultiplier = 3
// MONEY AND DAY VARIABLES AND FUNCTIONS //
var money = 5 ; var jour = 0 ; var addby = parseFloat(Number(jour/3).toFixed(2))
var moneyMultiplier = 1 /* mult de pub */ ; var adDayCounter = 0
var totalMult = 1
const moneyHtml = $("#argent")
const jourHtml = $("#jour")

function updateJour() {
  jourHtml.html("Jour: "+jour)
}
function updateMoney() {
  totalMult = weatherMultiplier*moneyMultiplier
  money = parseFloat(Number(money).toFixed(2))
  if (totalMult <= 0) {
    moneyHtml.html("Argent: $"+money+" || x0")
  } else {
    moneyHtml.html("Argent: $"+money+" || x"+totalMult.toFixed(2))
  }
}
updateJour() ; updateMoney()
///////

function setMeteo() {
  meteo = null
  if (upgrade2Owned == true) {meteo = randint(3,6)
  } else {meteo = randint(1,6)}
  
  if (meteo == 1) {
    temperature = randint(15,20)
    neige.show() ; previousMeteo = neige;
    customerMultiplier = 7
    weatherMultiplier -= 0.35
  }
  else if (meteo == 2) {
    temperature = randint(17,22)
    tempete.show() ; previousMeteo = tempete;
    customerMultiplier = 6
    weatherMultiplier -= 0.25
  }
  else if (meteo == 3) {
    temperature = randint(19,24)
    pluie.show() ; previousMeteo = pluie;
    customerMultiplier = 5
    weatherMultiplier -= 0.15
  }
  else if (meteo == 4) {
    temperature = randint(22,27)
    nuage.show() ; previousMeteo = nuage;
    customerMultiplier = 4
    weatherMultiplier += 0
  }
  else if (meteo == 5 || meteo == 6) {
    temperature = randint(27,35)
    soleil.show() ; previousMeteo = soleil;
    customerMultiplier = 3
    weatherMultiplier += 0.15
  }
  updateMoney()
}

function IngredientDJ() {
  lemonadeDJ = false ; iceDJ = false ; sugarDJ = false ; sliceDJ = false
  ingDJhtml.val("Ingredient du jour (+35%): Aucun")
  var firstRand = randint(1,2)
  if (firstRand==1) {
    var rand = randint(1,4)
    if (rand==1) {lemonadeDJ = true ; ingDJhtml.val("Ingredient du jour (+35%): Limonade")}
    else if (rand==2) {iceDJ = true ; ingDJhtml.val("Ingredient du jour (+35%): Glacons")}
    else if (rand==3) {sugarDJ = true ; ingDJhtml.val("Ingredient du jour (+35%): Sucre")}
    else if (rand==4) {sliceDJ = true ; ingDJhtml.val("Ingredient du jour (+35%): Slice")}
  } else {
    console.log("Pas d'ingredient spécial aujourd'hui!")
  }
} IngredientDJ()

function demarrerJournee() {
  if (confirmedParams == false) {
    alert("Vous n'aviez pas confirmer les parametres!")
    return confirmedParams
  }
  $("#startDay").attr("disabled", "disabled");
  jour += 1 ; time_left = 20
  $("#titreMeteo").html("Metéo du jour: ") ; if (upgrade1Owned == false) {setMeteo()}
  updateJour() ; updateMoney() ; updateStockPrice(false)

  var dayCycle = setInterval(function() {
    if (time_left == 0) {
      terminerJournee() ; clearInterval(dayCycle)
    } else {
      if (randint(1,customerMultiplier) == 3 && custProcess == false) {
        custProcess = true
        customerSpawn()
        console.log("a customer has spawned")
      }
      time_left -= 1 ; $("#startDay").val("il reste: "+time_left+"s dans la journée "+jour)
    }
    
  }, 1000)
}

function checkGameOver() {
  var totalStock = totalIceStock + totalLemonadeStock + totalSliceStock + totalSugarStock
  if (totalStock == 0 && money < iceVarP && money < lemonadeVarP && money < sugarVarP && money < sliceVarP) {
    alert("Vous avez perdu! Reactualiser la page pour recommencer!") 
  }
}

function terminerJournee() {
  c1Live = false ; c2Live = false ; c3Live = false ; c4Live = false ; c5Live = false
  alert("Journee terminee!") ; $("#startDay").removeAttr("disabled") ; $("#startDay").val("Demarrer la journée "+(jour+1)+"!")
  IngredientDJ()
  if (adDayCounter != 0) {adDayCounter -= 1
  } else if (liveAd != null) {adInput.removeAttr("disabled"); adInput.val("0") ; adsValue = 0 ; moneyMultiplier = 1 ; liveAd.hide() ; liveAd = null}
  else {adInput.removeAttr("disabled")}
  weatherMultiplier = 1 ; customerMultiplier = 3
  previousMeteo.hide();
  updateStockPrice(false) ; if (upgrade1Owned == true) {$("#titreMeteo").html("Météo de la journée à venir: ") ; setMeteo()}
  enableButtons() ; updateMoney() ; checkGameOver()
}

function customerPromptPurchase() {
  updateMoney() /*>>> to make sure totalmult is calculated */
  var currentPrice = 0
  if (totalIceStock==0 && totalLemonadeStock==0 && totalSliceStock==0 && totalSugarStock==0) {
    money -= 0.02*money
  } else {
    if (totalIceStock>0 && meteo != 1 && meteo != 2) {
      if (iceDJ == true) {currentPrice = (icePrice*1.35)*totalMult
      } else {currentPrice = icePrice*totalMult}
      money += currentPrice ; totalIceStock -= 1
    }
    if (totalLemonadeStock>0){
      if (lemonadeDJ == true) {currentPrice = (lemonadePrice*1.35)*totalMult
      } else {currentPrice = lemonadePrice*totalMult}
      money += currentPrice ; totalLemonadeStock -=1
    }
    if (totalSliceStock>0){
      if (sliceDJ == true) {currentPrice = (slicePrice*1.35)*totalMult
      } else {currentPrice = slicePrice*totalMult}
      money += currentPrice ; totalSliceStock -=1
    }
    if (totalSugarStock>0){
      if (sugarDJ == true) {currentPrice = (sugarPrice*1.35)*totalMult
      } else {currentPrice = sugarPrice*totalMult}
      money += currentPrice ; totalSugarStock -=1
    }
  }
  updateMoney() ; updateStockPrice(false) ; custProcess = false
}

function customerSpawn() { 
  if (c1Live == false) {c1Live = true ; customerPromptPurchase() ; cWalk(cust1,standHTML)
  } else if (c2Live == false) {c2Live = true ; customerPromptPurchase() ; cWalk(cust2,standHTML)
  } else if (c3Live == false) {c3Live = true ; customerPromptPurchase() ; cWalk(cust3,standHTML)
  } else if (c4Live == false) {c4Live = true ; customerPromptPurchase() ; cWalk(cust4,standHTML)
  } else if (c5Live == false) {c5Live = true ; customerPromptPurchase() ; cWalk(cust5,standHTML) 
  } else if (c6Live == false) {c6Live = true ; customerPromptPurchase() ; cWalk(cust6,standHTML) 
  } else if (c7Live == false) {c7Live = true ; customerPromptPurchase() ; cWalk(cust7,standHTML) 
  } else if (c8Live == false) {c8Live = true ; customerPromptPurchase() ; cWalk(cust8,standHTML) 
  }
  
  custProcess = false
}

function updateStockPrice(arg) {

  if (arg) {
    if (icePJ == 0) {
      iceVarP = parseFloat((iceVarP*0.9).toFixed(2))
    } else {iceVarP += parseFloat((((icePJ-(icePJ%3))/3)*0.065).toFixed(2))}
    if (lemonadePJ == 0) {
      lemonadeVarP = parseFloat((lemonadeVarP*0.9).toFixed(2))
    } else {lemonadeVarP += parseFloat((((lemonadePJ-(lemonadePJ%3))/3)*0.05).toFixed(2))}
    if (sugarPJ == 0) {
      sugarVarP = parseFloat((sugarVarP*0.9).toFixed(2))
    } else {sugarVarP += parseFloat((((sugarPJ-(sugarPJ%3))/3)*0.08).toFixed(2))}
    if (slicePJ == 0) {
      sliceVarP = parseFloat((sliceVarP*0.9).toFixed(2))
    } else {sliceVarP += parseFloat((((slicePJ-(slicePJ%3))/3)*0.065).toFixed(2))}

    icePJ = 0; lemonadePJ = 0; slicePJ = 0; sugarPJ = 0
  }

  htmlLemonade.html(totalLemonadeStock+" | $"+lemonadeVarP.toFixed(2))
  htmlIce.html(totalIceStock+" | $"+iceVarP.toFixed(2))
  htmlSugar.html(totalSugarStock+" | $"+sugarVarP.toFixed(2))
  htmlSlice.html(totalSliceStock+" | $"+sliceVarP.toFixed(2))
}

function ConfirmerAchatStock() {
  if (iceVal.val() < 0 || lemonadeVal.val() < 0 || sliceVal.val() < 0 || sugarVal.val() < 0) {alert("Vous pouvez pas acheter des valeurs negatives!") ; return null}
  var prixTotal = Number(iceVal.val()*iceVarP + lemonadeVal.val()*lemonadeVarP + sliceVal.val()*sliceVarP + sugarVal.val()*sugarVarP)
  if (prixTotal <= money) {
    totalIceStock += Number(iceVal.val()) ; totalLemonadeStock += Number(lemonadeVal.val()) ; totalSugarStock += Number(sugarVal.val()) ; totalSliceStock += Number(sliceVal.val())
    money -= prixTotal ; updateMoney()
    icePJ += Number(iceVal.val()) ; lemonadePJ += Number(lemonadeVal.val()) ; sugarPJ += Number(sugarVal.val()) ; slicePJ += Number(sliceVal.val())
  }
  updateStockPrice(false) ; iceVal.val(0) ; lemonadeVal.val(0) ; sugarVal.val(0) ; sliceVal.val(0)
}

function ConfirmerAchatUpgrades(upgradeNum) {
  if (upgradeNum == 1 && 50 <= money) {
    money -= 50 ; updateMoney()
    upg1But.css("display","none")
    upg1Title.html("Amélioration 1: Prévision quotidienne de la météo! - ✅✅✅ ")
    upgrade1Owned = true ; upgrade1()
  } else if (upgradeNum == 2 && 100 <= money) {
    money -= 100 ; updateMoney()
    upg2But.css("display","none")
    upg2Title.html("Amélioration 2: Fini la mauvaise météo! - ✅✅✅ ")
    upgrade2Owned = true ; upgrade2()
  }
}

function ConfirmerAchatAdvert() {
  if (adInput.val() == 5 && money >= 20) {
    money -= 20
    moneyMultiplier = 1.10 ; adsValue = adInput.val() ; adInput.attr("disabled", "disabled");
    liveAd = adTen ; liveAd.show()
  } else if (adInput.val() == 10 && money >= 40) {
    money -= 40
    moneyMultiplier = 1.25 ; adsValue = adInput.val() ; adInput.attr("disabled", "disabled");
    liveAd = adTwenty ; liveAd.show()
  } else if (adInput.val() == 15 && money >= 80) {
    money -= 80
    moneyMultiplier = 1.50 ; adsValue = adInput.val() ; adInput.attr("disabled", "disabled");
    liveAd = adFifty ; liveAd.show()
  } else {
    alert("Pas suffisament d'argent, advertissement pas acheter! ")
    adInput.val("0")
  }
  if (moneyMultiplier > 1.02) {adDayCounter = 4}
  updateMoney()
}

var confirmedParams = false
function disableButtons() {
  confirmedParams = true ; $("#confirmerTout").attr("disabled","disabled") ; applySliderMultiplier(); confirmerStock.attr("disabled","disabled"); updateStockPrice(true)
  sliderL.attr("disabled","disabled") ; sliderI.attr("disabled","disabled") ; sliderS.attr("disabled","disabled") ; sliderSlice.attr("disabled","disabled")
  lemonadeVal.attr("disabled","disabled") ; iceVal.attr("disabled","disabled") ; sugarVal.attr("disabled","disabled") ; sliceVal.attr("disabled","disabled")
  adInput.attr("disabled","disabled") ; upg1But.attr("disabled","disabled") ; upg2But.attr("disabled","disabled")
}
function enableButtons() {
  confirmedParams = false ; $("#confirmerTout").removeAttr("disabled") ; confirmerStock.removeAttr("disabled")
  sliderL.removeAttr("disabled") ; sliderI.removeAttr("disabled") ; sliderS.removeAttr("disabled") ; sliderSlice.removeAttr("disabled")
  lemonadeVal.removeAttr("disabled") ; iceVal.removeAttr("disabled") ; sugarVal.removeAttr("disabled") ; sliceVal.removeAttr("disabled")
  upg1But.removeAttr("disabled") ; upg2But.removeAttr("disabled")
}

function upgrade1() {
  alert("Amélioration 1 achetée!")
  $("#titreMeteo").html("Météo de la journée à venir: ")
  upgrade1Owned = true ; setMeteo() ; updateMoney()
}
function upgrade2() {
  alert("Amélioration 2 achetée!")
  upgrade2Owned = true
}

function applySliderMultiplier() {
  if (1.5 <= lemonadePrice && lemonadePrice <= 2) {weatherMultiplier -= 0.05
  } else if (2.5 <= lemonadePrice && lemonadePrice <= 3) {weatherMultiplier -= 0.1
  } else if (3.5 <= lemonadePrice && lemonadePrice <= 4) {weatherMultiplier -= 0.15
  } else if (4.5 <= lemonadePrice && lemonadePrice <= 5) {weatherMultiplier -= 0.2}

  if (icePrice >= 0.8 ){weatherMultiplier -= 0.15
  } else if (icePrice >= 0.5 ) {weatherMultiplier -= 0.1}

  if (sugarPrice >= 1.5){weatherMultiplier -= 0.15
  } else if (sugarPrice >= 1) {weatherMultiplier -= 0.1}

  if (slicePrice >= 0.8 ){weatherMultiplier -= 0.15
  } else if (slicePrice >= 0.5 ) {weatherMultiplier -= 0.1}
  updateMoney()
}

function changeSliderVal(slider,price) {
  var val = null
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
    val = Math.round(($(slider).val() / 100)*10) / 10
    $(price).html("$"+val)
    slicePrice = val
  }
}

function cWalk(customer,standHTML) {
    customer.css("margin-left","-400px")
    customer.show()
    var standDest = parseFloat(standHTML.css("margin-left"))+15
    var currentPos = parseFloat(customer.css("margin-left"))
    var endDest =  window.innerWidth

    var walkingToLemonade = setInterval(function() {
        currentPos += 5
        customer.css("margin-left",currentPos+"px")
        
        if (customer.css("margin-left").match(/\d+/g)[0] >= standDest) {
        clearInterval(walkingToLemonade)

        var wo = setInterval(function() {
            currentPos += 5
            customer.css("margin-left",currentPos+"px")
            if (customer.css("margin-left").match(/\d+/g)[0] >= endDest-150) {
                //c1Live = false ; 
                customer.hide() ; clearInterval(wo)
                customer.css("margin-left","-400px")
            }
        }, 30);
        }
    }, 30);
}
