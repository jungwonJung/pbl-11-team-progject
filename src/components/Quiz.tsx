import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from "react-router-dom";

const chordImages = [
  "A.png", "B7.png", "C.png", "Dm.png",
  "E7.png", "Em.png", "Em7.png", "F.png",
  "Fm.png", "G.png"
];

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #9593D9;
  text-align: center;
  position: relative;
`;

const ChordImage = styled.img`
  height: 500px; 
  margin: 20px 0;
  transform: rotate(90deg); 
  object-fit: cover; 
`;

const AnswerButtons = styled.div`
  display: flex;
  gap: 300px;
  position: absolute;
  bottom: 20px; 
  left: 50%;
  transform: translateX(-50%);
`;

const Button = styled.button`
  background: #736B92;
  border: none;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  padding: 20px 100px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: #5d5474;
  }
`;

const QuizTitle = styled.h2`
  font-size: 48px;
  color: white;
  font-family: 'Itim', cursive;
`;

const Quiz = ({ setResults }: { setResults: React.Dispatch<React.SetStateAction<{ question: string; answer: string; correct: boolean }[]>> }) => {
  const navigate = useNavigate();
  const [currentChord, setCurrentChord] = useState<string | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [quizNumber, setQuizNumber] = useState(1);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    if (chordImages.length === 0) return;
  
    const randomChord = chordImages[Math.floor(Math.random() * chordImages.length)];
    const correctAnswer = randomChord.replace(".png", ""); 
    setCurrentChord(randomChord);
  
    let wrongAnswer = "";
    while (!wrongAnswer || wrongAnswer === correctAnswer) {
      wrongAnswer = chordImages[Math.floor(Math.random() * chordImages.length)].replace(".png", "");
    }
  
    const shuffledOptions = [correctAnswer, wrongAnswer].sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions);
  };
  
  const handleAnswer = (selected: string) => {
    if (!currentChord) return;
  
    const correctAnswer = currentChord.replace(".png", "");
    setResults((prevResults) => [
      ...prevResults,
      { question: currentChord, answer: selected, correct: selected === correctAnswer }
    ]);
  
    if (quizNumber >= 10) {
      navigate("/results");
    } else {
      setQuizNumber(quizNumber + 1);
      generateQuestion();
    }
  };

  return (
    <QuizContainer>
        <ProgressBar
        striped
        variant="danger"
        now={(quizNumber / 10) * 100}
        style={{ marginTop: "-190px", marginBottom: "30px", width: "80%" }}
      />
      <QuizTitle>QUIZ {quizNumber}</QuizTitle>
      {currentChord && <ChordImage src={`/${currentChord}`} alt="Chord" />}
      <AnswerButtons>
        {options.map((option) => (
          <Button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </Button>
        ))}
      </AnswerButtons>
    </QuizContainer>
  );
};

export default Quiz;