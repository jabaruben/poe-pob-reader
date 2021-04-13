<?php

$decompressedString = file_get_contents('php://input');

$compressedString = base64_encode(gzcompress($decompressedString));

$compressedString = str_replace("/", "_", $compressedString);
$compressedString = str_replace("+", "-", $compressedString);

echo $compressedString;
