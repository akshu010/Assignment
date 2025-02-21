import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ChatPage from "chatpage/ChatPage";
import EmailPage from "emailpage/EmailPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/email">Email Page</Link>
            </li>
            <li>
              <Link to="/chat">Chat Page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
