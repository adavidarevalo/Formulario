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
};
const info = {
  name: false,
  mail: false,
  pass1: false,
  pass2: false
}
const validar = (e) =>{
  switch(e.target.name){
    case "name":  
      if(e.target.value===""){
        document.getElementById("times").classList.remove("displayBlock");
        document.getElementById("circle").classList.remove("displayBlock");
        document.getElementById("falseName").innerHTML="";
        info.name= false
      } else if(expresiones.nombre.test(e.target.value)){
        document.getElementById("falseName").innerHTML="";
        document.getElementById("circle").classList.add("displayBlock");
        document.getElementById("times").classList.remove("displayBlock");
        info.name= true
      } else{
        document.getElementById("falseName").innerHTML="Nombre Incorrecto";
        document.getElementById("times").classList.add("displayBlock");
        document.getElementById("circle").classList.remove("displayBlock");
        info.name= false
      }
    break;
    case "mail":  
      if(e.target.value===""){
        document.getElementById("falseMail").classList.remove("displayBlock");
        info.mail = false
      } else if(expresiones.correo.test(e.target.value)){
        document.getElementById("falseMail").classList.remove("displayBlock");
        ("displayBlock");
        info.mail = true
      } else {
        document.getElementById("falseMail").classList.add("displayBlock");
        info.mail = false
      }
    break;
    case "pass1":  
      if(e.target.value===""){
        document.getElementById("falsePass").classList.remove("displayBlock");
        info.pass1 = false
      } else if(expresiones.password.test(e.target.value)){
        document.getElementById("falsePass").classList.remove("displayBlock");
        info.pass1 = true
      } else {
        document.getElementById("falsePass").classList.add("displayBlock");
        info.pass1 = false
      }
    break;
    case "pass2":  
      if(e.target.value===""){
        document.getElementById('errado').classList.remove('errado2');
        document.getElementById('correcto').classList.remove('correcto2');
        document.getElementById('diferentPass').classList.remove("displayBlock");
        info.pass2 = false
      } else {
        pass2.addEventListener("keyup",()=>{
          if(pass.value===pass2.value){
             document.getElementById('correcto').classList.add('correcto2');
             document.getElementById('errado').classList.remove('errado2');
             document.getElementById('diferentPass').classList.remove("displayBlock");
             info.pass2 = true
           } else {
             document.getElementById('errado').classList.add('errado2');
            document.getElementById('correcto').classList.remove('correcto2');
            document.getElementById('diferentPass').classList.add("displayBlock");
            info.pass2 = false
  }
})
      }
  }
}
inputs.forEach((input)=>{
  input.addEventListener("keyup", validar)
  input.addEventListener("blur", validar)
})
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const terminos = document.getElementById("terminos");
  if(info.name && info.mail && info.pass1 && info.pass2 && terminos.checked){
    form.reset()
    document.getElementById("warnings").innerHTML="Formulario Enviado"
    setTimeout(() => {
      document.getElementById("warnings").innerHTML=""
    }, 3000);
    document.getElementById("circle").classList.remove("displayBlock");
    document.getElementById('correcto').classList.remove('correcto2');
  } else {
    document.getElementById("warnings").innerHTML="Falta rellenar campos"
  }
})
