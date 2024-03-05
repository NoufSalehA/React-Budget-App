
import React from "react";
import { FaRegSquarePlus } from "react-icons/fa6";

 const Income =() =>{
  return (
    <div className="my-box">
    <form>

    <div className="form-filed">

<label className="label-1">Income source</label>
<input type="number" className="box" placeholder="salary" name="source-Name" id="placeholder"/>
</div>

<div className="form-filed">
<form action="amount"/>
<label className="label">Amount Of Income</label>
<input type="number" className="box"  name="amount-Num"/>

</div>
<div className="form-filed">
<label className="label">Date of Income</label>
<input type="date" className="box"  id = "date"  name="dateDay"/>

</div>
<button type="submit" className="inc-btn">Add Income<FaRegSquarePlus className="put-Space"/></button>

    </form>
 



</div>



  );
  
}




export default Income