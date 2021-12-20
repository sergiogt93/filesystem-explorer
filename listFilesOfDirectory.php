<?php
    if(!isset($_GET['folder'])) {
        return;
    }

    $folder = $_GET['folder'];
    $list = scandir($folder);
    unset($list[array_search('.', $list, true)]);
    unset($list[array_search('..', $list, true)]);

    foreach ($list as $key => $value) {
        if(is_dir($folder.'/'.$value)) {
            unset($list[$key]);
        }
    }

    echo json_encode($list);