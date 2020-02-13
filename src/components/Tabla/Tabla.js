import React, { useState } from "react";
import Listadeproductos from "../Listadeproductos/Listadeproductos";
import "./Tabla.scss";


const Tabla = props => {

  return (
    <table className="tabla">
      <thead className="thead">
        <tr className="trhead">
          <th className="th">Id</th>
          <th className="th">Producto</th>
          <th className="th">Marca</th>
          <th className="th">Precio</th>
          <th className="th"></th>
        </tr>
      </thead>

      <tbody className="tbody">
        {props.dato.map(producto => {
          return (
            <tr className="tr">
              <td className="td">{producto.id}</td>
              <td className="td">{producto.tipo}</td>
              <td className="td">{producto.marca}</td>
              <td className="td">{producto.precio}</td>
              <td className="td">
                <button
                  className="boton"
                  id="delete-btn"
                  onClick={() => props.eliminar(producto.id)}
                >
                  Borrar
                </button>
                <button
                  className="boton"
                  id="modify-btn"
                  onClick={() => props.toggleModal()}
                >
                  Modificar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Tabla;
