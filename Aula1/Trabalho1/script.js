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

    return randArr
}

async function createCharacters(randval) {
    let characters = await getCharacters();
    var divElem = document.createElement('div'),
        aElem = document.createElement('a'),
        imgElem = document.createElement('img'),
        h2Elem = document.createElement('h2'),
        pElem = document.createElement('p');
    
    imgElem.src = characters[randval].img;
    imgElem.id = randval;
    imgElem.onclick = function(){zoomImg(randval)};
    h2Elem.textContent = characters[randval].h2;
    pElem.textContent = characters[randval].p;
    aElem.href = characters[randval].url;
    
    aElem.appendChild(h2Elem);
    divElem.appendChild(imgElem);
    divElem.appendChild(aElem);
    divElem.appendChild(pElem);
    divElem.className = 'character';
    document.getElementById('containerId').appendChild(divElem);

}

function zoomImg(imgVal){
    var divDim = document.createElement('div'),
        divCont = document.createElement('div')
        imgZoom = document.createElement('img');
    
    divDim.id = "dimScreen";
    imgZoom.id = "imgOverlay";
    imgZoom.src = document.getElementById(imgVal).src;
    imgZoom.onclick = removeScreen;
    divCont.appendChild(imgZoom);
    divCont.appendChild(divDim);
    divCont.className = "overlay";
    document.body.prepend(divCont);
}

function removeScreen(){
    document.getElementsByClassName("overlay")[0].remove()
}

function setCharacters() {
    var randArr = [],
        randval = getRand(randArr);

    for (let index = 0; index < randval.length; index++) {
        createCharacters(randval[index]);
        
    }
}

function myFunction() {
    var horario = new Date().getHours(),
        saudacao = "";
    if (horario > 18) {
        saudacao = "Boa noite, Professor. "
    } else if (horario > 12) {
        saudacao = 'Boa tarde, Professor. ';
    } else if (horario > 7) {
        saudacao = 'Bom dia, Professor. ';
    } else {
        saudacao = 'Boa madrugada, Professor. ';
    }
    alert(
        `${saudacao}Quando a gente fizer o trabalho colocando um back-end eu implemento um sistema de busca. Até lá, Fica só essa mensagem de alerta mesmo`
    );
}


setCharacters()