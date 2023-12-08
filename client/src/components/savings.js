
import React, { useState } from 'react';
import { Table, Button, Form, Row, Col, Container } from 'react-bootstrap';

const Savings = () => {
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
          <h2>Savings Log</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>Source</th>
                <th>From</th>
                <th>Amount</th>
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
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
             <Form.Group controlId="formSavingsSource">
              <Form.Label>Enter Savings Source:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter source"
                value={newItemSource}
                onChange={(e) => setNewItemSource(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formIncomeAmount">
              <Form.Label>Enter Savings Amount:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={newItemAmount}
                onChange={(e) => setNewItemAmount(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddSavings}>
              Add Savings
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Total Savings: ${totalSavings.toFixed(2)}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Savings;
