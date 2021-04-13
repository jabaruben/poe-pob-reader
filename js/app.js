import xmlToJsonModule from './utils/xmlToJson.js';
import jsonToXmlModule from './utils/jsonToXml.js';
import {decompressString, compressString} from './utils/compressionHandlers.js'
import loadScript from './utils/scriptLoader.js';

// TODO: leer un pastebin usando el truco del /raw en la ruta
// TODO: convertir todo en funciones que reciban parametros para poder usar el pastebin
// TODO: Mostrar mas cosas que solo las notas
// TODO: Generar el orden de las gemas con los datos disponibles en la wiki
// TODO: Colores para el texto de manera amigable
// TODO: exportar en pastebin

let objConfig = {};
let loadButton = document.querySelector("[data-action=loadData]");
loadButton.addEventListener("click", (e) => {
    console.log("click", e);
    let inputDataField = document.querySelector("#inputs-data");
    if (inputDataField.value === "") {
        document.querySelector("#inputs-data-validation").innerHTML = "El campo no puede ser vacio";
        return false
    }
    document.querySelector("#inputs-data-validation").innerHTML = "";
    let pobString = inputDataField.value;
    objConfig.pobString = pobString;
    decompressString(pobString).then((xmlStringOriginal) => {
        console.log("xmlstring original", xmlStringOriginal);
        let xmlDoc = new DOMParser().parseFromString(xmlStringOriginal, "text/xml");
        // let jsonPob = xmlToJson.parse(xmlDoc);
        let jsonPob = xmlToJsonModule(xmlDoc);
        // let jsonPob = xmlToJson2(xmlDoc);
        console.log("JSON", jsonPob);
        document.querySelector("#inputs-data-notes").value = jsonPob.PathOfBuilding.Notes["#text"];
        objConfig.xmlStringOriginal = xmlStringOriginal;
        objConfig.json = jsonPob;
    });
});

let saveButton = document.querySelector("[data-action=saveData]");
saveButton.addEventListener("click", (e) => {
    console.log("jsonPob", objConfig);
    let inputDataField = document.querySelector("#inputs-data-notes");
    // if(inputDataField.value === ""){
    //     document.querySelector("#inputs-data-validation-notes").innerHTML = "El campo no puede ser vacio";
    //     return false
    // } 
    document.querySelector("#inputs-data-validation-notes").innerHTML = "";
    let notes = inputDataField.value;
    objConfig.json.PathOfBuilding.Notes["#text"] = notes;
    objConfig.json = addNotesToJson(objConfig.json);
    var xmlStringFinal = jsonToXmlModule(objConfig.json);
    objConfig.xmlStringFinal = xmlStringFinal;
    compressString(objConfig.xmlStringFinal).then(compressString => {
        objConfig.pobStringFinal = compressString;
        let outputField = document.querySelector("#outputs-data");
        outputField.value = compressString;
    });
});

let copyButton = document.querySelector("[data-action=copyOutput]");
copyButton.addEventListener("click", (e) => {
    copyToClipboard("#outputs-data");
});



let scriptUrl = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js";
let promise = loadScript(scriptUrl).then(
    script => console.log(`${script.src} is loaded!`),
    error => console.log(`Error: ${error.message}`)
).then(
    () => {
        // console.log("last script", script);
        console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
    }
).then(() => testLodash());
promise.then(script => console.log('Another handler...' + script));

function testLodash() {
    console.log(_.partition([1, 2, 3, 4], n => n % 2));
}

function copyToClipboard(selector) {
    /* Get the text field */
    var copyText = document.querySelector(selector);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    console.log("Copied the text: " + copyText.value);
}

function addNotesToJson(InputJSON) {
    console.log("addNotesToJson", InputJSON);
    InputJSON.PathOfBuilding.Notes["#text"] += "\n\nPrueba pruebosa";
    return InputJSON;
}



// Side navigation
function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "100%";
    x.style.fontSize = "40px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Tabs
function openCity(evt, cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var activebtn = document.getElementsByClassName("testbtn");
    for (i = 0; i < x.length; i++) {
        activebtn[i].className = activebtn[i].className.replace(" w3-dark-grey", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-dark-grey";
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

// Accordions
function myAccFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Slideshows
var slideIndex = 1;

function plusDivs(n) {
    slideIndex = slideIndex + n;
    showDivs(slideIndex);
}

function showDivs(n) {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

showDivs(1);

// Progress Bars
function move() {
    var elem = document.getElementById("myBar");
    var width = 5;
    var id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}