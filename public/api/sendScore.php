<?php
session_start();
    header("content-type:application/json");

    if(!isset($_SESSION["connecter"]) || $_SESSION["connecter"] !== "yes")
        header("location:../index.php");

    $data =  json_decode(file_get_contents("php://input"),true);

error_log($data["status"]);
                    if( $data["status"] === "debug")
                        {
                          echo  json_encode(["status"=>"success"]);
                        }
                      else{
                            echo  json_encode(["status"=>"SENDERR"]);
                      }  

?>