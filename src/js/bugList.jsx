import React from "react";
import { useAuth } from "../utils/authContext";

const BugList = () => {
  const { bugs } = useAuth();

  return (
    <div>
      <h2>Bug List</h2>
      <ul>
        {bugs?.length > 0 ? (
          bugs.map((bug, index) => <li key={index}>{bug}</li>)
        ) : (
          <p>No bugs reported yet.</p>
        )}
      </ul>
    </div>
  );
};

export default BugList;