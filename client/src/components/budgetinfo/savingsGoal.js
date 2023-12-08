
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// add info, button and hook to savings 
const SavingsCard = ({ title, amount, description }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
      <Card.Text>
        <strong>Amount:</strong> {amount}
      </Card.Text>
    </Card>
  );
};

export default SavingsCard;
