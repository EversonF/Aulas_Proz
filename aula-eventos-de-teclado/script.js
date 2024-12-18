const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

// linkPerfil.addEventListener("mouseover", ()=> {
//   navPerfil.style.display = "block"
// })
const meusDados = document.querySelector("#link-perfil-dados");

document.addEventListener("keyup", (evento) => {
  console.log(evento.key);
  console.log(evento.code);

  if (navPerfil.style.display == "block") {
    if (evento.code == "Digit1") {
      meusDados.click();
    }
  } else if (evento.code == "Digit1") {
    console.log("Voce apertou o Digit1");
    navPerfil.style.display = "block";
  }

  if (evento.code == "Escape") {
    navPerfil.style.display = "none";
  }
});
