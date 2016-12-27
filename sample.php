<?php
header('Access-Control-Allow-Origin: *');

    $object = [
"module" => "ajax",
 "action" => "version",
 "mode" => null,
 "post_id" => null,
 "post_name" => null,
 "domain" => "philgo.com",
 "version" => "1.2.0",
 "user_id" => false,
 "user_name" => null,
 "user_stamp" => null,
 "acl" => "",
 "code" => 0,
 "site" => "philgo",
 "stamp" => 1482819375 ];
 
 echo json_encode($object);
 ?>