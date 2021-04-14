import xmlToJsonModule from './utils/xmlToJson.js';
import { decompressString } from './utils/compressionHandlers.js'

function loadPobString(objConfig, e = null, inputPobString = "") {
    console.log("click", e);
    // let inputDataField = document.querySelector("#inputs-data");
    // if (inputDataField.value === "") {
    //     document.querySelector("#inputs-data-validation").innerHTML = "El campo no puede ser vacio";
    //     return false
    // }
    // document.querySelector("#inputs-data-validation").innerHTML = "";
    // let pobString = null;
    // if(inputPobString !== ""){
    //     pobString = inputPobString;
    // } else {
    //     pobString = inputDataField.value;
    // }
    let pobString = inputPobString;
    objConfig.pobString = pobString;
    decompressString(pobString).then(resp => {console.log(resp); return resp}).then((xmlStringOriginal) => {
        // console.log("xmlstring original", xmlStringOriginal);
        let xmlDoc = new DOMParser().parseFromString(xmlStringOriginal, "text/xml");
        // let jsonPob = xmlToJson.parse(xmlDoc);
        let jsonPob = xmlToJsonModule(xmlDoc);
        // let jsonPob = xmlToJson2(xmlDoc);
        console.log("JSON", jsonPob);
        document.querySelector("#inputs-data-notes").value = jsonPob.PathOfBuilding.Notes["#text"];
        objConfig.xmlStringOriginal = xmlStringOriginal;
        objConfig.json = jsonPob;
    });
}

function loadPastebin(pobPastebinString, objConfig = {}, e = null) {
    let pastebinId = pobPastebinString.substring(pobPastebinString.lastIndexOf('/') + 1)
    let pastebinUrlRaw = "https://pastebin.com/raw/" + pastebinId;
    console.log("pastebin url raw", pastebinUrlRaw);
    fetch(pastebinUrlRaw, { method: 'GET' }).then(resp => resp.text()).then((pobString) => {
        loadPobString(objConfig, e, pobString);
    });
}

export { loadPobString, loadPastebin };