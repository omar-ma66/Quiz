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
let pageSuivente = 0;
let numQuestion = 0 ;
let gameObjet = ["questions","temps"];
gameObjet["questions"] = 0;
gameObjet["temps"] = 0;


function createRandomMatrix(limite)
{
   const tableau = [] ;
  while(tableau.length < 4)
  {

    let r =  Math.floor( ( Math.random()*10) % limite ) ;

    if ( !tableau.includes(r))
            tableau.push(r);
  }
  return [...tableau];
}
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

let pageSuivante = 0;
//bg-[#d9D9D9] Evenement des 4 boutons reponse
let tour = 0 ;
function initEventBoutonReponse(btn,quiz)
{
 
  
  if (btn)
      { 
        console.log("#########++++++++++++++++++++++++++++###########");
        btn.addEventListener('click',(event)=>{

if(pageSuivante != numQuestion) return ;
pageSuivante++;
          tour++;
          console.log(`le tour num ${tour} : ${pageSuivante}: ${numQuestion} ${decompte} question ${gameObjet["questions"]} temps ${gameObjet["temps"]}`);
        
                     if(quiz.dataset.reponse === "1")
                     {
                         btn.classList.remove("bg-[#d9d9d9]"); 
                        btn.classList.add("bg-green-300"); 
                        progresseBarre();
                      
                     }
                     else{
                        btn.classList.remove("bg-[#d9d9d9]"); 
                        btn.classList.add("bg-red-300"); 
                            if( quizReponse1.dataset.reponse === "1")
                                { boiteReponse1.classList.remove("bg-[#d9d9d9]"); 
                                  boiteReponse1.classList.add("bg-green-300"); }
                                   if( quizReponse2.dataset.reponse === "1")
                                { boiteReponse2.classList.remove("bg-[#d9d9d9]"); 
                                  boiteReponse2.classList.add("bg-green-300"); }
                                     if( quizReponse3.dataset.reponse === "1")
                                { boiteReponse3.classList.remove("bg-[#d9d9d9]"); 
                                  boiteReponse3.classList.add("bg-green-300"); }
                                       if( quizReponse4.dataset.reponse === "1")
                                { boiteReponse4.classList.remove("bg-[#d9d9d9]"); 
                                  boiteReponse4.classList.add("bg-green-300"); }
                     }
stopTime();
btnSuivantVisible();

        })

    

      }
      else
      console.log("############################################");
    }

initEventBoutonReponse(boiteReponse1,quizReponse1);
initEventBoutonReponse(boiteReponse2,quizReponse2);
initEventBoutonReponse(boiteReponse3,quizReponse3);
initEventBoutonReponse(boiteReponse4,quizReponse4);


function btnSuivantInvisible()
{
  btnSuivant.classList.add("invisible");
}
function btnSuivantVisible()
{
   btnSuivant.classList.remove("invisible"); 
}


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
    btnSuivantVisible();
  }
  
}
//#############################################
// demare le compteur
function runTime( time )
{     stopTime(); // clearInterval(myTimeOut);
  decompte = time ;
  myTimeOut = setInterval(decrementeCompteur,1000);
}


function stopTime()
{
  clearInterval(myTimeOut);
}

//#############################################
// progresse barre indique la progression des bonnes reponses 
let level = 0 ;
function progresseBarre()
{
  if(progresseBarreElement)
      {   
                  switch(  parseInt (progresseBarreElement.dataset.level))
                  {
                    case 0 :progresseBarreElement.classList.remove("invisible");
                            progresseBarreElement.dataset.level = 1;
                      break;
                    case 1 :
                 
                            progresseBarreElement.classList.remove("w-1/5");
                            progresseBarreElement.classList.add("w-2/5");
                            progresseBarreElement.dataset.level =  2;
                     break;
                    case 2:
                            progresseBarreElement.classList.remove("w-2/5");
                            progresseBarreElement.classList.add("w-3/5");
                            progresseBarreElement.dataset.level = 3;
                      break;
                    case 3:
                              progresseBarreElement.classList.remove("w-3/5");
                            progresseBarreElement.classList.add("w-4/5");
                            progresseBarreElement.dataset.level =  4;
                      break;
                    case 4:
                              progresseBarreElement.classList.remove("w-4/5");
                            progresseBarreElement.classList.add("w-5/5");
                            progresseBarreElement.dataset.level = 5;   
                      break;
                   case 5:
                    break;        
                     
                  } 
    return ;
}
}

//#############################################
// informe le numero de question
function setQuestion(num)
{
  questionNum.innerText ="Question "+  num + "/5";
}


function InitDataReponses()
{
  quizReponse1.dataset.reponse = "0" ;
  quizReponse2.dataset.reponse = "0" ;
  quizReponse3.dataset.reponse = "0" ;
  quizReponse4.dataset.reponse = "0" ;
}

function InitDataReponsesBoite()
{
boiteReponse1.dataset.reponse = "0";
boiteReponse2.dataset.reponse = "0";
boiteReponse3.dataset.reponse = "0";
boiteReponse4.dataset.reponse = "0";
}

//###########################################################################
// le jeux commance
let bonneReponse = 1;

//###########################################################################
function playGame()
{
  InitBackColorReponse(); // initialise le fond des reponses
  InitDataReponses();    // init la dataset 
  InitDataReponsesBoite();
  btnSuivantInvisible();
  const matrix = createRandomMatrix(4);
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
  runTime(15); // demarage du chrono
  //  progresseBarre(); 
              switch(questionsID)       // id de la question
              {
                case reponsesAll[0][1]:         // id question reponse  équivalent 
        
console.log(`reponses possible ${reponsesAll[0][2]}`);  
console.log(`  ${reponsesAll[1][2]} `)    ;      
console.log(`  ${reponsesAll[2][2]} ` )   ;                                        
console.log(`${reponsesAll[3][2]} ` ); 
//######################################
quizReponse1.innerText = reponsesAll[matrix[0]][2] ;
quizReponse2.innerText  = reponsesAll[matrix[1]][2] ;
quizReponse3.innerText  = reponsesAll[matrix[2]][2] ;
quizReponse4.innerText  = reponsesAll[matrix[3]][2] ;

quizReponse1.dataset.reponse = reponsesAll[matrix[0]][3];
quizReponse2.dataset.reponse = reponsesAll[matrix[1]][3];
quizReponse3.dataset.reponse = reponsesAll[matrix[2]][3];
quizReponse4.dataset.reponse = reponsesAll[matrix[3]][3];

boiteReponse1.dataset.reponse = reponsesAll[matrix[0]][3];
boiteReponse2.dataset.reponse = reponsesAll[matrix[1]][3];
boiteReponse3.dataset.reponse = reponsesAll[matrix[2]][3];
boiteReponse4.dataset.reponse = reponsesAll[matrix[3]][3];

//######################################
                break;
                 case reponsesAll[4][1]:        // id question reponse  équivalent                                   
console.log(`reponses possible ${reponsesAll[4][2]}`);  
console.log(`  ${reponsesAll[5][2]} `)    ;      
console.log(`  ${reponsesAll[6][2]} ` )   ;                                        
console.log(`${reponsesAll[7][2]} ` ); 
//######################################
quizReponse1.innerText  = reponsesAll[matrix[0]+4][2] ;
quizReponse2.innerText  = reponsesAll[matrix[1]+4][2] ;
quizReponse3.innerText  = reponsesAll[matrix[2]+4][2] ;
quizReponse4.innerText  = reponsesAll[matrix[3]+4][2] ;


quizReponse1.dataset.reponse = reponsesAll[matrix[0]+4][3];
quizReponse2.dataset.reponse = reponsesAll[matrix[1]+4][3];
quizReponse3.dataset.reponse = reponsesAll[matrix[2]+4][3];
quizReponse4.dataset.reponse = reponsesAll[matrix[3]+4][3];

boiteReponse1.dataset.reponse = reponsesAll[matrix[0]+4][3];
boiteReponse2.dataset.reponse = reponsesAll[matrix[1]+4][3];
boiteReponse3.dataset.reponse = reponsesAll[matrix[2]+4][3];
boiteReponse4.dataset.reponse = reponsesAll[matrix[3]+4][3];

//######################################
                break;
                    case reponsesAll[8][1]:    // id question reponse  équivalent 
console.log(`reponses possible ${reponsesAll[8][2]}`);  
console.log(`  ${reponsesAll[9][2]} `)    ;      
console.log(`  ${reponsesAll[10][2]} ` )   ;                                        
console.log(`${reponsesAll[11][2]} ` ); 
//######################################
quizReponse1.innerText  = reponsesAll[matrix[0]+8][2] ;
quizReponse2.innerText  = reponsesAll[matrix[1]+8][2] ;
quizReponse3.innerText  = reponsesAll[matrix[2]+8][2] ;
quizReponse4.innerText  = reponsesAll[matrix[3]+8][2] ;


quizReponse1.dataset.reponse = reponsesAll[matrix[0]+8][3];
quizReponse2.dataset.reponse = reponsesAll[matrix[1]+8][3];
quizReponse3.dataset.reponse = reponsesAll[matrix[2]+8][3];
quizReponse4.dataset.reponse = reponsesAll[matrix[3]+8][3];


boiteReponse1.dataset.reponse = reponsesAll[matrix[0]+8][3];
boiteReponse2.dataset.reponse = reponsesAll[matrix[1]+8][3];
boiteReponse3.dataset.reponse = reponsesAll[matrix[2]+8][3];
boiteReponse4.dataset.reponse = reponsesAll[matrix[3]+8][3];
//######################################
                break;
                     case reponsesAll[12][1]:     // id question reponse  équivalent 
console.log(`reponses possible ${reponsesAll[12][2]}`);  
console.log(`  ${reponsesAll[13][2]} `)    ;      
console.log(`  ${reponsesAll[14][2]} ` )   ;                                        
console.log(`${reponsesAll[15][2]} ` ); 
//######################################
quizReponse1.innerText  = reponsesAll[matrix[0]+12][2] ;
quizReponse2.innerText  = reponsesAll[matrix[1]+12][2] ;
quizReponse3.innerText = reponsesAll[matrix[2]+12][2] ;
quizReponse4.innerText  = reponsesAll[matrix[3]+12][2] ;


quizReponse1.dataset.reponse = reponsesAll[matrix[0]+12][3];
quizReponse2.dataset.reponse = reponsesAll[matrix[1]+12][3];
quizReponse3.dataset.reponse = reponsesAll[matrix[2]+12][3];
quizReponse4.dataset.reponse = reponsesAll[matrix[3]+12][3];

boiteReponse1.dataset.reponse = reponsesAll[matrix[0]+12][3];
boiteReponse2.dataset.reponse = reponsesAll[matrix[1]+12][3];
boiteReponse3.dataset.reponse = reponsesAll[matrix[2]+12][3];// valeur boolean reponse vrais ou faut
boiteReponse4.dataset.reponse = reponsesAll[matrix[3]+12][3];
//######################################
                break;
                     case reponsesAll[16][1]:         // id question reponse  équivalent 
console.log(`reponses possible ${reponsesAll[16][2]}`);  
console.log(`  ${reponsesAll[17][2]} `)    ;      
console.log(`  ${reponsesAll[18][2]} ` )   ;                                        
console.log(`${reponsesAll[19][2]} ` ); 
//######################################
quizReponse1.innerText  = reponsesAll[matrix[0]+16][2] ;
quizReponse2.innerText  = reponsesAll[matrix[1]+16][2] ;
quizReponse3.innerText  = reponsesAll[matrix[2]+16][2] ;
quizReponse4.innerText  = reponsesAll[matrix[3]+16][2] ;

quizReponse1.dataset.reponse  = reponsesAll[matrix[0]+16][3] ;    
quizReponse2.dataset.reponse  = reponsesAll[matrix[1]+16][3] ;
quizReponse3.dataset.reponse  = reponsesAll[matrix[2]+16][3] ;
quizReponse4.dataset.reponse  = reponsesAll[matrix[3]+16][3] ;

boiteReponse1.dataset.reponse  = reponsesAll[matrix[0]+16][3] ;    // valeur boolean reponse vrais ou faut
boiteReponse2.dataset.reponse  = reponsesAll[matrix[1]+16][3] ;
boiteReponse3.dataset.reponse  = reponsesAll[matrix[2]+16][3] ;
boiteReponse4.dataset.reponse  = reponsesAll[matrix[3]+16][3] ;
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
