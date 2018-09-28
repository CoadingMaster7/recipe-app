import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import RecipeForm from '../../components/RecipeForm';

const RecipeAddPage = () => (
  <Container className="py-5">
    <h1 className="text-center">Create New Recipe</h1>
    <Row className="justify-content-center">
      <Col md={10} lg={8}>
        <RecipeForm />
      </Col>
    </Row>
  </Container>
);

export default RecipeAddPage;
