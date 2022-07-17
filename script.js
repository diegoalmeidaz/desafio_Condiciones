// Parte 1: Agregar Borde a imagen //



let image = document.querySelector(".burger");



function cambioBorde() {
    if (image.style.border != "2px solid red") {
        image.style.border = "2px solid red";
    }
    else {
        image.style.border = null;
        
    }
  
}


let clickImg = document.querySelector(".burger")
clickImg.addEventListener("click", cambioBorde);



// Parte 2: Stickers
const checkeoTotal = document.querySelector('.checkeo')

function calcular() {
    let var1 = document.querySelector('#sticker_1').value;
    let var2 = document.querySelector('#sticker_2').value;
    let var3 = document.querySelector('#sticker_3').value;
    let var4 = document.querySelector('#sticker_4').value;
    let total = +var1 + +var2 + +var3 + +var4;

    if (total <= 10) {
        document.querySelector('#resultadoSticker').textContent = "Llevas " + total;
    } else {
        document.querySelector('#resultadoSticker').textContent = "Te pasaste, tienes que llevar menos stickers"
    }
}
checkeoTotal.addEventListener("click" , calcular);


// Parte 3: password

const botonChequeo = document.querySelector('.verificarPassword');

function calcularPassword () {
   let selector1 = document.querySelector('#primero');
   let selector2 = document.querySelector('#segundo')
   let selector3 = document.querySelector('#tercero')
   if (selector1.value == 9 && selector2.value == 1 && selector3.value == 1) {
    document.querySelector('#respuesta').textContent = "Password 1 Correcto"
   } else if (selector1.value == 7 && selector2.value == 1 && selector3.value == 4) {
    document.querySelector('#respuesta').textContent = "Password 2 Correcto"
   } else {
    document.querySelector('#respuesta').textContent = "Password Incorrecto"
   }

  
}

botonChequeo.addEventListener("click", calcularPassword);

