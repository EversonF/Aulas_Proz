const a = document.querySelector("a");
console.log(a);

document.addEventListener("keyup", (e) => {
  if (e.code == "Escape") {
    a.click();
  }
});
