import React, { useState } from "react";
import "./App.css";
import Income from "../Components/Income";
import Expense from "../Components/Expense";
import Target from "../Components/Target";
import Transfer from "../Components/Transfer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Budget = () => {
  //App have transfer

  const [sendTarget, setSendtarget] = useState<number>(0);
  const [totalincomeAmount, setTotalIncomeAmount] = useState<number>(0); //pass to another component
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [currentBalanceValue, setCurrentBalanceValue] = useState<number>(0);
  const transToSaving = (transfer: number) => {
    //child to parent transfer value from transfer.tsx
    setSendtarget(transfer); //to be updated-update the state
    //App have target value
  };
  //render on screen=using useState
  const getIncomesTotals = (amount: number) => {
    //App have Total of Incomes

    setTotalIncomeAmount(amount);
  };
  const getExpenseAmount = (amount: number) => {
    //App have total of Expenses

    setTotalExpenses(amount);
  };

  const getBalance = totalincomeAmount - totalExpenses - sendTarget;
  const getBalanceForSaving = totalincomeAmount - totalExpenses + sendTarget;

  return (
    <div className="container">
      <Income onGetIncomesTotals={getIncomesTotals} />
      <Expense GetTotalOfExpenses={getExpenseAmount} />
      <Target
        getCurrentBalance1={getBalanceForSaving}
        onGetTrans={transToSaving}
      />{" "}
      <Transfer
        onGetTrans={transToSaving}
        GetTotalOfIncomes={totalincomeAmount}
        GetTheExpensesTotal={totalExpenses}
        TheTargetvalue={sendTarget}
        getCurrentBalance={getBalance}
      />
      {/*pass it to transfer.tsx*/}
      <ToastContainer />
    </div>
  );
};
export default Budget;
