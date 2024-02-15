
const textArea = document.getElementById('textarea');
const btnEncriptar = document.getElementById('encriptar');
const divSalida = document.getElementById('salida');
const btnDesencriptar = document.getElementById('desencriptar')
const btCopiar = document.getElementById('copiar');

let valorTextarea = '';

btnEncriptar.disabled = true;
btnDesencriptar.disabled = true;

textArea.addEventListener('input', function () {

    verificaBotones();
    valorTextarea = textArea.value
    const tieneMayusculaOAccentuada = /[A-Z\u00C0-\u00FF]/.test(valorTextarea);

    if (tieneMayusculaOAccentuada) {
        console.log('éntro a mayusculas y acentos');
        alert('tiene mayusculas o acentos')
        textArea.value = "";
        return;
    } 
});

btnEncriptar.addEventListener('click', function () {

    encriptar(valorTextarea);
    divSalida.textContent = valorTextarea
    console.log(valorTextarea);
    // btnDesencriptar.disabled = false;
    textArea.value = "";
    verificaBotones();
    // btnEncriptar.disabled = true;
})


btnDesencriptar.addEventListener('click', function () {

    // btnEncriptar.disabled = false;
    const valorTextarea = textArea.value;

    desencriptar(valorTextarea);
    divSalida.textContent = valorTextarea
    console.log(valorTextarea);

    textArea.value = "";
    verificaBotones();

})

const verificaBotones = () => {
    if (textArea.value.trim() === '') {

        btnEncriptar.disabled = true;
        btnDesencriptar.disabled = true;
        
    }

    if (textArea.value.trim() !== '') {

        btnEncriptar.disabled = false;
        btnDesencriptar.disabled = false;
       
    }
}

const encriptar = (cadena) => {

}
const desencriptar = (cadena) => {

}