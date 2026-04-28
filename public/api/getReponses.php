<?php
  session_start();
  header("Content-type:application/json");
            if( !isset($_SESSION["connecter"]) || $_SESSION["connecter"] !== "yes" )
                header("location:../index.php");
      
   $dataID = json_decode(file_get_contents("php://input"),true);
   
   
               if($dataID[0]["status"] == "debug")
                {
                    echo json_encode(["status"=>"success"]);
                }
                else
                    {
                        echo json_encode(["status"=>"error"]);
                    }





?>