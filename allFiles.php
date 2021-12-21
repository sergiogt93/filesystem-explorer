<?php
$allFiles = array();


if(!isset($_GET['path'])) {
    return;
}

$path = $_GET['path'];

if(!file_exists($path)) {
    return;
}

function listDirectory($dir){
    $list = scandir($dir);
    global $allFiles;

    unset($list[array_search('.', $list, true)]);
    unset($list[array_search('..', $list, true)]);

    if (count($list) === 0) return;

    foreach($list as $element){
        if(!is_dir($dir.'/'.$element)) {
            //echo "<p class='list-group-item list-group-item-action list-group-item-light p-3'>$element</p>";
            $file = array("file" => $element);
            array_push($allFiles, $file);
        }
        if(is_dir($dir.'/'.$element)) {
            //echo '<details class="list-group-item list-group-item-action list-group-item-light p-3">';
            //echo '<summary>'.$element.'</summary>';
            $folder = array("folder" => $element);
            array_push($allFiles, $folder);
            listDirectory($dir.'/'.$element);
            //echo '</details>';
        }
    }
}

listDirectory($path);

echo json_encode($allFiles);