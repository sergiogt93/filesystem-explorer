<?php

if (isset($_POST['submitEdit'])) {
    $oldFileName = $_POST['oldName'];
    $newFileName = $_POST['newName'];
    rename($_POST['path'] . $oldFileName, $_POST['path'] . $newFileName);
};

if(isset($_POST['modalDeleteBtn'])) {
    // unlink($_POST['pathName']);
    print_r($_POST);
}

// header("Location:./index.php");

?>
