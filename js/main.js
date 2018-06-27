
//Captura datos de API
let bipCards = null;


fetch("http://www.psep.cl/api/Bip.php?&numberBip=666")
.then(response => response.json())
.then(bipJSON => {
  bipCards = bipJSON
  console.log(bipCards);
  renderInfoBip(bipCards);
})
.catch(error => {
  console.error("tarjeta no existe");
  console.error("ERROR > " + error.stack);
});

//Input y select tarjetas usuario
const select = document.querySelector("select") // selector de tarjetas del usuario
const inputText = document.querySelector("input").value //input tarjetas del usuario
const btnInputText = document.getElementById("btnInputText") //btn del input

function isInputNumber(evnt) { //función para que input solo reciba numeros
  let letter = String.fromCharCode(evnt.which);
  if(!(/[0-9]/.test(letter))){
  }

}
//Capturar datos de imput

btnInputText.addEventListener("click", ()) => {
  if(inputText ===)
};

/*
renderInfoBip = (bipCards) => {
  if (bipCards) {
   
    for (const bipKey in bipCards) { //iterar en las llaves de la tarjeta bip
      if (object.hasOwnProperty(bipKey)) {
        const itemCard = bipCards[bipKey];
      }
    }

    }
    bipSelect.innerHtml = innerHtml



bipSelect.addEventListener(change, () ) => {
  let bipIndex = bipSelect.value; 


};
*/