<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("location:../public/index.php?server-error:no-post-method");
}
if (isset($_POST["pseudo"]) && !empty($_POST["pseudo"])) {
  $pseudo = htmlspecialchars($_POST["pseudo"]);

  require "../src/PDOConnect.php";

  $idcon = PDOConnect("param", "quiz");

  $query = "SELECT * from users where pseudo = :pseudo ";

  $queryPrepare = $idcon->prepare($query);

  $data = ["pseudo" => $pseudo];
  $queryPrepare->execute($data);

  if ($queryPrepare->rowCount() != 0) {
    $info = $queryPrepare->fetch(PDO::FETCH_ASSOC);

    $_SESSION["connecter"] = "yes";
    $_SESSION["pseudo"] =  $info["pseudo"];
    $_SESSION["pseudo_id"] = $info["id"];
  } else {
    $query2 = "INSERT INTO users(pseudo)VALUES(:pseudo)";
    $queryPrepare = $idcon->prepare($query2);
    $queryPrepare->execute($data);
    $pseudoID = $idcon->lastInsertId();
    $_SESSION["connecter"] = "yes";
    $_SESSION["pseudo"] = $pseudo;
    $_SESSION["pseudo_id"] = $pseudoID;
  }
  $queryPrepare->closeCursor();
  $idcon = null;
  header("location:../public/theme.php");
}
