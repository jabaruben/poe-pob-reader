async function decompressString(compressedString) {

    const decompressionScriptFilepath = '/reader/decompress-string.php';
    const compressedStringToSend = { method: 'POST', body: compressedString };
    const response = await fetch(decompressionScriptFilepath, compressedStringToSend);

    return await response.text();
}

async function compressString(decompressedString) {

    const compressionScriptFilepath = '/reader/compress-string.php';
    const decompressedStringToSend = { method: 'POST', body: decompressedString };
    const response = await fetch(compressionScriptFilepath, decompressedStringToSend);

    return await response.text();
}

export { decompressString, compressString }