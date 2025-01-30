import  { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from "./styles/GlobalStyles";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Results from "./components/Results";


const App = () => {
  const [results, setResults] = useState<{ question: string; answer: string; correct: boolean }[]>([]);

  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz" element={<Quiz setResults={setResults} />} />
        <Route path="/results" element={<Results score={results.filter(r => r.correct).length} totalQuestions={results.length} setResults={setResults} />} />
      </Routes>
    </Router>
  );
};

export default App;