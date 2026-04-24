<?php
session_start();
header("content-type:application/json");
$data = json_decode(file_get_contents("php://input"), true);

require "PDOConnect.php";
$idcon = PDOConnect("param", "quiz");


if (isset($data["theme"])) {
    $theme = $data["theme"];
    $idcon->exec("INSERT INTO debug(message)VALUES('$theme')");
    $idcon = null;
    $_SESSION["theme"] = $theme;
    echo json_encode(["status" => "SEND_OK"]);
    exit();
} else {
    $idcon = null;
    echo json_encode(["status" => "SEND_ERR"]);
    exit();
}
