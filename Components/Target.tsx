import React, { useState, FormEvent } from "react"; //have transfer value

const Target = (props: { sendToTarget: number }) => {
  console.log(props.sendToTarget);

  const [target, setTarget] = useState(0);
  const handelsubmit3 = (event: FormEvent) => {
    event.preventDefault();
    const shows = { target };
    const currentSaving = () => {};
  };

  return (
    <div className="my-box">
      <form onSubmit={handelsubmit3}>
        <div>
          <label className="label-1">Set Target</label>
          <input
            type="number"
            className="box"
            id="Tar1"
            name="Target-Set"
            onChange={(e) => setTarget(parseInt(e.target.value))}
            placeholder="enter your target"
          />
          <button type="submit" className="inc-btn" id="btn">
            Reset
          </button>
        </div>

        <div className="saving">
          <p>Current Saving: {props.sendToTarget}</p>
          <p>Target :{target}</p>
          <p>
            <progress max={6000} value={0}></progress>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Target;
