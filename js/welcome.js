const mensaje = document.getElementById("mensaje");
const alerta = document.getElementById("alerta");
const btnEliminar = document.getElementById("botonEliminar");
const alertaNo= document.getElementById("alertaNoNombre");
window.addEventListener("load",function(event){

if (this.localStorage.getItem("Nombre")!=null) {
    mensaje.innerHTML=`¡Hola! ${this.localStorage.getItem("Nombre")} bienvenido/a de nuevo`
    alerta.style.display="block";
}//if nobre existe

else{
    alertaNo.insertAdjacentHTML("afterbegin", `
        <div class="alert alert-danger" role="alert">
         Por favor ve al index e ingresa tu nombre <a href="./index.html" class="alert-link">index</a>
        </div>
        `)

};
btnEliminar.addEventListener("click",function(event) {
    event.preventDefault();
    localStorage.removeItem("Nombre");
    location.href="welcome.html";
});



});//load