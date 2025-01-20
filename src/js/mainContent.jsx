import React from "react";
import { useAuth } from "../utils/authContext";
import Login from "./login";
import BugTracker from "./bugTracker";
import BugList from "./bugList";

const MainContent = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <Login />;
  }

  return (
    <div className="app-container">
      <h1>Welcome, {user.email}</h1>
      {user.role === "tester" && <BugTracker />}
      {user.role === "mp" && <BugList/>}
    </div>
  );
};

export default MainContent;
