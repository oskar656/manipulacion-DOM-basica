const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const parrafito = document.querySelector(".parrafito");
// const pid = document.getElementById("pid");
const input1 = document.querySelector("#cálculo1");
const input2 = document.querySelector("#cálculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form");

// form.addEventListener("submit", sumarInputValues);

// function sumarInputValues (event) {
//     console.log({event});
//     event.preventDefault();
//     const concatImputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + concatImputs;
// }

btn.addEventListener("click", sumarInputValues);

function sumarInputValues (event) {
    const concatImputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + concatImputs;
}



// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = "Patito <br> Feo";
// h1.innerText = "Patito <br> Feo";
// // console.log(h1.getAttribute("class"));
// // h1.setAttribute = ("class", "rojo");

// h1.classList.add("rojo");
// h1.classList.remove("verde");
// // h1.classList.toggle("verde");
// // h1.classList.contains("verde");

// input.value = "456";

// const img = document.createElement("img");
// // console.log(document.createElement("span"));

// img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/d/d8/Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg");

// console.log(img);

// pid.innerHTML = "";

// pid.append(img);











