import loadCSS from './cssLoader.js';
import loadJS from './scriptLoader.js';

export default async function loadHTML(){
    let allElements = document.getElementsByTagName("*");
    // console.log("allElements", allElements);
    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i];
        let file = element.getAttribute("html-source");
        if (file) {
            const data = { method: 'GET' };
            await fetch(file, data).then((resp) => resp.text()).then((htmlString) => {
                // console.log("response", htmlString);
                // element.innerHTML = htmlString;
                let doc = new DOMParser().parseFromString(htmlString, 'text/html');
                element.append(...doc.body.childNodes);
                element.removeAttribute("html-source");
                let cssurl = file.replace("html", "css");
                loadCSS(cssurl);
                let jsurl = file.replace("html", "js");
                loadJS(jsurl);
            });
        }
    }
    return;
}