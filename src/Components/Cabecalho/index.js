/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
// import { propToStyle } from '../../theme/utils/propToStyle';
import { Text } from '../Text';

const CabecalhoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color:  #FFF8E6;
  ${breakpointsMedia({
    sm: css`
    height: 40px;
  `,
    md: css`
    height: 67px;
  `,
  })}

`;

const Logo = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  height:100%;
  background-color: #E9C46A;
  ${breakpointsMedia({
    sm: css`
    width: 82.73px;
    
  `,
    md: css`
    width: 136px;
  `,
  })}

  
  
`;

const Nav = styled.ol`
  display: flex;
  justify-items: space-around;
  padding: 0;
  list-style-type: none;

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

export default function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <Logo>
        <Text
          variant="logo"
          tag="a"
          textAlign="center"
          margin={{
            xs: '9px 16px',
            md: '10px 20px',
          }}
        >
          Me
        </Text>
      </Logo>
      <Nav>
        {[
          { url: '/sobreMim', name: 'Sobre Mim' },
          { url: '/contato', name: 'Contato' },
        ].map((link) => (
          <li key={link.url}>
            <Text
              variant="nav"
              tag="a"
              href={link.url}
              margin={{
                xs: '0 32px 0 0',
                md: '0 38px 0 0',
              }}
            >
              {link.name}
            </Text>
          </li>
        ))}
      </Nav>
    </CabecalhoWrapper>
  );
}
