/* ejemplo mini registro */ 

var bienvenidaClub = window.confirm("Bienvenido al club Pindulin! Empecemos con el registro!");

let nombreUsuario = prompt("¿Cómo te llamas?");
  alert("Bienvenido " + nombreUsuario + " al registro de socios del Club Pindulin");

  const edadDelUsuario = parseInt(prompt("Cual es tu edad?"));
  if(edadDelUsuario >= 18){
    alert("Usted cumple con la mayoria de edad! puede seguir con el registro")
  }else{
    alert("Los menores de edad no pueden ser socios!")
  }

  alert("Sigamos con el registro")

  let mailUsuario = prompt("A continuacion ingrese su mail")
   alert("Sus credenciales de registro son " + mailUsuario + " y su usuario " + nombreUsuario)