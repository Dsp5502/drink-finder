import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';

const CarrouselImg = () => {
  const [imgCarrousel, setImgCarrousel] = useState({});

  useEffect(() => {
    const getImgCarrousel = async () => {
      try {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        const { data } = await axios(url);
        setImgCarrousel(data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getImgCarrousel();
  }, []);

  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      if (imgCarrousel[`strIngredient${i}`]) {
        ingredients.push(
          <Col
            xs={6}
            key={i}
            className='my-2 
          justify-content-center
          align-items-center
          d-flex
          flex-column
          '
          >
            <img
              className='w-50'
              src={`https://www.thecocktaildb.com/images/ingredients/${
                imgCarrousel[`strIngredient${i}`]
              }-Small.png`}
              alt='ingredient img'
            />
            {imgCarrousel[`strMeasure${i}`]}
          </Col>
        );
      }
    }
    return ingredients;
  };

  return (
    <Card
      className='my-2
    w-75 mx-auto
    bg-danger
    text-white
    text-start
    '
    >
      <Card.Header>
        <h1>{imgCarrousel.strDrink}</h1>
      </Card.Header>
      <Row>
        <Col md={6}>
          <Card.Img
            src={imgCarrousel.strDrinkThumb}
            alt={imgCarrousel.strDrink}
            className='img-fluid'
          />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              Ingredients
            </Card.Title>

            <Row className='mb-5 '>{showIngredients()}</Row>

            <Card.Title
              style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              Instructions
            </Card.Title>
            <Card.Text>{imgCarrousel.strInstructions}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CarrouselImg;
