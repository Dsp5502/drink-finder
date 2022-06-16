import React from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const DrinkFavorite = ({ drink }) => {
  const { handleDrinkClick, handleModalClickFavorite } = useDrinks();
  const { strDrink, strDrinkThumb, idDrink } = drink;
  return (
    <Col
      md={12}
      className='d-flex gap-5 m-2
    align-items-center
    '
    >
      <Image width={100} src={strDrinkThumb} alt={`Image recipe ${strDrink}`} />
      <div>
        <p>{strDrink}</p>
        <Button
          variant='danger'
          size='sm'
          onClick={() => {
            // handleModalClickFavorite();

            handleDrinkClick(idDrink);
          }}
        >
          View Recipe
        </Button>
      </div>
    </Col>
  );
};

export default DrinkFavorite;
