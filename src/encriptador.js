
const textArea = document.getElementById('textarea');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar')
const btnCopiar = document.getElementById('copiar');
const spnText = document.getElementById('alerta');
const lbSalida = document.getElementById('salida');
let valorTextarea = textArea.value;

btnEncriptar.disabled = true;
btnDesencriptar.disabled = true;
btnCopiar.disabled = true;
// funcion del textarea
textArea.addEventListener('input', function () {

    verificaBotones();
     spnText.innerText = 'No ingrese mayúsculas ni acentos';
    spnText.classList.remove('peligro');
    valorTextarea = textArea.value;
    // console.log(valorTextarea);
    // const tieneMayusculaOAccentuada = /(?![ñ])[A-Z\u00C0-\u00FF]/.test(valorTextarea);

    const tieneMayusculaOAccentuada = /(?![ñ])[A-Z!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~\u00C0-\u00FF]/.test(valorTextarea);


    if (tieneMayusculaOAccentuada) {
        // console.log(tieneMayusculaOAccentuada);
        // alert('tiene mayusculas o acentos');
        spnText.innerText = 'Escribiste mayúsculas o acentos';
        spnText.classList.add('peligro')

        btnEncriptar.disabled = true;
        btnDesencriptar.disabled = true;
        btnCopiar.disabled = true;
        return;
    }
});
// evento del boton encriptar
btnEncriptar.addEventListener('click', function () {

    lbSalida.innerText = textArea.value;
    encriptar(valorTextarea);


    verificaBotones();
    textArea.value = "";
})


btnDesencriptar.addEventListener('click', function () {

    // btnEncriptar.disabled = false;

    desencriptar(valorTextarea);
    // inicializa los datos de entrada del text area despues de hacer click al bton desencriptar
    // textArea.value = "";
    verificaBotones();
    textArea.value = "";

});

btnCopiar.addEventListener('click', function () {
    // console.log(`dentro de copiar ${lbSalida.value}`);
    navigator.clipboard.writeText(lbSalida.value).then(() => {
        // console.log('Content copied to clipboard');
        // alert(`Contenido copiado: ${lbSalida.innerText}`);
        showToast(`Texto Copiado !`, 1800);
        lbSalida.innerText = "";
    })
        .catch(() => {
            alert('contenido no copiado');
        });
})

const verificaBotones = () => {
    if (textArea.value.trim() === '') {

        btnEncriptar.disabled = true;
        btnDesencriptar.disabled = true;
        btnCopiar.disabled = true;
        lbSalida.innerText = ' No se observa ningún dato todavia...!';
        return;
    }

    if (textArea.value.trim() !== '') {

        btnEncriptar.disabled = false;
        btnDesencriptar.disabled = false;
        btnCopiar.disabled = false;

        return;
    }
}

const encriptar = (string) => {
    // console.log(`dentro de encriptar ${string}`);
    const encriptar = {
        a: 'ai',
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat',
  
    }
    let encriptado =  parse(string, encriptar);
    lbSalida.innerText = encriptado;

}
const desencriptar = (cadena) => {
    const desencriptar = {

        ai: 'a',
        enter: 'e',
        imes: 'i',
        ober: 'o',
        ufat: 'u'
    }
    
   let desencriptado = parse(cadena, desencriptar);
   lbSalida.innerText = desencriptado;

}
const parse = (string, matchConjunto) => {
    const regex = new RegExp(Object.keys(matchConjunto).join('|'), 'g');
    let textoEncriptado = string.replace(regex, match => matchConjunto[match]);

    return textoEncriptado;
}

function showToast(message, duration = 3000) {
    const toastContainer = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, duration);
  }
  