function patear(direccion) {
  const pelota = document.getElementById("pelota");
  const arquero = document.getElementById("arquero");
  const resultado = document.getElementById("resultado");

  let destinoX = "50%";

  if (direccion === "izq") destinoX = "30%";
  if (direccion === "centro") destinoX = "50%";
  if (direccion === "der") destinoX = "70%";

  // Mover arquero al azar
  const ataja = Math.random() < 0.5;
  if (ataja) {
    arquero.style.left = destinoX;
    resultado.innerText = "🧤 ATAJÓ EL ARQUERO";
  } else {
    arquero.style.left = "50%";
    resultado.innerText = "⚽ GOOOL";
  }

  // Animación pelota
  pelota.style.transition = "1s";
  pelota.style.left = destinoX;
  pelota.style.bottom = "330px";

  setTimeout(() => {
    pelota.style.transition = "none";
    pelota.style.left = "50%";
    pelota.style.bottom = "30px";
  }, 1200);
}
