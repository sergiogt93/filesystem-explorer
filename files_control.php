<?php

function getFileSize($path)
{
    $fileSize = filesize($path);
    return ($fileSize < 1024)
        ? $fileSize . "KB"
        : round($fileSize / 1024, 2) . "MB";
}

function getFileInfo($path)
{
    $fileSize = filesize($path);
    $pathInfo =  array(
        "name" => pathinfo($path, PATHINFO_FILENAME),
        "lastModified" => date("H, d M", strtotime(filemtime($path))),
        "extension" => pathinfo($path, PATHINFO_EXTENSION),
        "size" => getFileSize($fileSize)
    );
    return $pathInfo;
}


function listDirectory($dir){
    $list = scandir($dir);

    unset($list[array_search('.', $list, true)]);
    unset($list[array_search('..', $list, true)]);

    if (count($list) === 0) return;

    foreach($list as $element){
        if(!is_dir($dir.'/'.$element)) {
            echo "<p>$element</p>";
        }
        if(is_dir($dir.'/'.$element)) {
            echo '<details>';
            echo '<summary>'.$element.'</summary>';
                listDirectory($dir.'/'.$element);
            echo '</details>';
        }
    }
}