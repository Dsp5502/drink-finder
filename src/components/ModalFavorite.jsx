import React from 'react';
import { Modal, Image, Row } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';
import DrinkFavorite from './DrinkFavorite';

const ModalFavorite = () => {
  const {
    handleModalClick,
    modal,
    recipe,
    loading,
    handleModalClickFavorite,
    modalFavorite,
    favoriteDrinks,
    setFavoriteDrinks,
  } = useDrinks();
  return (
    <Modal show={modalFavorite} onHide={handleModalClickFavorite}>
      <Modal.Header>
        <Modal.Title>Favorite Drinks</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row
          className='d-flex 
        justify-content-between
        '
        >
          {favoriteDrinks.map((drink) => (
            <DrinkFavorite key={drink.idDrink} drink={drink} />
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button
          className='btn btn-secondary'
          onClick={() => setFavoriteDrinks([])}
        >
          Clear favorites
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFavorite;
