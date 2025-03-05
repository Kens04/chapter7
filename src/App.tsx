import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PostDetail } from "./posts/PostDetail";
import { Header } from "./Header";
import { Contact } from "./Contact";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;