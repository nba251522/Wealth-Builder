
import React, { useState } from 'react';
import { Table, Button, Form, Row, Col, Container } from 'react-bootstrap';

const Income = () => {
  const [incomeItems, setIncomeItems] = useState([]);
  const [newItemAmount, setNewItemAmount] = useState('');
  const [newItemSource, setNewItemSource] = useState('');
  const [totalIncome, setTotalIncome] = useState(0);

  const handleAddIncome = () => {
    if (newItemAmount.trim() !== '' && newItemSource.trim() !== '') {
      const amount = parseFloat(newItemAmount);
      setIncomeItems([...incomeItems, { amount, source: newItemSource }]);
      setTotalIncome(totalIncome + amount);
      setNewItemAmount('');
      setNewItemSource('');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Income Log</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>Source</th>
                <th>From</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {incomeItems.map((item, index) => (
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
             <Form.Group controlId="formIncomeSource">
              <Form.Label>Enter Income Source:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter source"
                value={newItemSource}
                onChange={(e) => setNewItemSource(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formIncomeAmount">
              <Form.Label>Enter Income Amount:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={newItemAmount}
                onChange={(e) => setNewItemAmount(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddIncome}>
              Add Income
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Total Income: ${totalIncome.toFixed(2)}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Income;
