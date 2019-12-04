import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import firebase from '../../config/firebase'

import OfertaDestaque from '../../components/OfertaDestaque'

import "./styles.css";

export default function Index() {
  
  const [isLoading, setIsLoading] = useState(false)
  const [listaOfertas, setListaOfertas] = useState({})
  const [ofertaDestaque, setOfertaDestaque] = useState({})
  let newlistaOfertas = []
  
  const db = firebase.firestore()
  const storage = firebase.storage()

  const ObjToArr = (obj)=>{
    const newArr = []
    Object.keys(obj).map((result)=>{
      newArr.push(obj[result])
    })
    return newArr
  }

  const FotoUrl = (foto) => {
    const ref = storage.ref('imagens').child(foto)
    return ref.getDownloadURL().then((url)=>{
      return url
    })
  }

  useEffect(() => {
    db.collection("ofertas").orderBy("data", "desc").get().then(async(resultado)=>{
     await resultado.docs.forEach(item => {
       if(item.data().destaque == true) {
       newlistaOfertas.push({
          ...item.data(),
          id:item.id,
          detalhes: ObjToArr(item.data().detalhes),
        })
      }});
      setListaOfertas(newlistaOfertas)
      setIsLoading(true)
    }) 
    }, []);

  /////////// LAYOUT
  return (
    <Container>
      {
      !isLoading ? 
        <div></div>
      :
      <OfertaDestaque id={listaOfertas[0].id} detalhes={listaOfertas[0].detalhes} foto={listaOfertas[0].foto} titulo={listaOfertas[0].titulo} preco={listaOfertas[0].preco}/>
      }
    </Container>
  )
}