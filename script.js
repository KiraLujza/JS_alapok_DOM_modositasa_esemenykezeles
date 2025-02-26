window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekElerese5();
  elemekElerese6();
});

function elemekElerese1() {
  const elem = document.querySelectorAll("section h2")[0];
  let tartalom = elem.innerHTML;
  console.log(tartalom);
}
function elemekElerese2() {
  const elem = document.getElementById("ide");
  elem.innerHTML = "<p>Jó reggelt!</p>";
}

function elemekElerese3() {
  const elem = document.getElementsByClassName("ide")[0];

  elem.innerHTML = "<p>Jó reggelt!</p>";
}

function elemekElerese4() {
  

  let lista = [];
  let szoveg = "<ul>";
  for (let i = 0; i < 5; i++) {
    let szam = Math.random() * 21 + 10;
    let egesz = Math.floor(szam);
    lista.push(egesz);
  }

  for (let i = 0; i < lista.length; i++) {
    szoveg += `<li> ${lista[i]} </li>`;
  }
  console.log(szoveg);
  szoveg += "</ul>";
  const elem = document.getElementsByClassName("lista")[0];
 

  elem.innerHTML = szoveg;
}

function elemekElerese5(){

    const elem = document.getElementsByClassName("lista")[0];
    elem.classList.add("formazott");

}

function elemekElerese6(){

    const elem = document.getElementsByClassName("lista")[0];
    elem.addEventListener("click", valami)

}
function valami(){
    const elem = document.getElementsByClassName("lista")[0];
    const kattos = document.querySelectorAll(".kattintasutan")[0];
    kattos.appendChild(elem);
    
}