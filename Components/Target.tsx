import React, { useState, FormEvent, ChangeEvent } from "react"; //have transfer value
import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
type TargetPropsType = {
  getCurrentBalance: () => number;
  sendToTarget: number;
};
const Target = (props: TargetPropsType) => {
  const [target, setTarget] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handelsubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    toast.success("Target Added");
  };
  const getCurrentSaving = props.getCurrentBalance();
  const percentage = ((props.sendToTarget / target) * 100).toFixed(0);

  return (
    <div className="my-box">
      <form onSubmit={handelsubmit}>
        <div>
          <label className="label-1">Set Target</label>
          <input
            type="number"
            className="box"
            id="Tar1"
            name="Target-Set"
            onChange={(e) => setTarget(parseInt(e.target.value))}
            value={target}
            placeholder="enter your target"
          />
          <button type="submit" className="inc-btn" id="btn">
            Reset
          </button>
        </div>

        <div className="saving">
          <p>Current Saving: {props.sendToTarget}</p>
          <p>Target :{submitted && target} </p>
          <p>
            <progress max={target} value={props.sendToTarget}></progress>
            <p>{percentage}%</p>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Target;
