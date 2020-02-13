import React from "react";
import "./App.css";
import ListaDeProductos from "./components/Listadeproductos/Listadeproductos";
/* 
function App() {
  const [lista, setLista] = useState(Listadeproductos);
  const [id, setId] = useState("");
  const [nombre, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  return (
    //<Listadeproductos></Listadeproductos>
    <div className="contenedor">
      <Tabla dato={lista}></Tabla>
      <div className="input-container">
        <Inputs
          setId={setId}
          setTipo={setTipo}
          setMarca={setMarca}
          setPrecio={setPrecio}
        ></Inputs>
      </div>
      <span>{id}</span>
      <span>{nombre}</span>
      <span>{marca}</span>
      <span>{precio}</span>
    </div>
  );
} */

const App = () => {
  return (
    <ListaDeProductos />
  )
};

export default App;
