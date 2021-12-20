<?php
    function getFileSize($size) {
        return ($size < 1024) ? $size . "KB" : round($size / 1024, 2) . "MB";
    }

    if(!isset($_GET['path'])) {
        return;
    }

    $path = $_GET['path'];

    if(!file_exists($path)) {
        return;
    }

    $fileSize = filesize($path);

    $pathInfo = array(
        "name" => pathinfo($path, PATHINFO_FILENAME),
        "lastModified" => date("H/d/Y", filemtime($path)),
        "extension" => pathinfo($path, PATHINFO_EXTENSION),
        "size" => getFileSize($fileSize)
    );

    echo  json_encode($pathInfo);