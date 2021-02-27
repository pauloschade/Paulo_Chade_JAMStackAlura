/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
// import { propToStyle } from '../../theme/utils/propToStyle';
import { Text } from '../Text';
import ProjetosComponent from './Card';
import CardDestaque from './CardDestaque';

const WrapperProjetos = styled.div`
  width:100%;
  height: 100% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CardsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-around;
`;

export default function Projetos() {
  return (
    <WrapperProjetos>
      <Text
        variant="subTitle"
        tag="h2"
        textAlign="center"
        margin={{
          xs: '9px 16px',
          md: '10px 20px',
        }}
      >
        Projetos
      </Text>
      <ProjetosComponent order={{ xs: '3', md: '2' }} />
      <CardDestaque order={{ xs: '2', md: '3' }} />
    </WrapperProjetos>
  );
}
