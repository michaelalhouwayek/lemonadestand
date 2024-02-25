// RANDINT FUNCTION //
function randint(min, max) {
  var alea = min + Math.floor(Math.random() * (max - min + 1));
  //console.log(alea);
  return alea;
}
//
// SLIDER VARAIBLES //
sliderL = $("#sliderLemonadeValue") ; sliderL.on("input", function () {changeSliderVal("#sliderLemonadeValue","#lemonadePrice")}); changeSliderVal("#sliderLemonadeValue","#lemonadePrice")
sliderI = $("#sliderIceValue") ; sliderI.on("input", function () {changeSliderVal("#sliderIceValue","#icePrice")}); changeSliderVal("#sliderIceValue","#icePrice")
sliderS = $("#sliderSugarValue") ; sliderS.on("input", function () {changeSliderVal("#sliderSugarValue","#sugarPrice")}); changeSliderVal("#sliderSugarValue","#sugarPrice")
sliderSlice = $("#sliderSliceValue") ; sliderSlice.on("input", function () {changeSliderVal("#sliderSliceValue","#slicePrice")}); changeSliderVal("#sliderSliceValue","#slicePrice")
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
lemonadeVarP = 1.25 ; iceVarP = 0.25 ; sliceVarP = 0.25 ; sugarVarP = 0.50
icePJ = 0 ; lemonadePJ = 0 ; slicePJ  = 0 ; sugarPJ = 0
confirmerStock = $("#confirmerStock")
//
// UPGRADE VARIABLES
upgrade1Owned = false ; upgrade2Owned = false
upg1But = $("#upgrade1Button") ; upg2But = $("#upgrade2Button")
upg1Title = $("#upg1Title") ; upg2Title = $("#upg2Title")
//
// ADS VARIABLES
adInput = $("#ads") ; adInput.on("input", function () {ConfirmerAchatAdvert()}) // 0 : pick, 5: +5% for $50, 10: 10% for $75, 15: 15% for $15
adsValue = 0 ; adsOptionRemove = $("#adsOptionRemove")
//
// WEATHER VARIABLES //
meteo = null // 1 is snowy ; 2 is stormy ; 3 is rainy ; 4 is cloudy ; 5 is sunny
previousMeteo = "";
temperature = null;
weatherMultiplier = 1
neige = $("#neige"); tempete = $("#tempete"); pluie = $("#pluie"); nuage = $("#nuage"); soleil = $("#soleil")
//
// TIME VARIABLE //
time_left = 0
customerMultiplier = 3
// MONEY AND DAY VARIABLES AND FUNCTIONS //
money = 5 ; jour = 0 ; addby = parseFloat(Number(jour/3).toFixed(2))
moneyMultiplier = 1
moneyHtml = $("#argent")
jourHtml = $("#jour")

function updateJour() {
  jourHtml.html("Jour: "+jour)
}
function updateMoney() {
  weatherMultiplier = parseFloat(Number(weatherMultiplier).toFixed(2))
  money = parseFloat(Number(money).toFixed(2))
  if (weatherMultiplier <= 0) {
    moneyHtml.html("Argent: $"+money+" || x0")
  } else {
    moneyHtml.html("Argent: $"+money+" || x"+weatherMultiplier)
  }
  
}
updateJour() ; updateMoney()
///////

function setMeteo() {
  meteo = randint(1,6)
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
}
customerWalking = false
function demarrerJournee() {
  if (confirmedParams == false) {
    alert("Vous n'aviez pas confirmer les parametres!")
    return confirmedParams
  }
  $("#startDay").attr("disabled", "disabled");
  jour += 1 ; time_left = 20
  setMeteo() ; updateJour() ; updateMoney() ; updateStockPrice(false)

  var dayCycle = setInterval(function() {
    if (time_left == 0) {
      terminerJournee() ; clearInterval(dayCycle)
    } else {
      if (randint(1,customerMultiplier) == 3 && customerWalking == false) {
        customerWalking = true
        customerPromptPurchase() //CHANGE
        console.log("a customer has spawned")
      }
      time_left -= 1 ; $("#startDay").val("il reste: "+time_left+"s dans la journée "+jour)
    }
    
  }, 1000)
}

function terminerJournee() {
  alert("Journee terminee!") ; $("#startDay").removeAttr("disabled") ; $("#startDay").val("Demarrer la journée "+(jour+1)+"!")
  adInput.removeAttr("disabled"); adInput.val("0") ; adsValue = 0 ; moneyMultiplier = 1 ; weatherMultiplier = 1 ; customerMultiplier = 3
  previousMeteo.hide();
  updateStockPrice(false)
  enableButtons() ; updateMoney()
}

function customerPromptPurchase() {
  customerWalking = false
  if (totalIceStock>0 && meteo != 1 && meteo != 2) {
    currentPrice = (icePrice*weatherMultiplier)*moneyMultiplier
    money += currentPrice ; totalIceStock -= 1; updateStockPrice(false)
  }
  if (totalLemonadeStock>0){
    currentPrice = (lemonadePrice*weatherMultiplier)*moneyMultiplier
    money += currentPrice ; totalLemonadeStock -=1 ; updateStockPrice(false)
  }
  if (totalSliceStock>0){
    currentPrice = (slicePrice*weatherMultiplier)*moneyMultiplier
    money += currentPrice ; totalSliceStock -=1 ; updateStockPrice(false)
  }
  if (totalSugarStock>0){
    currentPrice += (sugarPrice*weatherMultiplier)*moneyMultiplier
    money += currentPrice ; totalSugarStock -=1 ; updateStockPrice(false)
  }
  updateMoney()
}

function customerSpawn() {
  customerWalking = true
  destination = ($("#lemonade_stand").css("margin-left"))+4
  customer = $("#customer"+randint(1,6))
  customer.css("display","block")
  current_margin = customer.css("margin-left")
  console.log(customer+" needs to get from "+current_margin+" to "+destination)
  
  var customerWalking = setInterval(function() {
    if (current_margin != destination && time_left != 0) {
      
    } else {
      customerPromptPurchase()
      clearInterval(customerWalking)
    }
  }, 100 );
}

function updateStockPrice(arg) {

  if (arg) {
    if (icePJ == 0) {
      iceVarP = parseFloat((iceVarP*0.9).toFixed(2))
    } else {iceVarP += parseFloat((((icePJ-(icePJ%3))/3)*0.15).toFixed(2))}
    if (lemonadePJ == 0) {
      lemonadeVarP = parseFloat((lemonadeVarP*0.9).toFixed(2))
    } else {lemonadeVarP += parseFloat((((lemonadePJ-(lemonadePJ%3))/3)*0.75).toFixed(2))}
    if (sugarPJ == 0) {
      sugarVarP = parseFloat((sugarVarP*0.9).toFixed(2))
    } else {sugarVarP += parseFloat((((sugarPJ-(sugarPJ%3))/3)*0.3).toFixed(2))}
    if (slicePJ == 0) {
      sliceVarP = parseFloat((sliceVarP*0.9).toFixed(2))
    } else {sliceVarP += parseFloat((((slicePJ-(slicePJ%3))/3)*0.15).toFixed(2))}

    icePJ = 0; lemonadePJ = 0; slicePJ = 0; sugarPJ = 0
  }

  htmlLemonade.html(totalLemonadeStock+" | $"+lemonadeVarP.toFixed(2))
  htmlIce.html(totalIceStock+" | $"+iceVarP.toFixed(2))
  htmlSugar.html(totalSugarStock+" | $"+sugarVarP.toFixed(2))
  htmlSlice.html(totalSliceStock+" | $"+sliceVarP.toFixed(2))
}

function ConfirmerAchatStock() { 
  var prixTotal = Number(iceVal.val()*iceVarP + lemonadeVal.val()*lemonadeVarP + sliceVal.val()*sliceVarP + sugarVal.val()*sugarVarP)
  if (prixTotal <= money) {
    totalIceStock += Number(iceVal.val()) ; totalLemonadeStock += Number(lemonadeVal.val()) ; totalSugarStock += Number(sugarVal.val()) ; totalSliceStock += Number(sliceVal.val())
    money -= prixTotal ; updateMoney()
    icePJ += Number(iceVal.val()) ; lemonadePJ += Number(lemonadeVal.val()) ; sugarPJ += Number(sugarVal.val()) ; slicePJ = Number(sliceVal.val())
  }
  updateStockPrice(false) ; iceVal.val(0) ; lemonadeVal.val(0) ; sugarVal.val(0) ; sliceVal.val(0)
}

function ConfirmerAchatUpgrades(upgradeNum) {
  if (upgradeNum == 1 && 50 <= money) {
    money -= 50 ; updateMoney()
    upg1But.css("display","none")
    upg1Title.html("Amélioration 1: Météo Hebdomadaire Permanente! - ✅✅✅ ")
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
    updateMoney()
  } else if (adInput.val() == 10 && money >= 40) {
    money -= 40
    moneyMultiplier = 1.25 ; adsValue = adInput.val() ; adInput.attr("disabled", "disabled");
    updateMoney()
  } else if (adInput.val() == 15 && money >= 80) {
    money -= 80
    moneyMultiplier = 1.50 ; adsValue = adInput.val() ; adInput.attr("disabled", "disabled");
    updateMoney()
  } else {
    alert("Pas suffisament d'argent, advertissement pas acheter! ")
    adInput.val("0")
  }
}
confirmedParams = false
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
  alert("Upgrade 1 purchased succesfully")
  // loop or smth
}
function upgrade2() {
  alert("Upgrade 2 purchased succesfully")
  // loop or smth
}

function applySliderMultiplier() {
  if (1.5 <= lemonadePrice <= 2) {weatherMultiplier -= 0.05
  } else if (2.5 <= lemonadePrice <= 3) {weatherMultiplier -= 0.1
  } else if (3.5 <= lemonadePrice <= 4) {weatherMultiplier -= 0.15
  } else if (4.5 <= lemonadePrice <= 5) {weatherMultiplier -= 0.2
  }

  if (icePrice >= 0.8 ){weatherMultiplier -= 0.15
  } else if (icePrice >= 0.5 ) {weatherMultiplier -= 0.1}

  if (sugarPrice >= 1.5){weatherMultiplier -= 0.15
  } else if (sugarPrice >= 1) {weatherMultiplier -= 0.1}

  if (slicePrice >= 0.8 ){weatherMultiplier -= 0.15
  } else if (slicePrice >= 0.5 ) {weatherMultiplier -= 0.1}
  updateMoney()
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
    val = Math.round(($(slider).val() / 100)*10) / 10
    $(price).html("$"+val)
    slicePrice = val
  }
}

