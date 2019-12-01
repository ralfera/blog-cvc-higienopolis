import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap'
import firebase from '../../config/firebase'

export default function ModalComponent() {

  const db = firebase.firestore()
  const [show, setShow] = useState(false)
  const [id, setId] = useState()
  
  const handleShow = (e) => {
    e.persist()
    setShow(true)
    setId(e.target.parentElement.parentElement.id)
  }
  
  const handleClose = ()=>setShow(false)

  const handleSubmit = () => {
    db.collection('ofertas').doc(id).delete()
    setId('')
    setShow(false)
  }

  const ModalComponent = (props, e) => { return(
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação de Operação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Você tem certeza que deseja excluir a oferta selecionada?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>)
    }

  return {
    show,
    handleShow,
    handleClose,
    ModalComponent
  };
}