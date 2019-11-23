import React from 'react'
import './styles.css'
import LayoutAdmin from '../../components/AdminLayout'
import useFormSubmit from './customhooks'
import {useState} from 'react'

import {Col, Form, Button} from 'react-bootstrap'

export default function AdicionarOferta() {

  const [detailInput, setDetailInput] = useState();
  
  const [titulo, setTitulo] = useState()
  const [data, setData] = useState()
  const [preco, setPreco] = useState()
  const [details, setDetails] = useState([])
  const [foto, setFoto] = useState()

  const detailsHandler = (e) => {
   e.preventDefault();
   if(detailInput){
                    setDetails([...details, detailInput]);
                    setDetailInput("");
                    console.log(details);
                  }
  }

  const submitHandler = (e, callback) => {
    e.preventDefault();
    const oferta = {
      titulo: titulo,
      data: data, 
      preco: preco,
      foto: foto,
      detalhes: details
    }
    console.log(oferta)
  }

  return (
  <LayoutAdmin>
      <div className="adicionar-oferta-wrapper">
      <h1>Adicionar Oferta</h1>
        <Form id="form" onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Titulo da Oferta:</Form.Label>
            <Form.Control type="text" name="titulo" className="form-control" onChange={(e)=>{setTitulo(e.target.value)}} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data de Vencimento:</Form.Label>
            <Form.Control type="date" name="data" className="form-control" onChange={(e)=>{setData(e.target.value)}} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Preço da Oferta:</Form.Label>
            <Form.Control type="currency" value={preco} name="preco" className="form-control" onChange={(e)=>{setPreco(e.target.value)}}/>
          </Form.Group>
          
          <Form.Row>
            <Form.Group as={Col} controlId="details">
              <Form.Control 
                onChange={(e)=>{setDetailInput(e.target.value)}}                
                placeholder="Digite As Observações da Oferta"
                size="md"
                type="text"
                className="form-control"
              />
            </Form.Group>
            <Form.Group>
              <Button onClick={detailsHandler}>Adicionar</Button>
            </Form.Group>
          </Form.Row>          
          <Form.Group style={{border:"1px solid rgba(0,0,0,0.125)", borderRadius:".5rem"}}>
            <ul className="list-group list-group-flush">
              {details.map((detail, index)=>{
                return (
                <li key={index} className="list-group-item">{detail}</li>
                )
              })}
            </ul>
          </Form.Group>
          <Form.Group>
            <Form.Label>Escolha a foto de Destaque:</Form.Label>
            <Form.Control name="foto" value={foto} type="file" className="form-control" onChange={(e)=>{setFoto(e.target.value)}} />
          </Form.Group>
        <Button variant="btn-block btn-large btn-cvc" type="submit" >Cadastrar Oferta</Button>
        </Form>
      </div>
    </LayoutAdmin>
  );
}