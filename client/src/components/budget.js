import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Debit from './budgetinfo/debt';
import Expense from './budgetinfo/expense';
import Income from './budgetinfo/income';
import Savings from './budgetinfo/savings';

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
    const handleDebitChange = (amount) => {
        setTotalDebit(amount);
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
                <Col>
                    <Debit onDebitChange={handleDebitChange} />
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
                            <Form.Group controlId="totalDebit">
                                <Form.Label>Total Debit:</Form.Label>
                                <Form.Control type="text" value={`$${totalDebit}`} readOnly />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Budget;
