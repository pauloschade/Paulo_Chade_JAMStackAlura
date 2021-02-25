/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
// import { propToStyle } from '../../theme/utils/propToStyle';
import { Text } from '../Text';
import ProjetosComponent from './Card';

const WrapperProjetos = styled.div`
  height: 100% ;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <ProjetosComponent />
    </WrapperProjetos>
  );
}