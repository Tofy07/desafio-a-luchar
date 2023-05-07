// Datos de los jugadores
const  jugadorUno  =  {
  nombre : "Marce" ,
  habilidades : {
    ataque : 70 ,
    velocidad : 30 ,
    vida : 60 ,
    magia : 120 ,
  } ,
  articulos : [ "espada" ,  "escudo" ,  "varita" ] ,
} ;

const  jugadorDos  =  {
  nombre : "Flor" ,
  habilidades : {
    ataque : 73 ,
    velocidad : 30 ,
    vida : 80 ,
    magia : 100 ,
  } ,
  articulos : [ "escudo" ,  "varita" ,  "capa" ,  "pocion" ] ,
} ;

//Declarar las variables
var contadorPuntosJug1  =  0 ;
var contadorPuntosJug2  =  0 ;
var ganador;
//Condiciones
if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque){
  contadorPuntosJug1++; 
  }else if (jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque){ 
  contadorPuntosJug2++;
  }else if (jugadorUno.habilidades.ataque == jugadorDos.habilidades.ataque){
  contadorPuntosJug1++; 
  contadorPuntosJug2++;
  }

if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad){
contadorPuntosJug1++; 
}else if (jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad){ 
contadorPuntosJug2++;
}else if (jugadorUno.habilidades.velocidad == jugadorDos.habilidades.velocidad){
contadorPuntosJug1++; 
contadorPuntosJug2++;
}

if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida){
  contadorPuntosJug1++; 
  }else if (jugadorUno.habilidades.vida < jugadorDos.habilidades.vida){ 
  contadorPuntosJug2++;
  }else if (jugadorUno.habilidades.vida == jugadorDos.habilidades.vida){
  contadorPuntosJug1++; 
  contadorPuntosJug2++;
  }

if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia){
    contadorPuntosJug1++; 
    }else if (jugadorUno.habilidades.magia < jugadorDos.habilidades.magia){ 
    contadorPuntosJug2++;
    }else if (jugadorUno.habilidades.magia == jugadorDos.habilidades.magia){
    contadorPuntosJug1++; 
    contadorPuntosJug2++;
    }
  
if (jugadorUno.articulos.length > jugadorDos.articulos.length){
      contadorPuntosJug1++; 
      }else if (jugadorUno.articulos.length < jugadorDos.articulos.length){ 
      contadorPuntosJug2++;
      }else if (jugadorUno.articulos.length == jugadorDos.articulos.length){
      contadorPuntosJug1++; 
      contadorPuntosJug2++;
      }
// Definimos al ganador
ganador = contadorPuntosJug1 > contadorPuntosJug2 ? 
jugadorUno.nombre : jugadorDos.nombre ; 
const  resultado = {
  [jugadorUno.nombre] : contadorPuntosJug1,
  [jugadorDos.nombre] : contadorPuntosJug2,
  ganador : ganador,
};
console.log (resultado);
