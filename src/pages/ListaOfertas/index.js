import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import LayoutAdmin from "../../components/AdminLayout";
import firebase from "../../config/firebase";

import {Table } from "react-bootstrap";
import ModalFile from '../../components/Modal'



export default function ListaOfertas() {
  
  const useOfertas = () => {
    const db = firebase.firestore();
    const [tabela, setTabela] = useState([]);
  
    const formatData = data => {
      const newData = data.toDate();
      let dia = newData.getDate();
      let mes = newData.getMonth() + 1;
      let ano = newData.getFullYear();
  
      return dia + "/" + mes + "/" + ano;
    };
  
    useEffect(() => {
      db.collection("ofertas")
        .orderBy("data", "desc")
        .onSnapshot(snapshot => {
          const newArr = snapshot.docs.map(doc => ({
            id: doc.id,
            titulo: doc.data().titulo,
            preco: doc.data().preco,
            data: formatData(doc.data().data)
          }));
          setTabela(newArr);
        });
    }, [ListaOfertas]);
    return tabela;
  };

  const items = useOfertas();
  const {
    show,
    handleShow,
    handleClose,
    ModalComponent
  } = ModalFile()

  return (
    <LayoutAdmin>
      <h1>Lista de Ofertas</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Titulo</th>
              <th>Preço</th>
              <th>Data Validade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} id={item.id}>
                <td>1</td>
                <td>{item.titulo}</td>
                <td>{item.preco}</td>
                <td>{item.data}</td>
                <td>
                  <Link to={"/editar/"+item.id} >Editar</Link> / <Link onClick={handleShow}>Deletar</Link>
                </td>
              </tr>
            ))}
            {
              <ModalComponent/>
            }
          </tbody>
        </Table>
      </div>
    </LayoutAdmin>
  );
}
