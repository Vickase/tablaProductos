import React, { useState } from "react";
import Tabla from "../Tabla/Tabla";
import listaProds from "../../data";
import Inputs from "../Inputs/Inputs";

import "./Listadeproductos.scss";
import Modal from "../Modal/Modal";

const ListaDeProductos = () => {
  const [lista, setLista] = useState(listaProds);
  const [id, setId] = useState("");
  const [tipo, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  const [showModal, setModal] = useState(false);
  const toggleModal = () => setModal(!showModal);

  return (
    <div className="contenedor-gral">
      <div className="contenedor-tabla">
        <Tabla
          dato={lista}
          eliminar={id => {
            console.log("se renderea cuando cliqueo");

            let idProducto = id;
            setLista(lista =>
              lista.filter(producto => producto.id !== idProducto)
            );
            console.log("Imprimo la lista", lista);
          }}
          toggleModal={toggleModal}
        ></Tabla>

        <Inputs
          setId={setId}
          setTipo={setTipo}
          setMarca={setMarca}
          setPrecio={setPrecio}
          agregar={e => {
            const objNuevo = { id, tipo, marca, precio };
            setLista([...lista, objNuevo]);
          }}
        ></Inputs>
      </div>
      <Modal showModal={showModal}></Modal>
      {/* <input value={id} onChange={e => setId(e.target.value)} />
      <input value={tipo} onChange={e => setTipo(e.target.value)} />
      <input value={marca} onChange={e => setMarca(e.target.value)} />
      <input value={precio} onChange={e => setPrecio(e.target.value)} /> */}
      {/* <button>
        AGREGAR
      </button> */}
    </div>
  );
};

export default ListaDeProductos;
