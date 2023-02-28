const calculate = (H, S, Y) => {
  let X = ((H-S) /2 + S) * Math.PI / Y
  alert(X)
  setTimeout(getValues,20)
  }
  
  
  function getValues() {
    const H = prompt("Enter H as Number")
    const S = prompt("Enter S as Number")
    const Y = prompt("Enter Y as Number")

   calculate(+H, +S, +Y)
  }


  setTimeout(getValues,1000)