function PromptDemom() {
    //Ingresamos una pregunta
    var REGISTRAR = prompt("¿Ingresa el usuario que acabas de registrar?", "");
    //Verificamos si el usuario ingreso un valor
    if (REGISTRAR == REGISTRAR ){
        alert("Usuario no es correcto");
    }
    //Verificamos si el usuario NO ingreso un valor
    else 
    alert("El usuario" + REGISTRAR + " se verifico, se verifico, acepta e inicia sesión" );
    
    
}
function Olvido_Password() {
    //Ingresamos una pregunta
    var Usuario = prompt("Ingresa el usuario", "");
    var Usuario1 = prompt("Ingresa la nueva contraseña", "");
    //Verificamos si el usuario ingreso un valor
    if (Usuario != Usuario1 ){
        alert("La contraseña se cambio con exito");
    }
    //Verificamos si el usuario NO ingreso un valor
    else 
    alert("La contraseña no comple los parametros acceptados" ); 
}