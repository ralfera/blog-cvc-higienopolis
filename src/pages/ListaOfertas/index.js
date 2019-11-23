import React from 'react';
import LayoutAdmin from '../../components/AdminLayout';

import {Button, Table, Container, Row, Col} from 'react-bootstrap'

// import { Container } from './styles';

export default function ListaOfertas() {
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
            <tr>
              <td>1</td>
              <td>Cruzeiro MSC / Jamaica</td>
              <td>12.590,24</td>
              <td>12/12/2019</td>
              <td>Editar / Deletar</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Singapura All Inclusive</td>
              <td>7998.58</td>
              <td>01/01/2020</td>
              <td>Editar / Deletar</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Costão do Santinho All Inclusive</td>
              <td>1225.50</td>
              <td>02/02/2020</td>
              <td>Editar / Deletar</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </LayoutAdmin>
  );
}
