import hola from './script.js';

const App = (hola) => {

  const course = 'Half Stack application development'

  const parts =[
  {
    part: 'Fundamentals of React',
    exercises: 10
  },
  {
    part: 'Using props to pass data',
    exercises: 7
  },
 {
    part: 'State of a component',
    exercises: 40
  }
]

class persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  greeting() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const david = new persona("David", 30);
david.greeting();

const almudena = new persona("Almudena", 25);
almudena.greeting();


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Boton />
    </div>
  )
};

const Header = (props) => {
  return (
    <h1>{props.course} </h1>
  )
};

const Content = (props) => {
  return (
    <div>
      <p> nombre = {props.parts[0].part} Volumen: {props.parts[0].exercises} </p>
      <p> nombre = {props.parts[1].part} Volumen: {props.parts[1].exercises} </p>
      <p> nombre = {props.parts[2].part} Volumen: {props.parts[2].exercises} </p>
    </div>
  )
};

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return (
    <p><strong>Total Ejercicios: {total} </strong></p>
  )
};

const Boton = () => {

  return (<button onClick={hola}>Click me</button>)
}

// PARTE DE JAVASCRIPT

// --------------------------------------------------------------------Asiganción de de una variable fija
hola();
const nombre = "David";
console.log("Nombre:", nombre);
let edad = 30;
console.log("Edad inicial:", edad);

edad = 31; // Reasignación de la variable
const tasa = 0.05; // Declaración de una constante

// -------------------------------------------------------------------------Creación de un array
const numeros = [1, 2, 3, 4, 5];
console.log("Números:", numeros);

numeros.push(6); // Agregar un elemento al array
console.log("Números después de push:", numeros);

console.log("-------------USANDO LA FUNCION FOREACH-------------"); // Acceder al primer elemento del array
numeros.forEach(i => {console.log("Numero impreso: ", i)}); // Iterar sobre el array

console.log("------------USANDO LA FUNCION MAP--------------");
const numerosMultiicado = numeros.map(i => i * 5);
numerosMultiicado.forEach(i => {console.log("Numero impreso: ", i)});
console.log("--------------------------");
// -------------------------------------------------------------------------Creación de un objeto
const persona = {
  nombre: "David",
  edad: 30
};

persona.apellido = "García"; // Agregar una nueva propiedad al objeto
persona.padre = "Juan"; // Agregar otra propiedad al objeto

console.log(persona.edad);
console.log("Persona:", persona);
// -------------------------------------------------------------------------Creación de funciones

const mult = (a, b) => {return a * b}
const divide = (a, b) => {return a / b}

console.log("Multiplicación:", mult(5, 4));
console.log("División:", divide(20, 4));

export default App