<?php

function isFolder($path)
{
    return is_dir($path);
}

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

// function showFiles($path)
// {
//     $dir = opendir($path);
//     $files = array();
//     while (false !== ($current = readdir($dir))) {
//         if ($current != "." && $current != "..") {
//             if (is_dir($path.$current)) {
//                 showFiles($path.$current.'/');
//             }
//         }
//         // } else {
//         //     $files[] = $current;
//         // }
//     };

//     return $files;
// };
