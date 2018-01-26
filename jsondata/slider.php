<?php
$url = 'http://172.16.10.142/jsondata/uploads/banners/';
$results = [];

$results[] = [
    'id' => 1,
    'image' => $url . 'banner1.jpg',
];

$results[] = [
    'id' => 2,
    'image' => $url . 'banner2.jpg',
];

$results[] = [
    'id' => 3,
    'image' => $url . 'banner3.jpg',
];

$results[] = [
    'id' => 4,
    'image' => $url . 'banner4.jpg',
];

$results[] = [
    'id' => 5,
    'image' => $url . 'banner5.jpg',
];

header('Content-Type: application/json');
echo json_encode($results);