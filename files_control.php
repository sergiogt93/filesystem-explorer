<?php

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
