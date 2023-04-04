import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const rollAnimation = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(720deg) rotateY(720deg) rotateZ(720deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
`;

const Die = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: #61dafb;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  animation: ${rollAnimation} ${({ rolling }) => (rolling ? '1s' : '0s')} linear;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4ec5f7;
  }
`;

function App() {
  const [rollResult, setRollResult] = useState(1);
  const [rolling, setRolling] = useState(false);

  const rollDie = () => {
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
      setRollResult(Math.floor(Math.random() * 20) + 1);
    }, 1000);
  };

  return (
    <Container>
      <Die rolling={rolling}>{rollResult}</Die>
      <Button onClick={rollDie}>Roll</Button>
    </Container>
  );
}

export default App;
