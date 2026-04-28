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
let questions;

// fonction pour debugage 
function testQuestions(datas)
{
     console.log (`test des données  ${datas["questions"][0][0]}`) ;
     console.log (`test des données  ${datas["questions"][0][1]}`) ;
     console.log (`test des données  ${datas["questions"][0][2]}`) ;
}

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
// A partir du ID recupère les questions
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
        "Debug fichier game.js fonction getThemeQuestionForGame: tout c'est bien passe :"
      );
       console.log(data["questions"][0]);   
        questions = data ; // ici j'ai mes 5 questions ; 
   

    } else {
      console.log("un probleme cote php");
    }
  } catch (err) {
    console.log("debug: getThemeQuestionsForGame : une erreur sur le serveur");
  }
}
// console.log(`valeur du theme ${themeChoisi.innerText}`);

const objetTheme = {
  status: "debug",
  theme: themeChoisi.innerText,
};

getThemeQuestionsID(objetTheme);
