import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
// import { propToStyle } from '../../theme/utils/propToStyle';
import { Text } from '../Text';
import Cabecalho from '../Cabecalho';

const CapaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  background-color: #202020;
  ${breakpointsMedia({
    sm: css`
    height: 300px; 
  `,
    md: css`
    height: 40%; 
  `,
  })}
`;

const CapaTextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

`;

export default function Capa({ setOpen }) {
  return (
    <CapaWrapper>
      <Cabecalho setOpen={setOpen} />
      <CapaTextWrapper>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
        >
          Paulo Chade
        </Text>
        <Text
          variant="nav"
          tag="h1"
          color="tertiary.main"
        >
          Portfolio
        </Text>
      </CapaTextWrapper>
    </CapaWrapper>
  );
}
