<?php
function PDOConnect($param, $base)
{
    require($param . ".inc.php");

    $dsn = "mysql:host=" . HOST . ";dbname=" . $base;
    $user = USER;
    $pass = PASS;
    $options = [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES,
        false
    ];
    try {
        $dbcon = new PDO($dsn, $user, $pass, $options);
        return $dbcon;
    } catch (PDOException $errPDO) {
        echo "Une erreur PDO c'est produite MESSAGE :" .  $errPDO->getMessage() . "<br>";
        echo "nom du fichier :"   .   $errPDO->getFile() . "<br>";
        echo "numéro de  ligne : " .      $errPDO->getLine() . "<br>";
        echo "Code erreur : " .      $errPDO->getCode() . "<br>";
    }
}
