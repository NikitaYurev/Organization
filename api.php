<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $response = ["message" => "This is a GET request"];
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $response = ["message" => "This is a POST request", "data" => $data];
        break;
    case 'PUT':
        $response = ["message" => "This is a PUT request"];
        break;
    case 'DELETE':
        $response = ["message" => "This is a DELETE request"];
        break;
    default:
        http_response_code(405);
        $response = ["message" => "Method NotAllowed"];
        break;
}

echo json_encode($response);

?>