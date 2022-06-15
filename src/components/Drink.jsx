import { Card, Col, Button } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const Drink = ({ drink }) => {
  const { handleModalClick } = useDrinks();
  const { strDrink, strDrinkThumb } = drink;
  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink}`}
        />
      </Card>
      <Card.Body>
        <Card.Title>{strDrink}</Card.Title>
        <Button
          onClick={() => {
            handleModalClick();
          }}
          variant='warning'
          className='w-100 text-uppercase mt-2'
        >
          See Recipe
        </Button>
      </Card.Body>
    </Col>
  );
};

export default Drink;
