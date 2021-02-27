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
  flex-wrap: wrap;
  ${propToStyle('order')}
`;

const CardWrapper = styled.h3`
  width: '100%';
  display: flex;
  flex-direction:column;
  
  ${breakpointsMedia({
    xs: css`
    height: 249px;
    width: 290px;
    margin: 18px 0px 18px 0px;
    border: 2px solid black;
  `,
    md: css`
    height: 510px;
    width: 288px;
    margin: 0px 18px 0px 18px;
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
  background-color: #2a6bcc;
  ${breakpointsMedia({
    xs: css`
    height: 177px;
    width: 288px;
    border-bottom: 1px solid black;
  `,
    md: css`
    height: 390px;
    width: 287px;
  `,
  })}

`;

export default function ProjetosComponent({ order }) {
  return (
    <ProjetoWrapper order={order}>
      {objCard.map((link) => (
        <CardWrapper key={link.url}>
          <CardImgContainer>
            <img src={link.img} alt="projeto" style={{ maxWidth: '99%', height: 'auto' }} />
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
