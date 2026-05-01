console.log("EndGame");
let scoreReponse = document.querySelector("#score-reponses");
let scorePourcent = document.querySelector("#score-pourcent");
let progresseBarreElement = document.querySelector("#progresse-barre");

let data = JSON.parse(localStorage.getItem("gameClassement"));

console.log(
  `nombre de bonnes réponses : ${data["questions"]}  le temps passé : ${data["temps"]} `,
);

if (scoreReponse) {
  scoreReponse.innerText = parseInt(data["questions"]) + "/5";
}
if (scorePourcent) {
  let i = (parseInt(data["questions"]) * 100) / 5;
  scorePourcent.innerText = i + " % ";
}

function modiffProgresseBarre(ch) {
  if (progresseBarreElement) {
    progresseBarreElement.classList.remove("invisible");
    progresseBarreElement.classList.add(ch);
  }
}

function progresseBarre(level) {
  if (progresseBarreElement) {
    switch (level) {
      case 1:
        modiffProgresseBarre("w-1/5");
        break;
      case 2:
        modiffProgresseBarre("w-2/5");
        break;
      case 3:
        modiffProgresseBarre("w-3/5");
        break;
      case 4:
        modiffProgresseBarre("w-4/5");
        break;
      case 5:
        modiffProgresseBarre("w-5/5");
        break;
    }
  }
}

async function sendScore(data) {
  let mydata = {
    status: "debug",
    score: data,
  };
  try {
    let reponse = await fetch("api/sendScore.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mydata),
    });
    if (!reponse.ok) {
      throw new Error("Une erreur c'est produite");
    }
    let resultat = await reponse.json();
    if (resultat["status"] === "success") {
      console.log("OK tout c'est bien passé");
    } else {
      console.log("Une erreur depuis le back end");
    }
  } catch (err) {
    console.log(`reponse de serveur : une ERREUR c'est Produite `);
  }
}

progresseBarre(parseInt(data["questions"]));
sendScore(data);
