import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #7C90DB;
  position: relative;
`;

const Title = styled.h1`
  font-family: "Itim", cursive;
  font-size: 6rem;
  text-shadow: 0px 4px 4px rgba(217, 172, 228, 0.85);
  color: black;
`;

const GuitarImage = styled.img`
  width: 40rem;
  height: auto;
  margin: 100px;
`;

const StartButton = styled.button`
  background: #736B92;
  border: 4px solid #000;
  font-size: 5rem;
  font-weight: bold;
  color: white;
  padding: 40px 100px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s;
  
  &:hover {
    background: #5d5474;
  }
`;

const Main = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Title>Guitar Chords Quiz</Title>
      <GuitarImage src="/main-guiar.png" alt="Guitar" />
      <StartButton onClick={() => navigate("/quiz")}>Start!!</StartButton>
    </MainContainer>
  );
};

export default Main;
