import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const reset = function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      <Output bill={bill} tip1={percentage1} tip2={percentage2} />
      <Reset onReset={reset} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div className="bill-question">
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Enter bill value here"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="" disabled selected>
          Select tip amount
        </option>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">Meh (5%)</option>
        <option value="10">It was good! (10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip1, tip2 }) {
  const youTip = (bill * tip1) / 100;
  // const you = bill + youTip;
  const friendTip = (bill * tip2) / 100;
  // const friend = bill + friendTip;
  const total = bill + youTip + friendTip;
  return (
    <h3>
      You pay ${total} (${bill} + ${youTip + friendTip})
    </h3>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
