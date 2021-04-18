const email = document.getElementById("form_mail")
const pass = document.getElementById("form_password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
form.addEventListener("submit", e=>{
  e.preventDefault()
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  console.log(regexEmail.test(email.value))
  if (regexEmail.test(email.value)) {
  }
})