import jsonToXmlModule from './utils/jsonToXml.js';
import { compressString } from './utils/compressionHandlers.js'

function savePob(objConfig, notes){
    objConfig.json.PathOfBuilding.Notes["#text"] = notes;
    objConfig.json = addNotesToJson(objConfig.json);
    var xmlStringFinal = jsonToXmlModule(objConfig.json);
    objConfig.xmlStringFinal = xmlStringFinal;
    compressString(objConfig.xmlStringFinal).then(compressString => {
        objConfig.pobStringFinal = compressString;
        let outputField = document.querySelector("#outputs-data");
        outputField.value = compressString;
    });
}

function addNotesToJson(InputJSON) {
    console.log("addNotesToJson", InputJSON);
    InputJSON.PathOfBuilding.Notes["#text"] += "\n\nPrueba pruebosa";
    return InputJSON;
}

export { savePob }