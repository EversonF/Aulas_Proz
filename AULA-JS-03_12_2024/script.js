// CAPTURAR ELEMENTOS PELO ID
const logo = document.getElementById("logo");
console.log(logo);

// CAPTURA ELEMENTO PELA CLASSE
const post = document.getElementsByClassName("post");
console.log(post);

// CAPTURA ELEMENTO POST 02
// const post02 = document.getElementById("post02");
// console.log(post02);

// CAPTURA ELEMENTO FORMULARIO
const formulario = document.getElementById("formulario");
console.log(formulario);

// CAPTURA ELEMENTO POSTS
const posts = document.getElementById("posts");
console.log(posts);

// CAPTURA ELEMENTO DATA
const post_data = document.getElementsByClassName("post-data");
console.log(post_data);

// CAPTURA ELEMENTO TEXTO
const post_texto = document.getElementsByClassName("post-texto");
console.log(post_texto);

// CAPTURA ELEMENTO LISTA REDES
const lista_redes = document.getElementsByClassName("lista_redes");
console.log(lista_redes);

// CAPTURANDO USANDO QUARY SELECTOR
const h2 = document.querySelector("h2");
console.log(h2);

const post1 = document.querySelector(".post");
console.log(post1);

const autor = document.querySelectorAll(".post-autor");
console.log(autor[1]);

const post02 = document.querySelector("#post02");
console.log(post02);

const post02_text = document.querySelector("#post");

// CAPTURANDO LINK DENTRO DO TEXTO
const link = document.querySelector("#post01 .post-texto a");
console.log(link);

//CAPTURANDO PALAVRA EM NEGRITO POST 02
const strong = document.querySelector("#post02 .post-texto strong");
console.log(strong);

// TRABALHO EM GRUPO 03/12/2024: Everson Ferreira, Jessica, Andreia, Jose Fernando, Wesley Nascimento
