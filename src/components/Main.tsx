import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #7c90db;
  position: relative;
`;

const Title = styled.h1`
  font-family: "Itim", cursive;
  text-shadow: 0px 4px 4px rgba(217, 172, 228, 0.85);
  color: black;
`;

const GuitarImage = styled.img`
  width: 30rem;
  height: auto;
  margin: 100px;
`;

const StartButton = styled.button`
  background: #736b92;
  border: 4px solid #000;
  font-size: 2rem;
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
    <MainContainer className="p-4">
      <Title className="xs:text-3xl sm:text-3xl">Guitar Chords Quiz</Title>
      <GuitarImage
        src="/main-guiar.png"
        alt="Guitar"
        className="xs:w-[18rem] sm:w-[25rem]"
      />

      <StartButton
        onClick={() => navigate("/quiz")}
        className="xs:text-2xl xs:px-10 xs:py-6 sm:text-3xl sm:px-16 sm:py-8"
      >
        Start!!
      </StartButton>
    </MainContainer>
  );
};

export default Main;
