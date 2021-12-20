<?php

// save file
$target_dir = "./files/";
if ($_FILES["fileToUpload"]) {
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    // $uploadOk = 1;
    // $fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    
    move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_file);
} else if ($_FILES["folderToUpload"]){
    
}



//header ('Location: ./index.php');