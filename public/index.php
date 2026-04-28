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


<body class="w-screen h-screen">

  <main class="lg:flex flex-row min-h-dvh  gap-6">

    <!-- ############################################################################################# -->
    <div class=" bg-[#158DFE]  lg:flex-col flex-1  lg:pb-30">

      <section class=" flex flex-row justify-start items-center p-3 gap-26 font-bold text-2xl text-white lg:text-6xl pb-10 ">
        <img
          src="png/cerveau.png"
          alt="image serveau"
          class="w-8.75 h-8.75 lg:w-17 lg:h-17" />
        <h1>QuizMaster</h1>
      </section>

      <hr class="bg-[#565857] lg:" />
      <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
      <section
        class="  gap-x-10 text-2xl flex flex-row justify-center items-center pt-30  text-[#FFFFFF] lg:gap-x-20 lg:order-4  lg:pt-30 lg:text-4xl ">
        <article class="flex flex-col justify-center items-center gap-7  ">
          <img
            src="png/classement.png"
            alt="image classement"
            class="w-12 h-12 lg:w-17 lg:h-17" />
          <h2>classement</h2>
        </article>
        <!-- ----------------------------------------------------------- -->
        <article class="flex flex-col justify-center items-center gap-7  ">
          <img
            src="png/theme-dechantillon-de-couleur.png"
            alt="image théme"
            class="w-12 h-12 lg:w-17 lg:h-17" />
          <h2>Thèmes</h2>
        </article>
        <!-- ----------------------------------------------------------- -->

        <article class="flex flex-col justify-center items-center gap-7 ">
          <img
            src="png/gestion-du-temps.png"
            alt="image temps"
            class="w-12 h-12 lg:w-17 lg:h-17" />
          <h2>Temps</h2>
        </article>
        <!-- ----------------------------------------------------------- -->

      </section>
      <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
      <section
        class="text-[24px]  text-[#FFFFFF] flex flex-wrap justify-center p-10  lg:pt-30">
        <h2 class=" lg:text-5xl">Prêt à tester vos connaissances ?</h2>
      </section>
    </div>
    <!-- ############################################################################################# -->

    <div class="lg:flex-col flex-1">
      <section class="flex flex-wrap justify-center p-10 text-2xl  lg:p-20 ">
        <h2 class="lg:text-4xl">Connectez vous pour reprendre vos quiz</h2>
      </section>
      <form
        action="../src/connection.php"
        method="post"
        class="flex flex-col justify-center items-center text-2xl gap-5 lg:text-3xl lg:gap-15 lg:pt-4">
        <label for="id-pseudo">Nom d'utilisateur</label>
        <input
          type="text"
          name="pseudo"
          id="id-pseudo"
          required
          placeholder="votre pseudo"
          class="bg-gray-50 w-3/5 p-4 rounded-[20px] font-bold text-black " />
        <input
          type="submit"
          value="Se connecter"
          class="bg-[#158DFE] p-5 w-3/5 rounded-[20px] text-[#FFFF]" />
      </form>
    </div>
  </main>
</body>

</html>