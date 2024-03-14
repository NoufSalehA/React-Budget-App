import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
//Calculate the account balance:Done
type TransTypes = {
  onGetTrans: (transfer: number) => void;
  GetTotalOfIncomes: number;
  GetTheExpensesTotal: number;
  TheTargetvalue: number;
};
const Transfer = (props: TransTypes) => {
  const [transfer, setTransfer] = useState(0); //store

  const handelsubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onGetTrans(transfer);
    {
      /*passed to parent*/
    }
  };
  const currentBalanceValue: number =
    props.GetTotalOfIncomes -
    props.GetTheExpensesTotal -
    props.TheTargetvalue;
    console.log(currentBalanceValue)
  return (
    <div className="transfer">
      <form onSubmit={handelsubmit} action="action" className="my-transfer">
        <label className="balance">
          Current Balance :{" "}
          {currentBalanceValue}
        </label>
        <label className="balance-1">Transfer to Saving Account</label>
        <input
          type="number"
          className="box-transfer"
          onChange={(e) => setTransfer(parseInt(e.target.value))}
          value={transfer}
          required
        />
        <button type="submit" className="transfer-btn">
          Transfer
          <FaRegMoneyBillAlt className="put-space" />
        </button>
      </form>
    </div>
  );
};

export default Transfer;
