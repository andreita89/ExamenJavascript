for (let i=0;i<5;i++){
  const numeroAleatorio=Math.floor(Math.random()*100)
  if(numeroAleatorio%2===0)
  	console.log("El número generado ",numeroAleatorio,"es par")
  else
    console.log("El número generado ",numeroAleatorio,"es impar")
}
