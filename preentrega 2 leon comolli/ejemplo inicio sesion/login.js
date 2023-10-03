//*Ejemplo de inicio de sesion basico con funcion y getElementById 
//*usando tambien un evento */


function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="Juan" && pass=="1234")
    {
        window.location="bienvenido.html"
    }

    else
    {
        alert("Datos Erroneos")
    }
}