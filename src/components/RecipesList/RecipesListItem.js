import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Media, Row } from 'reactstrap';
import Avatar from '../UI/Avatar';
import BtnIcon from '../UI/BtnIcon';

import image from '../../assets/img/salad.jpg';

const RecipesListItem = ({ item, onClick }) => (
  <Card className="list-item shadow mb-2" onClick={onClick}>
    <CardBody>
      <Row className="align-items-center justify-content-between">
        <Col xs={9}>
          <Media className="align-items-center">
            <Avatar className="mr-3" src={image} alt="recipe image" />
            <Media body>
              <h5 className="mb-0">{item.title}</h5>
            </Media>
          </Media>
        </Col>
        <Col xs={3} className="text-right">
          <BtnIcon
            className="m-1"
            color="light"
            textColor="dark"
            size="sm"
            icon={['far', 'edit']}
            outline
          />
          <BtnIcon
            className="m-1"
            color="light"
            textColor="dark"
            size="sm"
            icon={['far', 'trash-alt']}
            outline
          />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

RecipesListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

RecipesListItem.defaultProps = {
  onClick: () => {},
};

export default RecipesListItem;
