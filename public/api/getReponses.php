<?php
session_start();
header("Content-type:application/json");
if (!isset($_SESSION["connecter"]) || $_SESSION["connecter"] !== "yes")
    header("location:../index.php");

$dataID = json_decode(file_get_contents("php://input"), true);
const MAX_QUESTIONS  = 5;
const MAX_REPONSES   = 20;
const STATUS_INDEX  = 0;
$taille =  count($dataID); // pour debug 


if ($dataID[STATUS_INDEX]["status"] == "debug") { // index 0 pour message status
    $taille = $dataID[2]["id"];   

    $query =   "SELECT * FROM reponses where question_id IN( :id1 ,:id2 ,:id3 , :id4 , :id5) ";
    require("../../src/PDOConnect.php");
    $idcon = PDOConnect("../../src/param");
    $reqPreparer = $idcon->prepare($query);
    $dataPreparer = [
        "id1" => $dataID[1]["id"],
        "id2" => $dataID[2]["id"],
        "id3" => $dataID[3]["id"],
        "id4" => $dataID[4]["id"],
        "id5" => $dataID[5]["id"]
    ];
    $reqPreparer->execute($dataPreparer);

    $taille = $reqPreparer->rowCount();
    if ((int)$reqPreparer->rowCount() === MAX_REPONSES) {
        error_log("GetReponse ici ok");


        $reponsesAll = $reqPreparer->fetchAll(PDO::FETCH_NUM);
        $reqPreparer->closeCursor();
        $idcon = null;
        echo json_encode(["status" => "success", "taille" => $taille, "reponsesAll" => $reponsesAll]); //taille controle  pour debug
    } else {
        error_log("GetReponse ici ok");
        echo json_encode(["status" => "erreur", "taille" => $taille]); // controle  pour debug

    }
} else {
    echo json_encode(["status" => "error"]);
}
