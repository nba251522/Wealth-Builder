import React, { useState } from 'react';
import { Table, Button, Form, Row, Col, Container, Card } from 'react-bootstrap';

const Debit = () => {
  const [debitItems, setDebitItems] = useState([]);
  const [newItemAmount, setNewItemAmount] = useState('');
  const [newItemSource, setNewItemSource] = useState('');
  const [totalDebit, setTotalDebit] = useState(0);

  const handleAddDebit = () => {
    if (newItemAmount.trim() !== '' && newItemSource.trim() !== '') {
      const amount = parseFloat(newItemAmount);
      const newDebitItem = { id: Date.now(), amount, source: newItemSource };
      setDebitItems([...debitItems, newDebitItem]);
      setTotalDebit(totalDebit + amount);
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
              <h2>Debit Log</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Source</th>
                    <th>From</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {debitItems.map((item, index) => (
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
                <Form.Group controlId="formDebitSource">
                  <Form.Label>Enter Debit Source:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter source"
                    value={newItemSource}
                    onChange={(e) => setNewItemSource(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formDebitAmount">
                  <Form.Label>Enter Debit Amount:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter amount"
                    value={newItemAmount}
                    onChange={(e) => setNewItemAmount(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleAddDebit}>
                  Add Debit
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
              <h4>Total Debit: ${totalDebit.toFixed(2)}</h4>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Debit;
