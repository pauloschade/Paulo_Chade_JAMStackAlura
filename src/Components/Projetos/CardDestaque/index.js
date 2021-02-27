/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import React from 'react';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { Text } from '../../Text';

const DestaqueWrapper = styled.div`
  display: flex;
  ${breakpointsMedia({
    xs: css`
    flex-direction: column;
    height: 249px;
    width: 290px;
    border: 2px solid black;
  `,
    md: css`
    flex-direction:row;
    height: 320px;
    width: 900px;
  `,
  })}
   ${propToStyle('order')}
`;

const DestaqueImg = styled.div`
  position: relative;
  display:flex;
  align-items:center;
  justify-content:space-around;
  ${breakpointsMedia({
    xs: css`
    height: 177px;
    width: 100%;
  `,
    md: css`
    height: 100%;
    width: 593px;
  `,
  })}
`;

const DestaqueReport = styled.div`
    display: flex;
    ${breakpointsMedia({
    xs: css`
    flex-direction:row;
    align-items: center;
    justify-content: center;
    
  `,
    md: css`
    display: flex;
    flex-direction:column;
    height: 100%;
    align-items:flex-start;
    width:306px;
    margin-left: 30px;
  `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
      
    }}
`;

export default function CardDestaque({ order }) {
  return (
    <DestaqueWrapper order={order}>
      <DestaqueImg>
        <Text
          style={{
            position: 'absolute', color: 'black', top: '0px', left: '0px', backgroundColor: 'white',
          }}
          border="2px solid white"
          variant="nav"
        >
          Destaque
        </Text>
        <img style={{ width: '100%', maxHeight: '100%' }} src="http://fitnessfranchiseblog.com/wp-content/uploads/2009/12/picture-112.png" alt="destaque" />
      </DestaqueImg>
      <DestaqueReport>
        <Text
          variant="projeto"
          tag="a"
          margin={{ md: '-100px 0 50px 0', xs: '0' }}
        >
          Report

        </Text>
        <Text ghost variant="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.</Text>
      </DestaqueReport>
    </DestaqueWrapper>
  );
}
