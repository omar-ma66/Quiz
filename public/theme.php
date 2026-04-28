<?php
session_start();

if (!isset($_SESSION["connecter"]) ||  $_SESSION["connecter"] !== "yes") {
    header("location:index.php");
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thème</title>
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <script defer async src="js/theme.js" type="module"></script>
</head>

<body class="w-screen h-screen">

    <!-- les break points de taillwind  sm   = width >= 640     px-->
    <!-- les break points de taillwind  md   = width >= 768     px-->
    <!-- les break points de taillwind  lg   = width >= 1024    px-->
    <!-- les break points de taillwind  xl   = width >= 1280    px-->
    <!-- les break points de taillwind  2xl  = width >= 1536    px-->
    <!-- ############################################################################################# -->

<main class="min-h-dvh"> 
    <section class=" flex flex-row justify-between p-3 mb-9 font-bold text-2xl lg:justify-start">
        <img class="w-8.75 h-8.75  lg:mr-6 lg:h-12 " src="png/cerveau.png" alt="cerveau.png">
        <h1 class="lg:text-4xl">QuizMaster</h1>
        <div class="hover:bg-[#64CD8A] p-1 lg:ml-auto ">
            <a href="../src/deconnection.php"><img class="w-8.75 h[35px] lg:w-12 lg:h-12" src="png/se-deconnecter.png" alt="se-deconnecter.png" class="w-8.75 h-8.75"></a>
        </div>
    </section>
    <!-- ----------------------------------------------- -->

    <hr class="ng-[#565857] pt-9">
    <!-- ----------------------------------------------- -->

    <section class="flex flex-col justify-center items-start gap-2.5 lg:gap-7">
        <h2 class="font-bold text-[32px] pl-3.5    lg:text-4xl lg:pt-30">Bonjour,<?= $_SESSION["pseudo"] ?> !</h2>
        <p class="text-[24px] ml-4 pb-5 lg:text-3xl">Choisissez un thème et commencez votre quiz</p>
    </section>
    <!-- ############################################################################################# -->
    <div id="menu-theme" class="flex flex-col gap-1 lg:flex-row lg:justify-around lg:pt-7 lg:items-center">
        <section id="id-science" class="bg-[#D9D9D9] p-4.5 rounded-[20px] flex flex-row justify-between lg:gap-4  lg:p-10  transition-colors hover:border-blue-600 hover:bg-gray-300  border-gray-500 border-4 hover:scale-103">
            <article class="flex flex-col gap-5 pb-3 ">
                <div class="bg-[#64CD8A]  w-22 flex justify-center rounded-[20px]">
                    <img src="png/humain.png" alt="humain.png" class="w-14.5 h-14.5 lg:w-19.5 lg:h-19.5">
                </div>
                <h3 class="text-2xl font-bold">Science</h3>
            </article>
            <span class="self-end text-2xl ">Facile</span>
        </section>
        <!-- ----------------------------------------------- -->
        <section id="id-geographie" class="bg-[#D9D9D9] p-4.5 rounded-[20px] flex flex-row justify-between lg:gap-4  lg:p-10  transition-colors hover:border-blue-600  hover:bg-gray-300 border-gray-500 border-4 hover:scale-103">
            <article class="flex flex-col gap-5 pb-3 ">
                <div class="bg-[#64CD8A]  w-22 flex justify-center rounded-[20px]">
                    <img src="png/geometrie.png" alt="geometrie.png" class="w-14.5 h-14.5 lg:w-19.5 lg:h-19.5">
                </div>
                <h3 class="text-2xl font-bold">Géographie</h3>
            </article>
            <span class="self-end text-2xl">Facile</span>
        </section>
        <!-- ----------------------------------------------- -->

        <section id="id-capitale" class="bg-[#D9D9D9] p-4.5 rounded-[20px] flex flex-row justify-between lg:gap-4  lg:p-10 transition-colors hover:border-blue-600 hover:bg-gray-300  border-gray-500 border-4 hover:scale-103">
            <article class="flex flex-col gap-5 pb-3 ">
                <div class="bg-[#64CD8A]  w-22  flex justify-center rounded-[20px]">
                    <img src="png/capitale (1).png" alt="capitale" class="w-14.5 h-14.5 lg:w-19.5 lg:h-19.5">
                </div>
                <h3 class="text-2xl font-bold">Capitales</h3>
            </article>
            <span class="self-end text-2xl">Facile</span>
        </section>
        <!-- ----------------------------------------------- -->

        <section id="id-univers" class="bg-[#D9D9D9] p-4.5 rounded-[20px] flex flex-row justify-between lg:gap-4  lg:p-10 transition-colors hover:border-blue-600 hover:bg-gray-300  border-gray-500 border-4 hover:scale-103">
            <article class="flex flex-col gap-5 pb-3 ">
                <div class="bg-[#64CD8A]  w-22  flex justify-center rounded-[20px]">
                    <img src="png/telescope.png" alt="telescope.png" class="w-14.5 h-14.5 lg:w-19.5 lg:h-19.5">
                </div>
                <h3 class="text-2xl font-bold">Univers</h3>
            </article>
            <span class="self-end text-2xl">Facile</span>
        </section>
        <!-- ----------------------------------------------- -->

    </div>
    </main>
    <!-- ############################################################################################# -->

  

</body>

</html>