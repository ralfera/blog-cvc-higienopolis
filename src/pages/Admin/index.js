import React, {useEffect} from 'react';
import LayoutAdmin from '../../components/AdminLayout'
import {Container, Row, Col} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import firebase from '../../config/firebase'

export default function Admin(props) {

  const db = firebase.firestore()
  let ObjetoOferta = []
  let ofertasnumero

  useEffect(()=>{
    db.collection("ofertas").onSnapshot((query) => {
      ofertasnumero = query.docs.length
      query.docs.map((items)=>{
        const item = items.data()
        console.log(item)
        // ObjetoOferta.push({
        //   ...ObjetoOferta,
        //   item
        // })
        
      })
    })
  },[Admin])

  console.log(ofertasnumero, ObjetoOferta)


  // const totalOfertas = JSON.parse(localStorage.getItem("lista") || "[]");
  
  // let numeroDestaque = []
  // const teste = totalOfertas.map((item)=>{
  //   if(item.destaque===true){
  //     numeroDestaque.push(...numeroDestaque, item)
  //   }
  //   console.log(numeroDestaque)
  // })


  return (
    <LayoutAdmin>
      <Container>
        <Row><h1>Painel de Cadastro de Ofertas</h1></Row>
        <Row>
          <Col>
            <div className="header-admin">
              {/* <p>Você possui um total de {totalOfertas.length} ofertas cadastradas</p> */}
              
            </div>
          </Col>
        </Row>
      </Container>
    </LayoutAdmin>
  );
}
