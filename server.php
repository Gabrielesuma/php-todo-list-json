<?php

$todoJson = file_get_contents("js/data.json");
//var_dump($todoJson);

if(isset($_POST['id'])){
    var_dump($_POST);
    $todo = json_decode($todoJson, true);
    $todoItem = [
        'id'=> (int)$_POST['id'],
        'text'=> $_POST['text'],
        'done'=> $_POST['done'],
        
    ];
    $todo[] = $todoItem;
    $todoJson = json_encode($todo, JSON_PRETTY_PRINT);
    file_put_contents('data.json', $todoJson);
}

header("Content-Type: application/json");
echo $todoJson;