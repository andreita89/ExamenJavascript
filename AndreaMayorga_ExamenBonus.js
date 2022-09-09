let entrada="www.techacademy.com"
let salida=""
for(let i=0;i<entrada.length;i++){
  if(entrada[i]===".")
    break;
  salida=salida.substring(0,i)+entrada[i].toUpperCase()+entrada.substring(i+1,entrada.length)
}
console.log(salida)
