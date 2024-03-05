import { FaRegMoneyBillAlt } from "react-icons/fa";
const Transfer =()=>{
return(



   <div className="transfer">
    <form action="action" className="my-transfer">

    <label className="balance">Current Balance : 0</label>
    <label className="balance-1">Transfer to Saving Account</label>
    <input type="number" className="box-transfer" />
    <button type="submit" className="transfer-btn">Transfer<FaRegMoneyBillAlt  className="put-Space"/>
</button>
</form>
    </div> 


    
    





);



}



export default Transfer;