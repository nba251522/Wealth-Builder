import { createContext, useContext, useState } from "react";

// Create context for budget
const BudgetContext = createContext();
export const useBudgetContext = () => useContext(BudgetContext);

export const BudgetProvider = ({ children }) => {
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);
    const [totalDebit, setTotalDebit] = useState(0);
    
    // handling the change of state values for each component of Budget.jsx
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

    // Return initial state objects and functions to update state
    return (
        <BudgetContext.Provider value={{
            totalIncome,
            totalExpense,
            totalSavings,
            totalDebit,
            handleIncomeChange,
            handleExpenseChange,
            handleSavingsChange,
            handleDebitChange,
        }}>
            {children}
        </BudgetContext.Provider>
    );
};