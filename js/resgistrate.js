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
pass2.addEventListener("input",()=>{
  if(pass.value===pass2.value){
    document.getElementById('correcto').classList.add('correcto2');
    document.getElementById('errado').classList.remove('errado2');
  }  else {
    document.getElementById('errado').classList.add('errado2');
    document.getElementById('correcto').classList.remove('correcto2');
  }
})