console.log("hello les friends");

const univers = document.querySelector("#id-univers");
const capitale = document.querySelector("#id-capitale");
const science = document.querySelector("#id-science");
const geometrie = document.querySelector("#id-geometrie");

async function sendMessage(message) {
  let objTheme = { theme: message };

  try {
    let reponse = await fetch("../src/getTheme.php", {
      method: "POST",
      body: JSON.stringify(objTheme),
      headers: { "Content-Type": "application/json" },
    });
    if (!reponse.ok) throw new Error("Une erreure c'est produite");
    let data = await reponse.json();
    if (data.status === "SEND_OK") window.location.href = "game.php";
    if (data.status === "SEND_ERR") console.log("il y a un problème");
  } catch (err) {
    console.log(`${err.message}`);
  }
}

let choixTheme;
if (univers) {
  univers.addEventListener("click", (event) => {
    if (event.currentTarget == univers) {
      console.log("choix univers");
      sendMessage("univers");
    }
  });
}
if (capitale) {
  capitale.addEventListener("click", (event) => {
    if (event.currentTarget == capitale) {
      console.log("choix capitale");
      sendMessage("capitale");
    }
  });
}
if (science) {
  science.addEventListener("click", (event) => {
    if (event.currentTarget == science) {
      console.log("choix science");
      sendMessage("science");
    }
  });
}
if (geometrie) {
  geometrie.addEventListener("click", (event) => {
    if (event.currentTarget == geometrie) {
      console.log("choix geometrie");
      sendMessage("geometrie");
    }
  });
}
