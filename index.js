var cel = document.getElementById('cel')
var kel = document.getElementById('kel')

var wyn1 = document.getElementById('w1')
var wyn2 = document.getElementById('w2')

function stke()
{
    const a = parseInt(cel.value);

    console.log("Wynik: "+ a + 273 + "K");
}

function kest()
{
    const b = parseInt(kel.value);

    console.log("Wynik: "+ b - 273 + "&deg;C");
}

wyn1.addEventListener('click', stke);

wyn2.addEventListener('click', kest);