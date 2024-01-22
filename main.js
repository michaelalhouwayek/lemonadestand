
// 1 is snow
//2 is rain
//3 is gray
//4 is sun and cloud
//5 is full sun
meteo==randint(1,5)

var temperature

if (meteo === 1) {
  temperature == randint(15,20)
}
if (meteo === 2) {
  temperature == randint(17,22)
}
if (meteo === 3) {
  temperature == randint (19,24)

}
if (meteo === 4) {
  temperature == randint (22,27)
}
if (meteo === 5) {
  temperature == randint (27,35)

}


function randint(min, max) {
  var alea = min + Math.floor(Math.random() * (max - min + 1));
  //console.log(alea);
  return alea;
}

var intervalle_de_creation = randint(750, 3000);

function creerCaseElements() {
  var cellule = $(
    "table tr:nth-of-type(" +
      randint(1, 10) +
      ") td:nth-of-type(" +
      randint(1, 20) +
      ")"
  ); //.css("background","gray")

  if (cellule.html() == "") {
    var cloneP = $("#PereNoel").clone();
    cloneP.removeAttr("id");
    cloneP.appendTo(cellule);

    setTimeout(function () {
      cloneP.remove();
    }, intervalle_de_creation);
  }
}

/**
 * Fonction lancerJeu
 * Lancement du jeu : crée des personnages à intervalle irrégulier
 */
function lancerJeu() {
  $("#boutton").attr("disabled", "disabled");
  tempsDeJeu = 45;
  tpsEle = $("#Temps");
  tpsEle.text(tempsDeJeu);
  var tps = parseInt(tpsEle.text());

  boucle1 = setInterval(function () {
    tps -= 1;
    tpsEle.text(tps);

    if (tps == 0) {
      clearInterval(boucle1);
      clearInterval(boucle2);
      console.log(
        "Le jeux est terminé! En " +
          tps +
          " secondes vous avez eu un score de " +
          $("#Score").html() +
          ""
      );
    }
  }, 1000);

  boucle2 = setInterval(function () {
    alea = randint(1, 2);
    if (alea == 1) {
      creerPereNoel();
    } else {
      creerGrinch();
    }
  }, randint(500, 2000));
}

/**
 * Fonction augmenterScore
 * Incrémente le score de 1
 */
function augmenterScore() {
  score = $("#Score");
  valScore = parseInt(score.text());
  val = 1 + valScore;
  score.text(val);
}

function diminuerScore() {
  score = $("#Score");
  valScore = parseInt(score.text());
  val = valScore - 5;
  score.text(val);
}
