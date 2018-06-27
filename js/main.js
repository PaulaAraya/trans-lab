const select = document.querySelector("BipCardSelection")
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
    let innerHtml = "";

    for (let i = 0; i < bipCards.length; i++) {
      let bip = bipCards[i];

      if (bip) {
        innerHtml += "<option value='" + i + "'>" + bipCards["N&ordm; tarjeta bip! "] + "</option>";
      }
    }
    bipSelect.innerHtml = innerHtml

inputText.addEventListener() => {

}

select.addEventListener(change, () )=>{

}
