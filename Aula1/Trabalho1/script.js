

async function getCharacters() {
    let jsonChar = 'characters.json';
    try {
        let res = await fetch(jsonChar);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function setCharacters() {
    let characters = await getCharacters();
    debugger;
    var divElem = document.createElement("div"),
        imgElem = document.createElement("img"),
        h2Elem = document.createElement("h2"),
        pElem = document.createElement("p");

    imgElem.src = "img/dorio.png";
    h2Elem.textContent = "Dorio";
    pElem.textContent = "DorioP";
    divElem.appendChild(imgElem);
    divElem.appendChild(h2Elem);
    divElem.appendChild(pElem);
    divElem.className = "character";
    document.getElementById("containerId").appendChild(divElem)
}


setCharacters()