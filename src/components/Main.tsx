import React from 'react';
import styled from 'styled-components';
import main from 'assets/main.jpeg';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  letter-spacing: 4px;
`;

const Box = styled.div`
  border: 1px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  font-size: 28px;
  padding: 16px;
  margin: 40px;
  width: 36px;
  text-align: center;
  font-style: italic;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;

  span.slash {
    height: 1px;
    width: 18px;
    margin: 16px auto;
    background: ${(props) => props.theme.colors.text};
    transform: rotate(-45deg);
    padding: 0;
  }
`;

const MainImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${main});
  background-size: cover;
  background-blend-mode: multiply;
  background-color: ${(props) => props.theme.colors.background};
  filter: blur(0.3px);
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  line-height: 1.8;
  letter-spacing: 0.5px;
  margin-top: 40px;
`;

function Main() {
  return (
    <div className='Main'>
      <Header>
        <Title>장진영</Title>
        <Box>
          <span>03</span>
          <span className='slash'></span>
          <span>05</span>
        </Box>
        <Title>김동환</Title>
      </Header>
      <MainImage />
      <Description>
        2022. 3. 5 토요일 오후 1시 40분
        <br />
        더뉴컨벤션웨딩홀
      </Description>
    </div>
  );
}

export default Main;
