import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
