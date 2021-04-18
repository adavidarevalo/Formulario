const form = document.getElementById("form")
const pass = document.getElementById("form_registrarse-password");
const passRepet = document.getElementById("form_registrarse-password2");

form.addEventListener("submit", e=>{
  if (pass.value===passRepet) {
    console.log ("Si")
  }
})