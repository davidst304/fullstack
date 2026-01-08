const App = () => {
  return (
    <div>

      <Hola />
      <br />
      <Fecha />
      <br />
      <Hello name= ""/>
      <br />
      <p>Cuadro drag and drop</p>
      <br />
      <Boton nombre = "TOTAL" />
      <br />
      <Amigos />
      <br />
      <Tabla />

    </div>
  )
}

// CREACIÓN DEL TITULO DE PRUEBA
const Hola = () => {
  return (
    <h1> TITULO DE PRUEBA</h1>
  )
}

// CREACIÓN DEL TITULO CON VARIABLES
const Fecha = () => {
  const fecha = new Date()
  console.log("fecha insertada")

  return (

    <h1>PRUEBA {fecha.toString()} </h1>

  )
}

// USAR PROPS
const Hello = (props) => {
  return (
    <div>

      <h2>HOLA {props.name}</h2>

    </div>
  )
}

const Boton = (rest) => {
  return (
    <button> ENVIAR {rest.nombre} </button>

  )
  console.log("boton insertado")
}

const Amigos = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
    { name: 'alfon', age: 50 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friends[2].name} {friends[2].age}</p>
    </div>
  )
}

const Tabla = () => {
  return (
    <table>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
      </tr>
      <tr>
        <td>Peter</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Maya</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Alfon</td>
        <td>50</td>
      </tr>
    </table>
  )
}

export default App
