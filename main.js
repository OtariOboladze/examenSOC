document.getElementById("submit").addEventListener("click", display_input);

function checkbox() {
    let x = "";
    for (let i = 1; i < 5; i++) {
        if (document.getElementById(i).checked == true) {
            x += i + " ";
        }
    }
    return (x);
}

function display_input() {
    //utilizaremos regex para comprobar el tipo de input
    var any_number = /\d/;
    var only_numbers = /^[0-9]+$/;
    document.getElementById("texto").style.backgroundColor = "white";
    document.getElementById("numeros").style.backgroundColor = "white";
    if (document.getElementById("texto").value.match(any_number)) {
        document.getElementById("texto").style.backgroundColor = "yellow";
        alert("formato de texto no es correcto, se admite solo las letras");
    } else if (!(document.getElementById("numeros").value.match(only_numbers))) {
        document.getElementById("numeros").style.backgroundColor = "yellow";
        alert("formato de numeros no es correcto, se admite solo los numeros")
    } else {
        document.getElementById("caja_amarillo_inner_text").innerText = document.getElementById("texto").value + " / " + document.getElementById("numeros").value + " / " + checkbox();
    }
}





