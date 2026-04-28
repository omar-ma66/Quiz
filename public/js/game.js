console.log("Hello");

let questionTime = document.querySelector("#question-time");
let questionQuiz = document.querySelector("#question-quiz");
let quizReponse1 = document.querySelector("quiz-reponse1");
let quizReponse2 = document.querySelector("quiz-reponse2");
let quizReponse3 = document.querySelector("quiz-reponse3");
let quizReponse4 = document.querySelector("quiz-reponse4");
let questionNum = document.querySelector("#question-num");
let progresseBarre = document.querySelector("#progresse-barre");
let btnSuivant = document.querySelector("#btn-suivant");
let themeChoisi = document.querySelector("#theme-choisi");
let themeID;
let questionsAllInformations;
let questionsID = [];
let questionsEnonce = [];



//###########################################################################
// fonction pour ranger les ID et les questions associer
function questionRange(datas) {
  datas["questions"].forEach((tab) => {
    tab.forEach((elements, index) => {
      if (index == 0) questionsID.push(elements);
      if (index == 1) questionsEnonce.push(elements);
    });
  });
  console.log(`Debug : voila las ID ${questionsID}`);
  getReponses(questionsID);
}
//###########################################################################

//recupere les reponses a mes questions
async function getReponses(questions) {
  let objetIdQuestion = [{status:"debug"}];
  questionsID.forEach((element) => {
    objetIdQuestion.push(Object.assign({}, { id: element }));

  });
  try {
    let reponses = await fetch("api/getReponses.php", {
      method: "POST",
      body: JSON.stringify(objetIdQuestion),
      headers: { "Content-type": "application/json" },
    });
    if (!reponses.ok) throw new Error("Une erreur est survenue");
    let data = await reponses.json();
    if (data["status"] == "success") {
      console.log(
        "debug :fichier game.js fonction getReponse.js : tout est ok ",
      );
    } else {
      console.log("debug :fichier game.js fonction getReponse.js : Erreur ");
    }
  } catch (err) {
    console.log("debug  game.js getReponse.js  : serveur erreur ");
  }
}
//###########################################################################

// Recupere le ID du Theme
async function getThemeQuestionsID(themeObjet) {
  try {
    let reponse = await fetch("api/getThemeQuestionsID.php", {
      method: "POST",
      body: JSON.stringify(themeObjet),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!reponse.ok) {
      throw new Error("une erreur du serveur c'est produite");
    }
    let data = await reponse.json();
    if (data["status"] === "success") {
      console.log(
        "debug:fichier game.js fonction getThemeQuestionID : super ca marche",
      );
      console.log(`info theme ${data["infoTheme"][0]}`);
      getThemeQuestionsForGame(data["infoTheme"][0]);
    } else {
      console.log("encore un probleme");
    }
  } catch (err) {
    console.log("une erreur c'est produite");
  }
}

//###########################################################################
// A partir du ID du theme recupère  5  questions aleatoire
async function getThemeQuestionsForGame(themeID) {
  let themeObjet = { theme: themeID, status: "debug" };
  try {
    let reponse = await fetch("api/getThemeQuestionsForGame.php", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(themeObjet),
    });
    if (!reponse.ok) throw new Error("erreur serveur");
    let data = await reponse.json();
    if (data["status"] === "success") {
      console.log(
        "Debug fichier game.js fonction getThemeQuestionForGame: tout c'est bien passe :",
      );
      console.log(data["questions"][0]);
      questionsAllInformations = data; // ici j'ai mes 5 questions ;
      questionRange(data);
    } else {
      console.log("un probleme cote php");
    }
  } catch (err) {
    console.log("debug: getThemeQuestionsForGame : une erreur sur le serveur");
  }
}
// console.log(`valeur du theme ${themeChoisi.innerText}`);

//###########################################################################
// objet qui contient  le theme choisi

const objetTheme = {
  status: "debug",
  theme: themeChoisi.innerText,
};

getThemeQuestionsID(objetTheme);
