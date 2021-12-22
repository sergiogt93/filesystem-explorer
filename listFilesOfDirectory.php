<?php
    if(isset($_GET['folders'])) {
        listFoldersOfDirec($_GET['folders']);
    }

    if(isset($_GET['files'])) {
        listFilesOfDirec($_GET['files']);
    }

    function listFilesOfDirec($folder) {
        $files = scandir($folder);
        unset($files[array_search('.', $files, true)]);
        unset($files[array_search('..', $files, true)]);

        $listFilter = array_filter($files, fn ($file) => !is_dir($folder.'/'.$file));

        echo json_encode($listFilter);
    }
    
    function listFoldersOfDirec($folder) {
        $files = scandir($folder);
        unset($files[array_search('.', $files, true)]);
        unset($files[array_search('..', $files, true)]);

        $listFilter = array_filter($files, fn ($file) => is_dir($folder.'/'.$file));

        echo json_encode($listFilter);
    }