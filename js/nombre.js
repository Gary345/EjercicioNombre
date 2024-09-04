const btnGuardar = document.getElementById("botonGuardar");
const txtNombre =  document.getElementById("Nombre");
const alertValidacion = document.getElementById("alerta");

let isValid=true;

btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.style.border= "";
    isValid = true;
    alertValidacion.style.display="none";

    if (txtNombre.value.length < 3) {
        txtNombre.style.border = "solid red medium";
        alertValidacion.style.display="block";
        isValid = false;   
    }
    if (isValid) {
        localStorage.setItem("Nombre", txtNombre.value);
        

    }

});