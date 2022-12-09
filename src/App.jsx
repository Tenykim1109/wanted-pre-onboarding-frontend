import { Routes, Route } from "react-router-dom";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Todolist from "./pages/Todolist";
import { Container } from "./components";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/todo" element={<Todolist />} />
      </Routes>
    </Container>
  );
}

export default App;
