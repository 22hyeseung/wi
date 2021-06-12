import React from 'react';
import styled from 'styled-components';
import icon from 'assets/rose.png';

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 40px auto;
`;

const Icon = styled.span`
  display: block;
  background: url(${icon}) no-repeat;
  background-size: cover;
  width: 28px;
  height: 28px;
  margin: 100px auto 60px;
`;

const Line = styled.span`
  display: block;
  font-size: 18px;
  line-height: 2;
`;

const BorderBox = styled.div`
  display: block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-left: 0;
  border-right: 0;
  margin: 40px auto;
  padding: 8px 40px;
`;

function Intro() {
  return (
    <IntroContainer>
      <Icon />
      <p>
        <Line>평생을 같이하고 싶은 사람을 만났습니다.</Line>
        <Line>첫 마음 그대로 존중하고 배려하며</Line>
        <Line>예쁘게 사랑하겠습니다.</Line>
        <Line>저희의 약속 위에 따듯한 격려로 축복해 주시어</Line>
        <Line>힘찬 출발의 디딤이 되어주시면</Line>
        <Line>더없는 기쁨으로 간직하겠습니다.</Line>
      </p>
      <BorderBox>
        <Line>ㅇㅇㅇ · ㅇㅇㅇ의 장남 동환</Line>
        <Line>ㅇㅇㅇ · ㅇㅇㅇ의 차녀 진영</Line>
      </BorderBox>
    </IntroContainer>
  );
}

export default Intro;
