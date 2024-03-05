

const Target= () =>{
    return(
    
      <div className="my-box">
        <form >

        <div>
      
      <label className="label-1">Set Target</label>
      <input type="text" className="box" id = "Tar1"  name="Target-Set"/>
      <button type="submit" className="inc-btn" id="btn">Reset</button>
      
     </div>
    
    <div className="saving">
   
      <p>Current Saving:0</p>
      <p >Target :0</p>
      <p><progress max={6000} value={0}></progress></p>

    </div>


        </form>
     
      
      </div>
    
    
    );
  
  }
  
  
  
  export default Target;