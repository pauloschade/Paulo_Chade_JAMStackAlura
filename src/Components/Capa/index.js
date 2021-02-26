import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
// import { propToStyle } from '../../theme/utils/propToStyle';
import { Text } from '../Text';

const CapaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
  ${breakpointsMedia({
    sm: css`
    height: 300px; 
  `,
    md: css`
    height: 434px; 
  `,
  })}
  //background-image: url('https://i.pinimg.com/236x/5e/1c/4f/5e1c4fcc0bb0d412bedd45392a8c891e.jpg')
`;

const CapaTextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

`;

export default function Capa() {
  return (
    <CapaWrapper>
      <CapaTextWrapper>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
        >
          Paulo Chade
        </Text>
        <Text
          variant="subTitle"
          tag="h1"
          color="tertiary.main"
        >
          Portfólio
        </Text>
      </CapaTextWrapper>
    </CapaWrapper>
  );
}
