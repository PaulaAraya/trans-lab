const bipSelectp = document.querySelector("BipCardSelection")
const inputText = document.querySelector("input")
let bipCards = null;


fetch("http://www.psep.cl/api/Bip.php?&numberBip=666")//Solicitud de la data de las tarjetas
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

renderInfoBip = (bipCards) => {
  if (bipCards) {
   
    for (const bipKey in bipCards) { //iterar en las llaves de la tarjeta bip
      if (object.hasOwnProperty(bipKey)) {
        const itemCard = bipCards[bipKey];
        
      }
    }

    }
    bipSelect.innerHtml = innerHtml

 inputText.addEventListener(,) => {

}

bipSelect.addEventListener(change, () ) => {
  let bipIndex = bipSelect.value; 


}

