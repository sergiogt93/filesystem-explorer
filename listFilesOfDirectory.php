<?php
    if(!isset($_GET['folder'])) {
        return;
    }

    $folder = $_GET['folder'];
    $files = scandir($folder);
    unset($files[array_search('.', $files, true)]);
    unset($files[array_search('..', $files, true)]);

    $listFilter = array_filter($files, fn ($file) => !is_dir($folder.'/'.$file));

    echo json_encode($listFilter);