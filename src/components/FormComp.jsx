import { Button, Form, Row, Col } from 'react-bootstrap';
import React from 'react';
import useCategory from '../hooks/useCategory';

const FormComp = () => {
  const { category } = useCategory();
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='name'>Name Drink</Form.Label>
            <Form.Control
              id='name'
              type='text'
              placeholder='Ex: Tequila, Vodka'
              name='name'
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='category'>Category Drink</Form.Label>
            <Form.Select id='category' name='category'>
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
      <Button></Button>
    </Form>
  );
};

export default FormComp;
