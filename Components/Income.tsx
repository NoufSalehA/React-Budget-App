import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useState, FormEvent } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Expense from "./Expense";
type IncomeTypes = {
  //typescript to avoid errors
  Source: string;
  Amount: number;
  Date: string;
  Id: string;
};
type IncomePropsType = {
  onGetIncomesTotals: (amount: number) => void;
};

const Income = (props: IncomePropsType) => {
  const [source, setSource] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [incomes, setIncomes] = useState<IncomeTypes[]>([]); //to render all input in income page

  const totalAmount = incomes.reduce(
    (total, currentValue) => total + currentValue.Amount,
    0
  );

  //the total of incomes
  props.onGetIncomesTotals(totalAmount); //send it to App.tsx

  const handeleSubmit = (event: FormEvent) => {
    event.preventDefault(); //prevents form from submitting auto
    const income: IncomeTypes = {
      Id: uuidv4(),
      Source: source,
      Amount: amount,
      Date: date,
    };
    // from previncomes the old to the new 'income'
    setIncomes((prevIncomes) => [...prevIncomes, income]);

    toast.success("Income Added");

    //reset them
    setSource("");
    setAmount(0);
    setDate("");
  };
  const handelDelete = (incomeId: string) => {
    setIncomes((prevIncomes) =>
      prevIncomes.filter((Income) => Income.Id !== incomeId)
    );
    toast.error("Deleted");
  };

  return (
    <div className="my-box">
      <form onSubmit={handeleSubmit}>
        <div className="form-filed">
          <label className="label1">Income source</label>
          {/**providing a value attribute in input is two way communication- control components*/}
          <input
            type="text"
            className="box"
            placeholder="salary"
            name="source-Name"
            id="placeholder"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />{" "}
          {/*update every time i write in*/}
        </div>

        <div>
          <label className="label">Amount Of Income</label>
          <input
            type="number"
            className="box"
            name="amount-Num"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            required
          />
        </div>
        <div className="form-filed">
          <label className="label">Date of Income</label>
          <input
            type="date"
            className="box"
            id="date"
            name="dateDay"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          {/**handling the value*/}
        </div>
        <button type="submit" className="inc-btn">
          Add Income
          <FaRegSquarePlus className="put-space" />
        </button>
      </form>

      <ul>
        {/*render array on screen*/}
        {incomes.length > 0 ? (
          incomes.map((income) => {
            //i should not forget "()" in map
            return (
              <li key={income.Id}>
                {" "}
                {income.Source}:{income.Amount} SR on {income.Date}
                <button
                  className="delete-btn"
                  onClick={() => handelDelete(income.Id)}
                >
                  Delete
                </button>
              </li>
            );
          })
        ) : (
          <p className="light-paragraph">...No income yet...</p>
        )}{" "}
        {/**there will be many lists so i should identify them uniquely using key id */}
      </ul>
    </div>
  );
};

export default Income;
