

import { FaRegSquarePlus } from "react-icons/fa6";

const Expense =()=> {
    return (
      <div className="my-Box">
      <div className="form-filed">
      <form action="survey"/>
    <label className="label">Expense source</label>
    <input type="text" className = "box" placeholder="Electricity bill" name="expens-e" />
          </div>
  
       <div>
  <form action="exp-amount"/>
    <label className="label"> Amount of Expense</label>
    <input type="text" className = "box"  name="exp-Num"/>
  
     </div>
  <div>
  <label className="label">Date of Expense</label>
    <input type="date" className="box" id = "exp-Date"  name="exp-day"/>
   
  
  </div>
  <button type="submit" className="inc-btn" id="exp-btn">Add Expense<FaRegSquarePlus className="put-Space"/> </button>
  </div>
    );
  }
  
  
  
  export default Expense