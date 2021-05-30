import validator from './validator.js';
const comprar = document.getElementById("toBuy");
document.getElementById("page2").style.display = "none";

comprar.addEventListener("click", () => {

  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";

  const validar = document.getElementById("validacion");
  validar.addEventListener("click", function (event) {
    event.preventDefault();
    const creditCardNumber = document.getElementById("nuTarjeta");
    if  (validator.isValid(creditCardNumber.value) ){
        const creditCardMask= validator.maskify(creditCardNumber.value)
        alert("Tu tarjeta" + creditCardMask + "es valida para realizar la compra" )
      }else{
        alert("Tarjeta no valida") 
      }
      
  
      });
  });

 

//console.log(validator);
