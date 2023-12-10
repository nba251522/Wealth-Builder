import React, { useState } from 'react';
import { Table, Button, Form, Row, Col, Container, Card } from 'react-bootstrap';

const SavingsGoal = () => {
  const [savingsItems, setSavingsItems] = useState([]);
  const [newItemAmount, setNewItemAmount] = useState('');
  const [newItemSource, setNewItemSource] = useState('');
  const [totalSavings, setTotalSavings] = useState(0);

  const handleAddSavings = () => {
    if (newItemAmount.trim() !== '' && newItemSource.trim() !== '') {
      const amount = parseFloat(newItemAmount);
      setSavingsItems([...savingsItems, { amount, source: newItemSource }]);
      setTotalSavings(totalSavings + amount);
      setNewItemAmount('');
      setNewItemSource('');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h2>Savings Log</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Goal Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {savingsItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.source}</td>
                      <td>${item.amount.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="formSavingsSource">
                  <Form.Label>Enter What Savings is For:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter source"
                    value={newItemSource}
                    onChange={(e) => setNewItemSource(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formSavingsAmount">
                  <Form.Label>Enter Savings Goal Amount:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={newItemAmount}
                    onChange={(e) => setNewItemAmount(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleAddSavings}>
                  Goal Amount
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4>Goal Savings: ${totalSavings.toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SavingsGoal;
