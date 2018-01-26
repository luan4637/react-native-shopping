<?php
$url = 'http://172.16.10.142/jsondata/uploads/';
$results = [];

$results[] = [
    'id' => 1,
    'name' => 'Clothing',
    'image' => $url . 'clothing.jpg',
];

$results[] = [
    'id' => 2,
    'name' => 'Electronics',
    'image' => $url . 'electronics.jpg',
];

$results[] = [
    'id' => 3,
    'name' => 'Sports',
    'image' => $url . 'sports.jpg',
];

$results[] = [
    'id' => 4,
    'name' => 'Automotive',
    'image' => $url . 'automotive.jpg',
];

$results[] = [
    'id' => 5,
    'name' => 'Cosmetics',
    'image' => $url . 'cosmetics.jpg',
];

$results[] = [
    'id' => 6,
    'name' => 'Home & Living',
    'image' => $url . 'home_living.jpg',
];

$results[] = [
    'id' => 7,
    'name' => 'Kids',
    'image' => $url . 'kids.jpg',
];

$results[] = [
    'id' => 8,
    'name' => 'Books',
    'image' => $url . 'books.jpg',
];

$results[] = [
    'id' => 9,
    'name' => 'Furniture',
    'image' => $url . 'furniture.jpg',
];

$results[] = [
    'id' => 10,
    'name' => 'Kitchen & Dinning',
    'image' => $url . 'kitchen_dinning.jpg',
];

$results[] = [
    'id' => 11,
    'name' => 'Jewelry',
    'image' => $url . 'jewelry.jpg',
];

$results[] = [
    'id' => 12,
    'name' => 'Movies & Music',
    'image' => $url . 'movies_music.jpg',
];

if (isset($_GET['limit']) && $_GET['limit'] > 0) {
	$results = array_slice($results, 0, $_GET['limit'], true);
}


header('Content-Type: application/json');
echo json_encode($results);