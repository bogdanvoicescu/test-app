import React, { useState } from "react";

const BugTracker = () => {
  const [bugs, setBugs] = useState([]);
  const [bug, setBug] = useState("");

  const addBug = () => {
    setBugs([...bugs, bug]);
    setBug("");
  };

  return (
    <div>
      <h2>Bug Tracker</h2>
      <input
        type="text"
        value={bug}
        onChange={(e) => setBug(e.target.value)}
        placeholder="Describe the bug"
      />
      <button onClick={addBug}>Add Bug</button>
      <ul>
        {bugs.map((b, index) => (
          <li key={index}>{b}</li>
        ))}
      </ul>
    </div>
  );
};

export default BugTracker;