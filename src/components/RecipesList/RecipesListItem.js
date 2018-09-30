import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col, Media, Row } from 'reactstrap';
import Avatar from '../UI/Avatar';
import BtnIcon from '../UI/BtnIcon';

import image from '../../assets/img/salad.jpg';

class RecipesListItem extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick() {
    const { item, onClick } = this.props;
    onClick(item.id);
  }

  handleEdit(event) {
    event.stopPropagation();

    const { item, onEdit } = this.props;
    onEdit(item.id);
  }

  handleDelete(event) {
    event.stopPropagation();

    const { item, onDelete } = this.props;
    onDelete(item.id);
  }

  render() {
    const { item } = this.props;

    return (
      <Card className="list-item shadow mb-2" onClick={this.handleClick}>
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
                onClick={this.handleEdit}
              />
              <BtnIcon
                className="m-1"
                color="light"
                textColor="dark"
                size="sm"
                icon={['far', 'trash-alt']}
                outline
                onClick={this.handleDelete}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

RecipesListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

RecipesListItem.defaultProps = {
  onClick: () => {},
  onEdit: () => {},
  onDelete: () => {},
};

export default RecipesListItem;
