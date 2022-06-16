import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import { useState } from 'react';
import useCategory from '../hooks/useCategory';
import useDrinks from '../hooks/useDrinks';

const FormComp = () => {
  const [find, setFind] = useState({
    name: '',
    category: '',
  });
  const [error, setError] = useState('');
  const { category } = useCategory();
  const { consultDrink, handleModalClickFavorite } = useDrinks();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(find).includes('')) {
      setError('Please fill out all fields');
      return;
    }
    setError('');
    consultDrink(find);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {error && (
        <Alert variant='danger' className='text-center'>
          {error}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='name'>Name Drink</Form.Label>
            <Form.Control
              id='name'
              type='text'
              placeholder='Ex: Tequila, Vodka'
              name='name'
              onChange={(e) =>
                setFind({ ...find, [e.target.name]: e.target.value })
              }
              value={find.name}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='category'>Category Drink</Form.Label>
            <Form.Select
              id='category'
              name='category'
              onChange={(e) =>
                setFind({ ...find, [e.target.name]: e.target.value })
              }
              value={find.category}
            >
              <option>- Select Category -</option>
              {category.map((item) => (
                <option key={item.strCategory} value={item.strCategory}>
                  {item.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className='justify-content-end'>
        <Col md={3}>
          <Button
            variant='warning'
            className='text-uppercase w-100'
            onClick={handleModalClickFavorite}
          >
            {' '}
            Favorite Drinks
          </Button>
        </Col>
        <Col md={3}>
          <Button
            variant='danger'
            className='text-uppercase w-100'
            type='submit'
          >
            {' '}
            Find Drinks
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComp;
