<?php
session_start();
header("content-type:application/json");
if(!isset($_SESSION["connecter"]) || $_SESSION["connecter"] !== "yes")
      header("location:../public/index.php");
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["theme"])) {
   
    $_SESSION["theme"] =  $data["theme"];
    echo json_encode(["status" => "SEND_OK"]);
    exit();
} else {
    $idcon = null;
    echo json_encode(["status" => "SEND_ERR"]);
    exit();
}
