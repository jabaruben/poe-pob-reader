<?php

$compressedString = file_get_contents('php://input');

$compressedString = str_replace("_", "/", $compressedString);
$compressedString = str_replace("-", "+", $compressedString);

$decompressedString = gzuncompress(base64_decode($compressedString));

echo $decompressedString;
