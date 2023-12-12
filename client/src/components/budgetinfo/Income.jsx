import React, { useState } from 'react';
import { Table, Button, Form, Row, Col, Container, Card } from 'react-bootstrap';

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
          <Card className="bg-secondary">
            <Card.Body>
              <h2>Income Log</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Source</th>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-secondary">
            <Card.Body>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-success">
            <Card.Body>
              <h4>Total Income: ${totalIncome.toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Income;
