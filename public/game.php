<?php
session_start();
if (!isset($_SESSION["connecter"]) && $_SESSION["connecter"] !== "yes") {
  header("location:index.php");
}

$theme = $_SESSION["theme"] ;
?>


<!doctype html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Game</title>
  <link rel="stylesheet" href="css/style.css" type="text/css" />
  <script defer async src="js/game.js" type="module">
  
  </script>
</head>


<!-- les break points de taillwind  sm   = width >= 640     px-->
<!-- les break points de taillwind  md   = width >= 768     px-->
<!-- les break points de taillwind  lg   = width >= 1024    px-->
<!-- les break points de taillwind  xl   = width >= 1280    px-->
<!-- les break points de taillwind  2xl  = width >= 1536    px-->
<!-- ############################################################################################# -->



<body class="w-screen h-screen">
  <main class="mi-h-dvh">
    <!-- ############################################################################################# -->
    <section class="flex flex-row justify-between items-center">
      <div class="flex flex-row justify-center items-center p-4.5 gap-1">
        <img
          class="w-5.5"
          src="png/fleche-gauche.png"
          alt="fleche-gauche.png" />
        <a class="hover:text-red-700" href="theme.php"><span class="text-2xl">Quitter </span></a>
      </div>
      <!-- -------------------------------------------------------------------------------- -->
      <div
        class="flex flex-row justify-center items-center px-6.5  h-12.5 gap-2 bg-[#d9D9D9] rounded-[25px]">
        <img class="w-5.5 h-5.5" src="png/cercle.png" alt="cercle.png" />
        <h2 id="theme-choisi" class="text-2xl"><?= $_SESSION["theme"] ?></h2>
      </div>
    </section>
    <!-- ############################################################################################# -->


    <section class="flex flex-col gap-4 justify-center">
      <div class="flex flex-row justify-between p-2 font-bold">
        <h2 id="question-num">Question 1/5</h2>
        <span
          id="question-time"
          class="w-19 text-center rounded-2xl">15s</span>
      </div>
      <!-- ----------------------[PROGRESSE BARRE ]----------------------------------------- -->
      <div class="w-4/5 m-auto h-1.5 bg-[#d0dAFD]">
        <div data-level="0" id="progresse-barre" class="invisible w-1/5 h-1.5 bg-[#158dfe]"></div>
      </div>
    </section>
    <!-- ############################################################################################# -->

    <section
      class="flex flex-col justify-center items-center text-[20px] mt-1 mb-1">
      <div
        id="question-quiz"
        class="w-4/5 h-1/7 bg-[#d9D9D9] border-2 border-gray-400 rounded-3xl p-10 text-center">
      </div>
    </section>
    <!-- ############################################################################################# -->
    <section class="flex flex-col justify-center items-center gap-2.5 text-[20px] ">


      <div  data-reponse="" id="boiteReponse1" class="w-4/5  bg-[#d9d9d9] border-2 border-gray-400 rounded-3xl h-20 flex flex-row justify-start items-center pl-10">
        <span>A</span> <span data-reponse="0" id="quiz-reponse1" class="ml-10">Réponse</span>
      </div>
      <!-- -------------------------------------------------------------------------------- -->

      <div data-reponse=""  id="boiteReponse2" class="w-4/5  bg-[#d9d9d9] border-2 border-gray-400 rounded-3xl h-20 flex flex-row justify-start items-center pl-10">
        <span>B</span> <span data-reponse="0"id="quiz-reponse2" class="ml-10">Réponse</span>
      </div>

      <!-- -------------------------------------------------------------------------------- -->

      <div data-reponse=""  id="boiteReponse3" class="w-4/5 bg-[#d9d9d9] border-2 border-gray-400 rounded-3xl h-20 flex flex-row justify-start items-center pl-10">
        <span>C</span> <span  data-reponse="0"id="quiz-reponse3" class="ml-10">Réponse</span>
      </div>
      <!-- -------------------------------------------------------------------------------- -->

      <div data-reponse="" id="boiteReponse4" class="w-4/5  bg-[#d9d9d9] border-2 border-gray-400 rounded-3xl h-20 flex flex-row justify-start items-center pl-10">
        <span>D</span> <span data-reponse="0" id="quiz-reponse4" class="ml-10">Réponse</span>
      </div>
    </section>
    <!-- ############################################################################################# -->
    <section id="btn-suivant" class="invisible flex flex-col justify-center items-center mt-4 text-2xl text-white">
      <button 
        class="w-4/5  bg-[#158dfe] border-2 border-blue-700 rounded-3xl h-15">Question suivante
      </button>
    </section>
    <!-- ############################################################################################# -->
  </main>
</body>

</html>