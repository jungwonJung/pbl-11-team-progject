import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  position: relative;
`;

const Sidebar = styled.div`
  position: absolute;
  width: 43px;
  height: 100%;
  top: 0;
`;

const LeftSidebar = styled(Sidebar)`
  left: 0;
`;

const RightSidebar = styled(Sidebar)`
  right: 0;
`;

const Title = styled.h1`
  font-family: "Itim", cursive;
  font-size: 68px;
  color: #0e0e0e;
  text-shadow: 6px 7px 4px rgba(255, 255, 255, 0.25);
  margin-bottom: 20px;
`;

const ScoreText = styled.p`
  font-family: "Itim", cursive;
  font-size: 90px;
  color: #fffcfc;
  margin-bottom: 40px;
`;

const RetryButton = styled.button`
  background: #736b92;
  border: 4px solid #000;
  font-size: 58px;
  font-weight: bold;
  color: white;
  padding: 20px 60px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #5d5474;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Results = ({
  score,
  totalQuestions,
  setResults,
}: {
  score: number;
  totalQuestions: number;
  setResults: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const navigate = useNavigate();

  return (
    <ResultsContainer>
      <LeftSidebar />
      <RightSidebar />
      <Title>Results</Title>
      <ScoreText>
        {score} / {totalQuestions}
      </ScoreText>
      <RetryButton
        onClick={() => {
          setResults([]);
          navigate("/");
        }}
      >
        Retry 🙂
      </RetryButton>
    </ResultsContainer>
  );
};

export default Results;
