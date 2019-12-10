import React, {useState} from 'react';
import ReactDOM from 'react-dom'


import {Card, Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import firebase from '../../config/firebase'
import OfertaDestaque from '../../components/OfertaDestaque'
import {useDispatch} from 'react-redux'
import store from '../../store/index'

import './styles.css'

export default function CardOferta(props) {

  store.subscribe(()=>{
    console.log("atualizou o estado", store.getState().Oferta)
  })
  
  const dispatch = useDispatch()

  const storage = firebase.storage()
  const [imgSidebar, setImgSideBar] = useState()

  const fotourl = () => {
    storage.ref('imagens').child(props.foto).getDownloadURL().then(url=>{
      setImgSideBar(url)
    })
  }
  fotourl()
  const renderizar = ()=>{
    ReactDOM.render(
      <OfertaDestaque id={props.id} detalhes={props.detalhes} foto={props.foto} titulo={props.titulo} preco={props.preco} />
      , document.getElementById('main-content'))
    dispatch({type:"OPEN_SIDEBAR", show: false})
    dispatch({type: "", })
  }

  return (
    <Card style={{marginBottom:"5px" }}>
      <Card.Img variant="top" src={imgSidebar} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          R$ {props.preco}
        </Card.Text>
        <footer className="card-oferta-footer">
        <Link to="#" className="btn btn-large btn-cvc btn-block" onClick={renderizar}>Saiba Mais</Link>
        </footer>
      </Card.Body>
    </Card>
  );
}
