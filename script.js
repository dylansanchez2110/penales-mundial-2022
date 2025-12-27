let modo = 0;
let goles = 0;
let intentos = 0;

function iniciar() {
  goles = 0;
  intentos = 0;
  document.body.innerHTML += `
    <p>Modo: ${modo === 1 ? "Vs Máquina" : "2 Jugadores"}</p>
    <button onclick="patear()">⚽ Patear</button>
    <p id="resultado"></p>
  `;
}

function patear() {
  intentos++;
  const gol = Math.random() > 0.5;
  if (gol) goles++;

  document.getElementById("resultado").innerText =
    gol ? "⚽ ¡GOOOL!" : "🧤 Atajó el arquero";

  if (intentos >= 5) {
    alert(`Resultado final: ${goles} goles`);
  }
}
