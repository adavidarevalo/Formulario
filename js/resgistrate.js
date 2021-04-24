const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const name = document.getElementById("form_name");
const pass = document.getElementById("form_registrarse-password");
const pass2 = document.getElementById("form_registrarse-password2");
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^.{4,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ 
};
const validar = (e) =>{
  switch(e.target.name){
    case "name":  
      if(expresiones.usuario.test(e.target.value)){
        document.getElementById("falseName").innerHTML="";
        document.getElementById("circle").classList.add("displayBlock");
        document.getElementById("times").classList.remove("displayBlock");
      } else{
        document.getElementById("falseName").innerHTML="Nombre Incorrecto";
        document.getElementById("times").classList.add("displayBlock");
        document.getElementById("circle").classList.remove("displayBlock");
      }
    break;
    case "mail":  
      if(expresiones.correo.test(e.target.value)){
        document.getElementById("falseMail").classList.remove("displayBlock");
      } else {
        document.getElementById("falseMail").classList.add("displayBlock");
      }
    break;
    case "pass1":  
      console.log("pass1")
    break;
    case "pass2":  
      console.log("pass2")
    break;
  }
}
inputs.forEach((input)=>{
  input.addEventListener("keyup", validar)
  input.addEventListener("blur", validar)
})
form.addEventListener("submit",(e)=>{
  e.preventDefault();
})
pass2.addEventListener("keyup",()=>{
  if(pass.value===pass2.value){
    document.getElementById('correcto').classList.add('correcto2');
    document.getElementById('errado').classList.remove('errado2');
  } else {
    document.getElementById('errado').classList.add('errado2');
    document.getElementById('correcto').classList.remove('correcto2');
  }
})