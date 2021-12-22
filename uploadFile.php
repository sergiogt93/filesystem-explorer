<?php

// save file
$target_dir = "./files/";
if ($_FILES["fileToUpload"]) {
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_file);
}

//header ('Location: ./index.php');