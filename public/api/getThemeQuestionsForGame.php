<?php
session_start();
header("content-type:application/json");
if (!isset($_SESSION["connecter"]) || $_SESSION["connecter"] !== "yes")
    header("location:../index.php");

$themeIdArray =  json_decode(file_get_contents("php://input"), true);

if ($themeIdArray["status"] === "debug") {
    require("../../src/PDOConnect.php");
    $idcon = PDOConnect("../../src/param");
    $id =  $themeIdArray["theme"];
    $query1 = "SELECT * from questions where theme_id = :id  ORDER BY RAND() LIMIT 5";
    $reqPreparer =           $idcon->prepare($query1);
    $dataPreparer = ["id" => $id];
    $reqPreparer->execute($dataPreparer);

    if ($reqPreparer->rowCount() != 5) {
        error_log("ICI J'AI UN PROBLEME");
        echo json_encode(["status" => "error", "erreurType" => "pas de questions"]);
        exit;
    } else {
        $data = $reqPreparer->fetchAll(PDO::FETCH_NUM);
        error_log("ICI C'EST COOL");
        echo json_encode(["status" => "success", "questions" => $data]);
        exit;
    }
} else {
    echo json_encode(["status" => "error"]);
    exit;
}
