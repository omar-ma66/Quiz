<?php
session_start();
header("content-type:application/json");

if (!isset($_SESSION["connecter"]) || $_SESSION["connecter"] !== "yes")
    header("location:../index.php");

$data =  json_decode(file_get_contents("php://input"), true);
const MAX_TIME = 15*5;
error_log($data["status"]);

if ($data["status"] === "debug") {
$theme_id = $_SESSION["theme_id"];
$pseudo    = $_SESSION["pseudo"];
$pseudo_id = $_SESSION["pseudo_id"];
$nb_reponses = $data["score"]["questions"];
$temps       = MAX_TIME - $data["score"]["temps"];
######################################
    require("../../src/PDOConnect.php");
    $idcon = PDOConnect("../../src/param");

error_log("sendScore");
error_log($nb_reponses);
error_log($temps);
error_log("end sendscore");

$query = "INSERT INTO score ( theme_id , nb_reponse, duree,user_id) VALUES(:theme_id,:nb_reponse,:duree,:user_id)";

$reqPreparer = $idcon->prepare($query);
$dataPreparer = [
                "theme_id"=>$theme_id,
                "nb_reponse"=>$nb_reponses,
                "duree"=>$temps,
                "user_id"=>$pseudo_id
                ];
   $reqPreparer->execute($dataPreparer);

                        if($idcon->lastInsertId() != false)
                            {
                                $idcon = null;
                                echo  json_encode(["status" => "success"]);
                            }
                        else
                            {
                                $idcon = null;
                             echo  json_encode(["status" => "SENDERR"]);    
                            }

#######################################
  
} else {
    echo  json_encode(["status" => "SENDERR"]);
}
