<?php
// function listDirectories($dir){
//     $list = scandir($dir);

//     unset($list[array_search('.', $list, true)]);
//     unset($list[array_search('..', $list, true)]);

//     if (count($list) === 0) return;

//     foreach($list as $element){
//         if(!is_dir($dir.'/'.$element)) {
//             echo `<p class="list-group-item list-group-item-action list-group-item-light p-3">$element</p>`;
//         }
//         if(is_dir($dir.'/'.$element)) {
//             echo '<details class="list-group-item list-group-item-action list-group-item-light p-3">';
//             echo '<summary>'.$element;
//                 listDirectories($dir.'/'.$element);
//             echo "</summary>";
//             echo '</details>';
//         }
//     }
// }
function listFolderFiles($dir){
    $list = scandir($dir);

    unset($list[array_search('.', $list, true)]);
    unset($list[array_search('..', $list, true)]);

    // prevent empty ordered elements
    if (count($list) < 1)
        return;

    echo '<ol>';
    foreach($list as $file){
        echo '<li>'.$file;
        if(is_dir($dir.'/'.$file)) listFolderFiles($dir.'/'.$file);
        echo '</li>';
    }
    echo '</ol>';
}
