<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classement Quiz</title>
    <link rel="stylesheet" href="css/style.css" type="text/css">
<style>
    h1{
        text-align: center;
    }
</style>
</head>
<body class="w-screen min-h-dvh">
<?php
require("../src/PDOConnect.php");
$idcon = PDOConnect("../src/param");
$datas = null ; 
$query = "SELECT pseudo,nb_reponse, duree FROM users,score WHERE score.user_id = users.id  ORDER BY nb_reponse DESC , duree ASC limit 5 ";

$resultat = $idcon->query($query);

            if($resultat  != false)
                {

  $datas = $resultat->fetchAll(PDO::FETCH_NUM);
$resultat->closeCursor();
$idcon = null;
                }
              else{
                $idcon = null ;
              }  
?>



                    <div class="flex flex-col justify-center items-center py-6">
                            <h2 class=" text-center text-3xl font-bold p-5">Classement Quiz</h2>
                            <img class="w-15 h-15" src="png/classement.png" alt="classement.png">
                    </div>
                 <div class="overflow-x-auto w-full px-4 ">
                    <table class=" table-auto w-full border-collapse text-center ">
               <tr class="bg-black text-white font-bold text">
                <th class="p-2">Pseudo</th>
                <th class="p-2">Bonnes Réponses</th>
                <th class="p-2">Temps </th>
               </tr>
               
                <tbody class=" font-bold text">
                  <?php foreach($datas as $data) : ?>

                <tr class="odd:bg-blue-300 even:bg-blue-500 ">
                        <?php foreach($data as $val) : ?>
                            <td class="py-2"> <?= htmlspecialchars(  $val) ?> </td>
                        <?php endforeach ; ?>
                        </tr>
                      <?php endforeach ; ?>
                </tbody>           
                 </table>   
                 </div>
</body>
</html>