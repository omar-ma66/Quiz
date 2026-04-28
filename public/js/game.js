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

async function getThemeQuestions(themeObjet) {
  try {
    let reponse = await fetch("api/getThemeQuestions.php", {
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
      console.log("super ca marche");
      console.log(`info theme ${data["infoTheme"][0]}`);
    } else {
      console.log("encore un probleme");
    }
  } catch (err) {
    console.log("une erreur c'est produite");
  }
}
// console.log(`valeur du theme ${themeChoisi.innerText}`);

const objetTheme = {
  status: "debug",
  theme: themeChoisi.innerText,
};

getThemeQuestions(objetTheme);
