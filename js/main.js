let bip = null;

fetch("http://www.psep.cl/api/Bip.php?&numberBip=666")
.then(response => response.json())
.then(bipJASON => {
  bip = bipJASON
  console.log(bip);
})
.catch()

