

async function getCharacters() {
    let jsonChar = 'characters.json';
    try {
        let res = await fetch(jsonChar);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

function getRand(randArr) {
    while (randArr.length < 4) {
        var val = Math.floor(Math.random() * 12);
        if (randArr.includes(val.toString())) {
            getRand(randArr)
        }
        else{
            randArr.push(val.toString())
        }
    }
    debugger

    return randArr
}

async function setCharacters() {
    let characters = await getCharacters();
    var randArr = [],
        randval = getRand(randArr),
        divElem = document.createElement("div"),
        imgElem = document.createElement("img"),
        h2Elem = document.createElement("h2"),
        pElem = document.createElement("p");
        
    debugger;


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