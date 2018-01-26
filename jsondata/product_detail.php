<?php
$url = 'http://172.16.10.142/jsondata/uploads/products/';

$results = [];
$results[1] = [
    'id' => 1,
	'name' => 'HTC Touch HD',
    'image' => $url . 'htc_touch_hd_1.jpg',
	'images' => [
		$url . 'apple_cinema_30.jpg',
		$url . 'canon_eos_5d_1.jpg',
		$url . 'imac_1.jpg',
		$url . 'macbook_pro_1.jpg',
	]
];

$result = $results[$_GET['id']];

header('Content-Type: application/json');
echo json_encode($result);