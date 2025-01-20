import React from "react";
import { AuthProvider } from "./utils/authContext";
import MainContent from "./js/mainContent";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
};

export default App;