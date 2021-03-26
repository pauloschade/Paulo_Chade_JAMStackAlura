/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { Text } from '../../Text';
import { objCard } from './img';

const ProjetoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-wrap: wrap;
  ${propToStyle('order')}
  background-color: #808080;
  height: 50%;
  width: 95%;
`;

const CardWrapper = styled.h3`
  width: '100%';
  display: flex;
  flex-direction:column;
  border: 5px solid black;
  border-radius:2rem;
  padding:2px;
  background-color:#C85502;
  
  ${breakpointsMedia({
    xs: css`
    height: 249px;
    width: 240px;
    margin: 18px 0px 18px 0px;
  `,
    md: css`
    height: 450px;
    width: 288px;
    margin: 40px 40px 40px 18px;
  `,
  })}
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
      
    }
  }

`;

const CardImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content:space-around;
  ${breakpointsMedia({
    xs: css`
    height: 100%;
    width: 100%;
  `,
    md: css`
    height: 100%;
    width: 100%;
  `,
  })}

`;

export default function ProjetosComponent({ order }) {
  return (
    <ProjetoWrapper order={order}>
      {objCard.map((link) => (
        <CardWrapper key={link.url}>
          <CardImgContainer>
          {/*<img alt="projeto" style={{ maxWidth: '100%', height: 'auto' }} /> -->*/}
          </CardImgContainer>
          <CardTitle>
            <Text
              variant="projeto"
              tag="a"
              href={link.url}
            >
              {link.name}
            </Text>
          </CardTitle>
        </CardWrapper>
      ))}
    </ProjetoWrapper>
  );
}
