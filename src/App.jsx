import { useState } from "react";
import { calculateAge, formatSystemDate } from "./ageUtils.js";

export default function App() {
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setError("");
    setResult(null);

    if (dob === "") {
      setError("Date of Birth is required");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
      setError("Date of Birth cannot be in the future");
      return;
    }

    setResult({
      systemDate: formatSystemDate(today),
      ...calculateAge(birthDate, today),
    });
  };

  return (
    <div className="container">
      <h2>Age Calculator</h2>

      <label htmlFor="dob" className="dob-label">
        Date of Birth
      </label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />

      <button onClick={handleCalculate}>Calculate Age</button>

      <div className="error">{error}</div>

      <div className="result">
        {result && (
          <>
            System Date : {result.systemDate}
            <br />
            <br />
            Current Age : {result.years} Years, {result.months} Months,{" "}
            {result.days} Days
          </>
        )}
      </div>
    </div>
  );
}
