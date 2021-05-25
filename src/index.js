import validator from './validator.js';
const comprar = document.getElementById("toBuy");
document.getElementById("page2").style.display = "none";

document.getElementById("page2").style.display = "none";

comprar.addEventListener("click", () => {

  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";

  function maskify(creditCardNumber) {
    let arr = creditCardNumber.split('');
    let string = '';

    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 4) {
        string = string + '#';
      } else {
        string = string + arr[i];
      }
    }
    return string;
  }

  const validar = document.getElementById("validacion");
  validar.addEventListener("click", function (event) {
    event.preventDefault();
    const creditCardNumber = document.getElementById("nuTarjeta");
    if  (validator.isValid(creditCardNumber.value) ){
        const creditCardMask= validator.maskify(creditCardNumber.value)
        alert("Tu tarjeta" + creditCardMask + "es valida para realizar la compra" )
      }else{
        alert("tarjeta no valida") 
      }
      
  
      });
  });

 

//console.log(validator);
