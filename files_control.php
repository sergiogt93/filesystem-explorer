<?php

function listDirectory($dir){
    $list = scandir($dir);

    unset($list[array_search('.', $list, true)]);
    unset($list[array_search('..', $list, true)]);

    if (count($list) === 0) return;

    foreach($list as $element){
        if(!is_dir($dir.'/'.$element)) {
            echo "<p class='list-group-item list-group-item-action list-group-item-light p-3'>$element</p>";
        }
        if(is_dir($dir.'/'.$element)) {
            echo '<details class="list-group-item list-group-item-action list-group-item-light p-3">';
            echo '<summary>'.$element.'</summary>';
                listDirectory($dir.'/'.$element);
            echo '</details>';
        }
    }
}
