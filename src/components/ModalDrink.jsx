import React from 'react';
import { Modal, Image } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const ModalDrink = () => {
  const { handleModalClick, modal, recipe, loading, addFavorite } = useDrinks();
  const { strDrinkThumb, strDrink, strInstructions } = recipe;

  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={i}>
            {recipe[`strIngredient${i}`]} - {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };
  return (
    !loading && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image src={strDrinkThumb} alt={`Image recipe ${recipe.strDrink}`} />
        <Modal.Header>
          <Modal.Title>{strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3'>
            <h2>Instructions</h2>
            {strInstructions}
            <h2>Ingredients & Quantity</h2>
            {showIngredients()}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='btn btn-secondary'
            onClick={() => addFavorite(recipe)}
          >
            Add to favorites
          </button>
        </Modal.Footer>
      </Modal>
    )
  );
};

export default ModalDrink;
