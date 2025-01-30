import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useNavigate } from "react-router-dom";

const chordImages = [
  "A.png",
  "B7.png",
  "C.png",
  "Dm.png",
  "E7.png",
  "Em.png",
  "Em7.png",
  "F.png",
  "Fm.png",
  "G.png",
];

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  position: relative;
`;

const ChordImage = styled.img`
  margin: 20px 0;
  width: 300px;
  transform: rotate(90deg);
  object-fit: cover;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const AnswerButtons = styled.div`
  display: flex;
  gap: 200px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    gap: 0;
  }
`;

const Button = styled.button`
  background: #736B92;
  border: none;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  width: 100%;
  padding: 20px 100px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    background: #5d5474;
  }
  @media (max-width: 768px) {
    padding: 5px 50px;
    margin: 0 10px;
    width: 50%;
  }
`;

const QuizTitle = styled.h2`
  font-size: 48px;
  color: white;
  font-family: "Itim", cursive;
`;

const Quiz = ({
  setResults,
}: {
  setResults: React.Dispatch<
    React.SetStateAction<
      { question: string; answer: string; correct: boolean }[]
    >
  >;
}) => {
  const navigate = useNavigate();
  const [currentChord, setCurrentChord] = useState<string | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [quizNumber, setQuizNumber] = useState(1);

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    if (chordImages.length === 0) return;

    const randomChord =
      chordImages[Math.floor(Math.random() * chordImages.length)];
    const correctAnswer = randomChord.replace(".png", "");
    setCurrentChord(randomChord);

    let wrongAnswer = "";
    while (!wrongAnswer || wrongAnswer === correctAnswer) {
      wrongAnswer = chordImages[
        Math.floor(Math.random() * chordImages.length)
      ].replace(".png", "");
    }

    const shuffledOptions = [correctAnswer, wrongAnswer].sort(
      () => Math.random() - 0.5
    );
    setOptions(shuffledOptions);
  };

  const handleAnswer = (selected: string) => {
    if (!currentChord) return;

    const correctAnswer = currentChord.replace(".png", "");
    setResults((prevResults) => [
      ...prevResults,
      {
        question: currentChord,
        answer: selected,
        correct: selected === correctAnswer,
      },
    ]);

    if (quizNumber >= 10) {
      navigate("/results");
    } else {
      setQuizNumber(quizNumber + 1);
      generateQuestion();
    }
  };

  return (
    <QuizContainer className="p-4">
      <ProgressBar
        striped
        variant="danger"
        now={(quizNumber / 10) * 100}
        className="w-[80%] xs:w-[90%] sm:w-[85%] mb-6"
      />

      <QuizTitle className="xs:text-2xl sm:text-3xl">
        QUIZ {quizNumber}
      </QuizTitle>

      {currentChord && (
        <ChordImage
          src={`/${currentChord}`}
          alt="Chord"
          className="xs:h-[50px] "
        />
      )}

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
