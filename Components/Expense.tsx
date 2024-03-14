import React, { FormEvent, useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
type Expense = {
  //defines the types of the array - i can write it in lowercase

  Source: string;
  Amount: number;
  Date: string;
  Id: string;
};

type ExpensesType = {
  GetTotalOfExpenses: (amount: number) => void;
};

const Expense = (props: ExpensesType) => {
  const [expensrc, setExpensrc] = useState<string>("");
  const [expen, setExpen] = useState<number>(0);
  const [datex, setDatex] = useState<string>("");

  const [expenses, setExpenses] = useState<Expense[]>([]); //array
  const totalExpenses = expenses.reduce(
    (total, currentValue) => total + currentValue.Amount,
    0
  ); //return the total of expenses to App.tsx

  props.GetTotalOfExpenses(totalExpenses); //send it to App.tsx

  const handleSubmit2 = (event: FormEvent) => {
    event.preventDefault();
    const showExp = {
      Id: uuidv4(),
      Source: expensrc,
      Amount: expen,
      Date: datex,
    };

    //update the array-do not need to write return or {} in one line
    //

    setExpenses((preExpenses) => [...preExpenses, showExp]);
    toast.success("Expense Added");
    setExpensrc("");
    setExpen(0);
    setDatex("");
  };

  return (
    <div className="my-box">
      <form onSubmit={handleSubmit2}>
        <div className="form-filed">
          <label className="label">Expense source</label>
          <input
            type="text"
            className="box"
            placeholder="Electricity bill"
            name="expens-e"
            value={expensrc}
            onChange={(e) => setExpensrc(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="label"> Amount of Expense</label>
          <input
            type="number"
            className="box"
            name="exp-Num"
            value={expen}
            onChange={(e) => setExpen(parseInt(e.target.value))}
            required
          />
        </div>
        <div>
          <label className="label">Date of Expense</label>
          <input
            type="date"
            className="box"
            id="exp-date"
            name="exp-day"
            value={datex}
            onChange={(e) => setDatex(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="inc-btn" id="exp-btn">
          Add Expense
          <FaRegSquarePlus className="put-space" />
        </button>
      </form>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((showExp) => {
            return (
              <li key={showExp.Id}>
                {showExp.Source} : {showExp.Amount} SR on {showExp.Date}
              </li>
            );
          })
        ) : (
          <p className="light-paragraph">...No Expense yet...</p>
        )}
      </ul>
    </div>
  );
};

export default Expense;
