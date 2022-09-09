let cadena="hola como estas"

let caracter="o"
let contador=0
for (let i=0;i<cadena.length;i++){
  if(cadena.charAt(i)===caracter)
    contador++
}
console.log(contador)
