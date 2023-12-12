import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Expense from './budgetinfo/Expense';
import Income from './budgetinfo/Income';
import Savings from './budgetinfo/Savings';

const Budget = () => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [totalDebit, setTotalDebit] = useState(0);

    const handleIncomeChange = (amount) => {
        setTotalIncome(amount);
    };

    const handleExpenseChange = (amount) => {
        setTotalExpense(amount);
    };
    const handleSavingsChange = (amount) => {
        setTotalSavings(amount);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Income onIncomeChange={handleIncomeChange} />
                </Col>
                <Col>
                    <Expense onExpenseChange={handleExpenseChange} />
                </Col>
                <Col>
                    <Savings onSavingsChange={handleSavingsChange} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-4">Budget Summary</Card.Title>
                            <Form.Group controlId="totalIncome">
                                <Form.Label>Total Income:</Form.Label>
                                <Form.Control type="text" value={`$${totalIncome}`} readOnly />
                            </Form.Group>
                            <Form.Group controlId="totalExpense">
                                <Form.Label>Total Expense:</Form.Label>
                                <Form.Control type="text" value={`$${totalExpense}`} readOnly />
                            </Form.Group>
                            <Form.Group controlId="totalSavings">
                                <Form.Label>Total Savings:</Form.Label>
                                <Form.Control type="text" value={`$${totalSavings}`} readOnly />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Budget;
