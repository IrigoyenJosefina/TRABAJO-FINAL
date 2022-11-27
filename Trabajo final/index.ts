"use strict";
/*ELEMENTOS CAPTURADOS*/
const enteraUno = document.getElementById(`EnteraUno`);
const enteraDos = document.getElementById(`EnteraDos`);
const enteraTres = document.getElementById(`EnteraTres`); 
const enteraCuatro = document.getElementById(`EnteraCuatro`);
const enteraCinco = document.getElementById(`EnteraCinco`);
const enteraSeis = document.getElementById(`EnteraSeis`);

function comprarEntera(){
  console.log("Usted compro una entera"); 
}

enteraUno?.addEventListener("click", comprarEntera);
enteraDos?.addEventListener("click", comprarEntera);
enteraTres?.addEventListener("click", comprarEntera);
enteraCuatro?.addEventListener("click", comprarEntera);
enteraCinco?.addEventListener("click", comprarEntera);
enteraSeis?.addEventListener("click", comprarEntera); 

const corpiñoUno = document.getElementById(`CorpiñoUno`);
const corpiñoDos = document.getElementById(`CorpiñoDos`);
const corpiñoTres = document.getElementById(`CorpiñoTres`);
const corpiñoCuatro = document.getElementById(`CorpiñoCuatro`);
const corpiñoCinco = document.getElementById(`CorpiñoCinco`);
const corpiñoSeis = document.getElementById(`CorpiñoSeis`);

function comprarCorpiño(){
  console.log("Usted compro un corpiño");
}

corpiñoUno?.addEventListener("click", comprarCorpiño);
corpiñoDos?.addEventListener("click", comprarCorpiño);
corpiñoTres?.addEventListener("click", comprarCorpiño);
corpiñoCuatro?.addEventListener("click", comprarCorpiño);
corpiñoCinco?.addEventListener("click", comprarCorpiño);
corpiñoSeis?.addEventListener("click", comprarCorpiño); 


const bombachaUno = document.getElementById(`BombachaUno`);
const bombachaDos = document.getElementById(`BombachaDos`);
const bombachaTres = document.getElementById(`BombachaTres`);
const bombachaCuatro = document.getElementById(`BombachaCuatro`);
const bombachaCinco = document.getElementById(`BombachaCinco`);
const bombachaSeis = document.getElementById(`BombachaSeis`); 

function comprarBombacha(){
  console.log("Usted compro una bombacha"); 
}

bombachaUno?.addEventListener("click", comprarBombacha);
bombachaDos?.addEventListener("click", comprarBombacha);
bombachaTres?.addEventListener("click", comprarBombacha); 
bombachaCuatro?.addEventListener("click", comprarBombacha); 
bombachaCinco?.addEventListener("click", comprarBombacha); 
bombachaSeis?.addEventListener("click", comprarBombacha); 

const bikiniUno = document.getElementById(`BikiniUno`);
const bikiniDos = document.getElementById(`BikiniDos`); 
const bikiniTres = document.getElementById(`BikiniTres`); 
const bikiniCuatro = document.getElementById(`BikiniCuatro`);
const bikiniCinco = document.getElementById(`BikiniCinco`);
const bikiniSeis = document.getElementById(`BikiniSeis`); 

function comprarBikini(){
  console.log("Usted compro una bikini");
}

bikiniUno?.addEventListener("click", comprarBikini);
bikiniDos?.addEventListener("click", comprarBikini);
bikiniTres?.addEventListener("click", comprarBikini); 
bikiniCuatro?.addEventListener("click", comprarBikini); 
bikiniCinco?.addEventListener("click", comprarBikini); 
bikiniSeis?.addEventListener("click", comprarBikini); 

const ofertaUno = document.getElementById(`OfertaUno`);
const ofertaDos = document.getElementById(`OfertaDos`); 
const ofertaTres = document.getElementById(`OfertaTres`); 
const ofertaCuatro = document.getElementById(`OfertaCuatro`); 
const ofertaCinco = document.getElementById(`OfertaCinco`); 
const ofertaSeis = document.getElementById(`OfertaSeis`); 
const ofertaSiete = document.getElementById(`OfertaSiete`); 
const ofertaOcho = document.getElementById(`OfertaOcho`); 
const ofertaNueve = document.getElementById(`OfertaNueve`); 

function comprarOfertaBikini(){
  console.log("Usted compro una bikini en oferta");
}

ofertaUno?.addEventListener("click", comprarOfertaBikini); 
ofertaDos?.addEventListener("click", comprarOfertaBikini); 
ofertaTres?.addEventListener("click", comprarOfertaBikini);
ofertaCuatro?.addEventListener("click", comprarOfertaBikini); 
ofertaCinco?.addEventListener("click", comprarOfertaBikini); 
ofertaSeis?.addEventListener("click", comprarOfertaBikini); 
ofertaSiete?.addEventListener("click", comprarOfertaBikini); 
ofertaOcho?.addEventListener("click", comprarOfertaBikini);
ofertaNueve?.addEventListener("click", comprarOfertaBikini); 






/*VENTANA FLOTANTE*/
const btnSuscripcion = document.getElementById(`btnRegistrar`);
const ventanaFlotante = document.getElementById(`ventanaFlot`);

btnSuscripcion?.addEventListener("click",mostrarVentana);

function mostrarVentana(){
  ventanaFlotante?.classList.remove("ocultar");
}

const btnCierreVentana = document.getElementById(`cerrar`);

btnCierreVentana?.addEventListener("click", ocultarVentana);

function ocultarVentana(){
  ventanaFlotante?.classList.add("ocultar");
}

/*VALIDACION DE LA VENTANA FLOTANTE*/
const inputCorreo = document.getElementById(`inputEmail`) as HTMLInputElement;
const inputClave = document.getElementById(`inputContraseña`)as HTMLInputElement;
const botonRegistrar = document.getElementById(`botonRegistrar`);
const form = document.getElementById(`form`);

form?.addEventListener("submit", e=>{
  e.preventDefault()
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  let entrar = false
  if(!regexEmail.test(inputCorreo.value)){
    console.log("el Email no es valido");
    entrar = true
  }
  if(inputClave.value.length < 8){
    console.log("la contraseña no es valida");
    entrar = true
  }else{
    console.log("usted fue registrad@");
  }
  
})



/*BOTON VER MAS/VER MENOS*/
const btnVerMas = document.getElementById(`btnVerMas`) as HTMLButtonElement;
const contenidoOculto = document.getElementById(`contenedorOculto`);

function mostrarContenido(){
  if(contenidoOculto?.classList.contains("verMas")){
    contenidoOculto.classList.remove("verMas");
    btnVerMas.innerHTML = "Ver Menos";
  } else{
    contenidoOculto?.classList.add("verMas");
    btnVerMas.innerHTML = "Ver Mas"
  }
}

btnVerMas.addEventListener("click", mostrarContenido);

