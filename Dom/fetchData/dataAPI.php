<?php
header("Content-Type: application/json; charset=utf-8");


$users = [
    ["id" => 1, "name" => "Sokha", "email" => "sokha@example.com"],
    ["id" => 2, "name" => "Dara",  "email" => "dara@example.com"]
];

echo json_encode($users);
exit;
