/**
 * Changes JSON to XML
 * @param {string} json json object
 * @param {boolean} initial only internal use not need to send it 
 */
export default function jsonToXml(json, initial = true) {
    let xmlString = '';
    if (initial) {
        xmlString = '<?xml version="1.0" encoding="UTF-8"?>';
    }
    // console.log("json", json);
    for (let prop in json) {
        // console.log("json -", json, "- prop -", prop, "- typeof -", typeof json[prop], "- value -", json[prop], "-");
        if (isNotValidPropText(json, prop)) continue;
        if (prop === "@attributes") continue;
        let propName = prop;
        // console.log("propName", propName);
        if (json[prop] instanceof Array) {
            // console.log("instanceof Array");
            for (let elem of json[prop]) {
                // console.log("typeof elem", typeof elem);
                // console.log("-- array elem", elem, prop, json);
                if (typeof elem === "string") {
                    let isElemValueRegexMatch = (/[^\n\t]+/.test(elem));
                    if (!isElemValueRegexMatch) continue;
                    xmlString += '' + elem + '';
                    // xmlString += '<' + propName + '>' + elem + '</' + propName + '>';
                } else if (typeof elem === "object") {
                    xmlString += processObject(propName, elem);
                }
            }
            // console.log("exit instance of array");
        } else if (typeof json[prop] == "object") {
            xmlString += processObject(propName, json[prop]);
        } else if (typeof json[prop] == "string") {
            // TODO: escapar comillas dobles, apostrofes y ampersand
            xmlString += '' + json[prop] + '';
            // xmlString += '<' + propName + '>' + json[prop] + '</' + propName + '>';
        }
    }
    // console.log("return xmlString");
    return xmlString;

    function isNotValidPropText(json, prop) {
        let isPropText = (prop === "#text");
        let isPropValueTypeofString = (typeof json[prop] === "string");
        let isPropValueRegexMatch = (/[^\n\t]+/.test(json[prop]));
        return (isPropText && isPropValueTypeofString && !isPropValueRegexMatch)
    }

    function processObject(propName, obj) {
        // console.log("typeof object");
        let xmlString = '';
        let count = Object.keys(obj).length;
        let elemHasAttributes = ("@attributes" in obj);
        let attrsString = processAttributes(obj);
        // console.log("pre log", propName, obj);
        // if(propName === "Item"){
        //     console.log("log", obj, count, elemHasAttributes, attrsString);
        // }

        if (count === 0 || (count === 1 && elemHasAttributes)) {
            xmlString += '<' + propName + attrsString + '/>';
        } else {
            xmlString += '<' + propName + attrsString + '>';
            xmlString += jsonToXml(obj, false);
            xmlString += '</' + propName + '>';
        }
        return xmlString;
    }

    function processAttributes(obj) {
        let attrsString = '';
        if (typeof obj === "object" && "@attributes" in obj) {
            for (let attr in obj["@attributes"]) {
                attrsString += ' ' + attr + '="' + obj["@attributes"][attr] + '"';
            }
        }
        return attrsString;
    }
}