<?php
session_start();
?>

<!doctype html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="css/style.css" rel="stylesheet" />
  <title>QuizMaster</title>
</head>

<!-- les break points de taillwind  sm   = width >= 640     px-->
<!-- les break points de taillwind  md   = width >= 768     px-->
<!-- les break points de taillwind  lg   = width >= 1024    px-->
<!-- les break points de taillwind  xl   = width >= 1280    px-->
<!-- les break points de taillwind  2xl  = width >= 1536    px-->
<!-- ############################################################################################# -->


<body class="w-screen min-h-dvh">

  <main class="lg:flex flex-row min-h-dvh  gap-4">

    <!-- ############################################################################################# -->
    <div class=" bg-[#158DFE]  lg:flex-col flex-1  lg:pb-20">

      <section class=" flex flex-row justify-start items-center p-2 gap-26 font-bold text-2xl text-white lg:text-6xl  ">
        <img
          src="png/cerveau.png"
          alt="image serveau"
          class="w-6 h-6 lg:w-16 lg:h-16" />
        <h1>QuizMaster</h1>
      </section>

      <hr class="bg-[#565857] " />
      <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
      <section
        class="  gap-x-10  flex flex-row justify-center items-center pt-3  text-[#FFFFFF] lg:gap-x-20 lg:order-4  lg:pt-30 lg:text-4xl ">
        <article class="flex flex-col justify-center items-center gap-3  ">
          <img
            src="png/classement.png"
            alt="image classement"
            class="w-10 h-10 lg:w-16 lg:h-16" />
          <h2>classement</h2>
        </article>
        <!-- ----------------------------------------------------------- -->
        <article class="flex flex-col justify-center items-center gap-3   ">
          <img
            src="png/theme-dechantillon-de-couleur.png"
            alt="image théme"
            class="w-10 h-10 lg:w-16 lg:h-16" />
          <h2>Thèmes</h2>
        </article>
        <!-- ----------------------------------------------------------- -->

        <article class="flex flex-col justify-center items-center gap-3  ">
          <img
            src="png/gestion-du-temps.png"
            alt="image temps"
            class="w-10 h-10 lg:w-16 lg:h-16" />
          <h2>Temps</h2>
        </article>
        <!-- ----------------------------------------------------------- -->

      </section>
      <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
      <section
        class="text-2xl  text-[#FFFFFF] flex flex-wrap justify-center text-center px-2 py-8 pb-8 lg:pt-32">
        <h2 class=" lg:text-5xl">Prêt à tester vos connaissances ?</h2>
      </section>
    </div>
    <!-- ############################################################################################# -->

    <div class="lg:flex-col flex-1">
      <section class="flex flex-wrap justify-center text-center px-3 py-8 text-2xl  lg:p-15 ">
        <h2 class="lg:text-4xl">Connectez vous pour reprendre vos quiz</h2>
      </section>
      <form
        action="../src/connection.php"
        method="post"
        class="flex flex-col justify-center items-center text gap-3 lg:text-3xl lg:gap-4 lg:pt-4">
        <label for="id-pseudo">Nom d'utilisateur</label>
        <input
          type="text"
          name="pseudo"
          id="id-pseudo"
          required
          placeholder="votre pseudo"
          class="bg-gray-200 w-3/5 p-3 rounded-[20px] text-black " />
        <input
          type="submit"
          value="Se connecter"
          class="bg-[#158DFE] p-3 w-3/5 rounded-[20px] text-[#FFFF]" />
      </form>
      <div class="flex flex-col justify-center items-center lg:text-3xl "> 
       <a class="block  text-[#FFFFFF]  w-3/5 text-center mt-5 py-3 px-4 rounded-[20px] bg-[#158DFE] " href="classement.php">Classement</a> 
      </div>
    </div>
  </main>
</body>

</html>