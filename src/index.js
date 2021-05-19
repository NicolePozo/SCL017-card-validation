//import validator from './validator.js';
const comprar = document.getElementById("toBuy");
document.getElementById("page2").style.display = "none";


const pay = document.getElementById("btnPay");
document.getElementById("page2").style.display = "none";

comprar.addEventListener("click", () => {

  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
});

//console.log(validator);
