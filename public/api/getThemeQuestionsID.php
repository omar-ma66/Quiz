<?php
session_start();
header("content-type:application/json");
if (!isset($_SESSION["connecter"]) || $_SESSION["connecter"] !== "yes")
    header("location:../index.php");

$themeArray =     json_decode(file_get_contents("php://input"), true);



if ($themeArray["status"] === "debug") {
    require("../../src/PDOConnect.php");
    $idcon = PDOConnect("../../src/param");
    $themeChoisi = $themeArray["theme"];
    $query  = "SELECT * from themes where theme = :theme";
    $reqPreparer = $idcon->prepare($query);
    $dataPrepare = ["theme" => $themeChoisi];
    $reqPreparer->execute($dataPrepare);
    if ($reqPreparer->rowCount() > 0) {
        error_log("ICI ca va 2");
        $data = $reqPreparer->fetch(PDO::FETCH_NUM);
        $reqPreparer->closeCursor();
        $idcon = null;
        echo json_encode(["status" => "success", "infoTheme" => $data]);
    }
} else {
    echo json_encode(["status" => "error"]);
}
