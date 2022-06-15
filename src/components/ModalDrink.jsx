import React from 'react';
import { Modal, Image } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const ModalDrink = () => {
  const { handleModalClick, modal } = useDrinks();
  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Modal.Body>Cuerpo</Modal.Body>
    </Modal>
  );
};

export default ModalDrink;
