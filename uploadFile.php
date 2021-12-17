<?php

// save file 
$target_dir = "./files/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$fileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

move_uploaded_file($_FILES['fileToUpload']['tmp_name'], $target_file);

header ('Location: ./index.php');