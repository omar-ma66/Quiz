console.log("Hello");

let questionTime = document.querySelector("#question-time");
let questionQuiz = document.querySelector("#question-quiz");
let quizReponse1 = document.querySelector("#quiz-reponse1");
let quizReponse2 = document.querySelector("#quiz-reponse2");
let quizReponse3 = document.querySelector("#quiz-reponse3");
let quizReponse4 = document.querySelector("#quiz-reponse4");
let questionNum = document.querySelector("#question-num");
let boiteReponse1 = document.querySelector("#boiteReponse1");
let boiteReponse2 = document.querySelector("#boiteReponse2");
let boiteReponse3 = document.querySelector("#boiteReponse3");
let boiteReponse4 = document.querySelector("#boiteReponse4");
let progresseBarreElement = document.querySelector("#progresse-barre");
let btnSuivant = document.querySelector("#btn-suivant");
let themeChoisi = document.querySelector("#theme-choisi");
let themeID;
let questionsAllInformations;
let reponsesAll;
let questionsID = [];
let questionsEnonce = [];
let compteur = 0;
let gameObjet = [
  ["idpseudo","pseudo","theme","time","reponse","idquestion","idreponse"],
  ["idpseudo","pseudo","theme","time","reponse","idquestion","idreponse"],
  ["idpseudo","pseudo","theme","time","reponse","idquestion","idreponse"],
  ["idpseudo","pseudo","theme","time","reponse","idquestion","idreponse"],
  ["idpseudo","pseudo","theme","time","reponse","idquestion","idreponse"]

];


//#####################################################################
// initialise et reset le background des 4 reponses en gris

  function InitBackColorReponse()
  {
    if(boiteReponse1.classList.contains("bg-green-300") ||  boiteReponse1.classList.contains("bg-red-300"))
    {
      boiteReponse1.classList.remove("bg-green-300");
      boiteReponse1.classList.remove("bg-red-300");
      boiteReponse1.classList.add("bg-[#d9d9d9]");
    }
    if(boiteReponse2.classList.contains("bg-green-300") ||  boiteReponse2.classList.contains("bg-red-300"))
    {
      boiteReponse2.classList.remove("bg-green-300");
      boiteReponse2.classList.remove("bg-red-300");
      boiteReponse2.classList.add("bg-[#d9d9d9]");
    }
      if(boiteReponse3.classList.contains("bg-green-300") ||  boiteReponse3.classList.contains("bg-red-300"))
    {
      boiteReponse3.classList.remove("bg-green-300");
      boiteReponse3.classList.remove("bg-red-300");
      boiteReponse3.classList.add("bg-[#d9d9d9]");
    }
      if(boiteReponse4.classList.contains("bg-green-300") ||  boiteReponse4.classList.contains("bg-red-300"))
    {
      boiteReponse4.classList.remove("bg-green-300");
      boiteReponse4.classList.remove("bg-red-300");
      boiteReponse4.classList.add("bg-[#d9d9d9]");
    }
  }


//bg-[#d9D9D9] Evenement des 4 boutons reponse
function initEventBoutonReponse(btn)
{
    
  if (btn)
      { console.log("#########++++++++++++++++++++++++++++###########");
        btn.addEventListener('click',(event)=>{

           if( btn.classList.contains('bg-[#d9d9d9]') )
                {
                  console.log("#########((((((((((((###########");
                 btn.classList.remove("bg-[#d9d9d9]"); 
                 btn.classList.add("bg-green-300"); 
    
                 
                }
        })
      }
      else
      console.log("############################################");
    }

initEventBoutonReponse(boiteReponse1);
initEventBoutonReponse(boiteReponse2);
initEventBoutonReponse(boiteReponse3);
initEventBoutonReponse(boiteReponse4);


//##################################################################
// on gere le bouton Suivant ;
  btnSuivant.addEventListener('click',(event)=>{

    numQuestion++;
            if( numQuestion < 5)
             {
              playGame();
             }
             else
             {
              window.location.href="endGame.php";
             }
  })


let myTimeOut;
let decompte ;
//#############################################
// fonction call back pour la decrementation du compteur
// a la fin du temps de 15 secondes si user na pas fait sont choix
// on active le bouton suivan ;
function decrementeCompteur()
{
  questionTime.innerText = decompte+"s";
  if(decompte > 8)
      {
        if(questionTime.classList.contains("bg-red-300"))
        {
            questionTime.classList.remove("bg-red-300");
            questionTime.classList.add("bg-green-300");
        }
        else
        {
           questionTime.classList.add("bg-green-300"); 
        }
      }
   else
    {
         if(questionTime.classList.contains("bg-green-300"))
        {
            questionTime.classList.remove("bg-green-300");
            questionTime.classList.add("bg-red-300");
        }
        else
        {
           questionTime.classList.add("bg-red-300"); 
        }
    }   

  if( decompte > 0){
    decompte--;
  }
  else
  {
    clearInterval(myTimeOut);
    btnSuivant.classList.remove("invisible");
  }
  
}
//#############################################
// demare le compteur
function runTime( time )
{   clearInterval(myTimeOut);
  decompte = time ;
  myTimeOut = setInterval(decrementeCompteur,1000);
}

//#############################################
// progresse barre indique la progression des bonnes reponses 
function progresseBarre()
{
  if(progresseBarreElement)
      {
   
        if(progresseBarreElement.classList.contains("invisible"))
        {
            progresseBarreElement.classList.remove("invisible");
        }
      }
   else
    {
      console.log("Un probleme dans progresse barre");
    }   
    return ;
}

//#############################################
// informe le numero de question
function setQuestion(num)
{
  questionNum.innerText ="Question "+  num + "/5";
}


function InitDataReponses()
{
  quizReponse1.dataset.reponse = 0 ;
  quizReponse2.dataset.reponse = 0 ;
  quizReponse3.dataset.reponse = 0 ;
  quizReponse4.dataset.reponse = 0 ;
}


//###########################################################################
// le jeux commance
let bonneReponse = 1;
let numQuestion = 0 ;
function playGame()
{
  InitBackColorReponse();
  InitDataReponses();
  
  let questionsID = questionsAllInformations["questions"][numQuestion][0];
  let question    = questionsAllInformations["questions"][numQuestion][1];
  let theme    = questionsAllInformations["questions"][numQuestion][2];

// console.log (questionsAllInformations);
questionQuiz.innerText = question ; // vers html 

console.log( `ID de la question ${questionsID}`);
console.log( `:${question}`);

  // console.log(reponsesAll[0][1]);
  // console.log(reponsesAll[4][1]);
  // console.log(reponsesAll[8][1]);
  // console.log(reponsesAll[12][1]);
  // console.log(reponsesAll[16][1]);

  setQuestion(numQuestion+1);  // affiche le numero de question
  runTime(15);
   progresseBarre();
              switch(questionsID)
              {
                case reponsesAll[0][1]:
        
console.log(`reponses possible ${reponsesAll[0][2]}`);  
console.log(`  ${reponsesAll[1][2]} `)    ;      
console.log(`  ${reponsesAll[2][2]} ` )   ;                                        
console.log(`${reponsesAll[3][2]} ` ); 
//######################################
quizReponse1.innerText = reponsesAll[0][2] ;
quizReponse2.innerText  = reponsesAll[1][2] ;
quizReponse3.innerText  = reponsesAll[2][2] ;
quizReponse4.innerText  = reponsesAll[3][2] ;

// quizReponse1.dataset.reponse = reponsesAll[0][3];
// quizReponse2.dataset.reponse = reponsesAll[1][3];
// quizReponse3.dataset.reponse = reponsesAll[2][3];
// quizReponse4.dataset.reponse = reponsesAll[3][3];
//######################################
                break;
                 case reponsesAll[4][1]:                                         
console.log(`reponses possible ${reponsesAll[4][2]}`);  
console.log(`  ${reponsesAll[5][2]} `)    ;      
console.log(`  ${reponsesAll[6][2]} ` )   ;                                        
console.log(`${reponsesAll[7][2]} ` ); 
//######################################
quizReponse1.innerText  = reponsesAll[4][2] ;
quizReponse2.innerText  = reponsesAll[5][2] ;
quizReponse3.innerText  = reponsesAll[6][2] ;
quizReponse4.innerText  = reponsesAll[7][2] ;


// quizReponse1.dataset.reponse = reponsesAll[4][3];
// quizReponse2.dataset.reponse = reponsesAll[5][3];
// quizReponse3.dataset.reponse = reponsesAll[6][3];
// quizReponse4.dataset.reponse = reponsesAll[7][3];
//######################################
                break;
                    case reponsesAll[8][1]:
console.log(`reponses possible ${reponsesAll[8][2]}`);  
console.log(`  ${reponsesAll[9][2]} `)    ;      
console.log(`  ${reponsesAll[10][2]} ` )   ;                                        
console.log(`${reponsesAll[11][2]} ` ); 
//######################################
quizReponse1.innerText  = reponsesAll[8][2] ;
quizReponse2.innerText  = reponsesAll[9][2] ;
quizReponse3.innerText  = reponsesAll[10][2] ;
quizReponse4.innerText  = reponsesAll[11][2] ;


// quizReponse1.dataset.reponse = reponsesAll[8][3];
// quizReponse2.dataset.reponse = reponsesAll[9][3];
// quizReponse3.dataset.reponse = reponsesAll[10][3];
// quizReponse4.dataset.reponse = reponsesAll[11][3];
//######################################
                break;
                     case reponsesAll[12][1]:
console.log(`reponses possible ${reponsesAll[12][2]}`);  
console.log(`  ${reponsesAll[13][2]} `)    ;      
console.log(`  ${reponsesAll[14][2]} ` )   ;                                        
console.log(`${reponsesAll[15][2]} ` ); 
//######################################
quizReponse1.innerText  = reponsesAll[12][2] ;
quizReponse2.innerText  = reponsesAll[13][2] ;
quizReponse3.innerText = reponsesAll[14][2] ;
quizReponse4.innerText  = reponsesAll[15][2] ;


// quizReponse1.dataset.reponse = reponsesAll[12][3];
// quizReponse2.dataset.reponse = reponsesAll[13][3];
// quizReponse3.dataset.reponse = reponsesAll[14][3];
// quizReponse4.dataset.reponse = reponsesAll[15][3];
//######################################
                break;
                     case reponsesAll[16][1]:
console.log(`reponses possible ${reponsesAll[16][2]}`);  
console.log(`  ${reponsesAll[17][2]} `)    ;      
console.log(`  ${reponsesAll[18][2]} ` )   ;                                        
console.log(`${reponsesAll[19][2]} ` ); 
//######################################
quizReponse1.innerText  = reponsesAll[16][2] ;
quizReponse2.innerText  = reponsesAll[17][2] ;
quizReponse3.innerText  = reponsesAll[18][2] ;
quizReponse4.innerText  = reponsesAll[19][2] ;

// quizReponse1.dataset.reponse  = reponsesAll[16][3] ;
// quizReponse2.dataset.reponse  = reponsesAll[17][3] ;
// quizReponse3.dataset.reponse  = reponsesAll[18][3] ;
// quizReponse4.dataset.reponse  = reponsesAll[19][3] ;
//######################################
                break;
}

}
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
  questionsID.forEach((questionId) => {
    objetIdQuestion.push(Object.assign({}, { id: questionId }));

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
        `debug :fichier game.js fonction getReponse.js : tout est ok : taille = ${data["taille"]}`,
      );
   reponsesAll = data["reponsesAll"];
  //     console.log(reponsesAll);

  //    reponsesAll.forEach((reponseArray)=>{
  //           console.log(`------------------`);
  //         reponseArray.forEach((element)=>{
  //           console.log(`${element}:`);
  //         })
  //    })
 playGame();
    } else {
      console.log( `debug :fichier game.js fonction getReponse.js : Erreur taille = ${data["taille"]} `);
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
