import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Expense from './budgetinfo/Expense';
import Income from './budgetinfo/Income';
import Savings from './budgetinfo/Savings';
import SavingsGoal from './budgetinfo/SavingsGoal';


const Budget = () => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [netIncome, setNetIncome] = useState(0);

    useEffect(() => {
        setNetIncome(totalIncome - totalExpense);
    }, [totalIncome, totalExpense]);

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
        <Container className='budget'>
            <Row className="mt-3">
                <Col>
                    <Card className="bg-success">
                        <Card.Body>
                            <Card.Title className="mb-4">Budget Summary</Card.Title>
                            <Card.Body>
                                <h4>Total Net Income: ${netIncome.toFixed(2)}</h4>
                            </Card.Body>
                            <Card.Body>
                                <h4>Total Income: ${totalIncome.toFixed(2)}</h4>
                            </Card.Body>
                            <Card.Body>
                                <h4>Total Expense: ${totalExpense.toFixed(2)}</h4>
                            </Card.Body>
                            <Card.Body>
                                <h4>Total Savings: ${totalSavings.toFixed(2)}</h4>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
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
        </Container>
    );
};

export default Budget;
