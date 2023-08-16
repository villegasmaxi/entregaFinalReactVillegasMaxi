import React from "react";
import { Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Product = ({prod}) => {
//cons {id, category,  img, name, stock, price, description, img, } = prod;

  return (
      <Card className="m-1" style={{ width: "14rem" }}>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>
            {prod.description}
          </Card.Text>
          <Card.Text>
            $ {prod.price}
          </Card.Text>
          <Button as={Link} to={`/item/${prod.id}`} variant="primary">Ir a detalle</Button>
        </Card.Body>
      </Card>
  );
};

export default Product;
