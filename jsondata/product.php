<?php
$url = 'http://172.16.10.142/jsondata/uploads/products/';
$results = [];

$results[] = [
    'id' => 1,
	'name' => 'HTC Touch HD',
    'image' => $url . 'htc_touch_hd_1.jpg',
];

$results[] = [
    'id' => 2,
	'name' => 'Palm Treo Pro',
    'image' => $url . 'palm_treo_pro_1.jpg',
];

$results[] = [
    'id' => 3,
	'name' => 'Canon EOS 5D',
    'image' => $url . 'canon_eos_5d_1.jpg',
];

$results[] = [
    'id' => 4,
	'name' => 'Nikon D300',
    'image' => $url . 'nikon_d300_1.jpg',
];

$results[] = [
    'id' => 5,
	'name' => 'iPod Touch',
    'image' => $url . 'ipod_touch_1.jpg',
];

$results[] = [
    'id' => 6,
	'name' => 'Samsung SyncMaster 941BW',
    'image' => $url . 'samsung_syncmaster_941bw.jpg',
];

$results[] = [
    'id' => 7,
	'name' => 'iPod Shuffle',
    'image' => $url . 'ipod_shuffle_1.jpg',
];

$results[] = [
    'id' => 8,
	'name' => 'iPod Nano',
    'image' => $url . 'ipod_nano_1.jpg',
];

$results[] = [
    'id' => 9,
	'name' => 'iPhone',
    'image' => $url . 'iphone_1.jpg',
];

$results[] = [
    'id' => 10,
	'name' => 'iMac',
    'image' => $url . 'imac_1.jpg',
];

$results[] = [
    'id' => 11,
	'name' => 'Nikon D300',
    'image' => $url . 'nikon_d300.png',
];

$results[] = [
    'id' => 12,
	'name' => 'Apple Cinema',
    'image' => $url . 'apple_cinema_30.jpg',
];

$results[] = [
    'id' => 13,
	'name' => 'MacBook Air',
    'image' => $url . 'macbook_air_1.jpg',
];

$results[] = [
    'id' => 14,
	'name' => 'MacBook Pro',
    'image' => $url . 'macbook_pro_1.jpg',
];

$results[] = [
    'id' => 15,
	'name' => 'Sony VAIO',
    'image' => $url . 'sony_vaio_1.jpg',
];

$results[] = [
    'id' => 16,
	'name' => 'HP LP3065',
    'image' => $url . 'hp_1.jpg',
];

$results[] = [
    'id' => 17,
	'name' => 'iPod Classic',
    'image' => $url . 'ipod_classic_1.jpg',
];

$results[] = [
    'id' => 18,
	'name' => 'Samsung Galaxy Tab 10.1',
    'image' => $url . 'samsung_tab_1.jpg',
];

header('Content-Type: application/json');
echo json_encode($results);