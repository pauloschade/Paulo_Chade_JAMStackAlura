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
`;

const CapaTextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  ${breakpointsMedia({
    sm: css`
    padding: 300px 51px 300px 51px; 
  `,
    md: css`
    padding: 400px 416px 430px 416px; 
  `,
  })}
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
