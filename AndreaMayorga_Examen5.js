class Persona {
  constructor(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
  }
  
  getDetalles(){
    console.log("Nombre:",this.nombre)
    console.log("Apellido:",this.apellido)
    console.log("Edad:",this.edad)
  }
}

class Jugador extends Persona{
  constructor(nombre,apellido,edad,posicion){
    super(nombre,apellido,edad)
    this.posicion=posicion
  }
  
  getDetalles(){
    super.getDetalles()
    console.log("Posicion:",this.posicion)
  }
}

class Entrenador extends Persona{
  constructor(nombre,apellido,edad,experiencia,
              federacion=Math.floor(Math.random()*100000)){
    super(nombre,apellido,edad)
    this.experiencia=experiencia
    this.federacion=federacion
  }
  
  getDetalles(){
    super.getDetalles()
    console.log("Años de experiencia",this.experiencia)
    console.log("Id de federación",this.federacion)
  }
}

class Equipo {
  constructor(director,jugadores){
    this.director=director
    this.jugadores=jugadores
  }
  
  getDetalles(){
    this.director.getDetalles();
    for(let i=0;i<this.jugadores.length;i++)
      jugadores[i].getDetalles()
  }
  
}
jugador1=new Jugador("Mateo","Pita",25,"Portero")
jugador2=new Jugador("Diego","Muñoz",22,"Defensa")
jugador3=new Jugador("Jaime","Villafuerte",24,"Medio")
jugador4=new Jugador("Sebastian","Gabela",27,"Delantero")
jugadores=[jugador1,jugador2,jugador3,jugador4]

entrenador=new Entrenador("Leonardo","Ibarra",32,4)

equipo=new Equipo(entrenador,jugadores)

equipo.getDetalles()
