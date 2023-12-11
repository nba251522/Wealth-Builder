import React, { useState } from 'react';
import { Table, Button, Form, Row, Col, Container, Card } from 'react-bootstrap';

const Expense = () => {
  const [expenseItems, setExpenseItems] = useState([]);
  const [newItemAmount, setNewItemAmount] = useState('');
  const [newItemSource, setNewItemSource] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);

  const handleAddExpense = () => {
    if (newItemAmount.trim() !== '' && newItemSource.trim() !== '') {
      const amount = parseFloat(newItemAmount);
      setExpenseItems([...expenseItems, { amount, source: newItemSource }]);
      setTotalExpense(totalExpense + amount);
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
              <h2>Expense Log</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Source</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {expenseItems.map((item, index) => (
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
                <Form.Group controlId="formExpenseSource">
                  <Form.Label>Enter Expense Source:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter source"
                    value={newItemSource}
                    onChange={(e) => setNewItemSource(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formExpenseAmount">
                  <Form.Label>Enter Expense Amount:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={newItemAmount}
                    onChange={(e) => setNewItemAmount(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleAddExpense}>
                  Add Expense
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
              <h4>Total Expense: ${totalExpense.toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Expense;
