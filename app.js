const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const warning = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  warning.innerHTML = "";

  if (!regexEmail.test(email.value)) {
    entrar = true;
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Faltan credenciales",
      showConfirmButton: true,
      timer: 1500,
    });
  }
  if (entrar) {
    warning.innerHTML = warnings;
  }
  if ((email.value = "Pruebafront@coex.com") && pass.value == "BigMind") {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Ingreso satisfactorio",
      showConfirmButton: true,
      timer: 1500,
    });
    window.location.replace("page.html");
    //console.log(email.value);
    var formData = new FormData(form);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  } else if (entrar == false) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Credenciales inválidas",
      showConfirmButton: true,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Faltan credenciales",
      showConfirmButton: true,
      timer: 1500,
    });
  }
  console.log(email.value, pass.value);
});


