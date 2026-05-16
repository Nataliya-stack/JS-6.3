    const PALABRA = document.getElementById("palabra");
    const BTN = document.getElementById("btn");
    const RESPONDA = document.getElementById("responda");

function result() {
    let inputPalabra = PALABRA.value.trim();
    
    let check = inputPalabra.toLowerCase();
    let esBueno = false;

    if (check.length === 9 && check.startsWith('h')) {
        esBueno = true;
    } 
    else if (check.length === 5 && check.startsWith('p')) {
        esBueno = true;
    }
console.log(check, check.length)
    if (esBueno) {
        RESPONDA.style.color = "#6E1A37";
        RESPONDA.innerHTML = `La palabra "<strong>${inputPalabra}</strong>" es bonita! ✨`;
    } else {
        RESPONDA.style.color = "#30364F";
        RESPONDA.innerHTML = `La palabra "${inputPalabra}" es normal.`;
    }

    PALABRA.value = "";
    PALABRA.focus();  
}

