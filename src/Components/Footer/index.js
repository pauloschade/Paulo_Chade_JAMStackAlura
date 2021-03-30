/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
// import { propToStyle } from '../../theme/utils/propToStyle';
import { Text } from '../Text';
import { Logo1, Logo2, Logo3 } from './logos';

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: #202020;
  height: 68px;
`;

const NavF = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height:100%;
  background-color: #FFFFFF;
  list-style-type: none;
  width:224px;
`;

const navReto = styled.div`
  max-width:100%;
`;

const Logos = [{ tipo: <Logo1 />, name: 'twitter' }, { tipo: <Logo2 />, name: 'git' }, { tipo: <Logo3 />, name: 'figma' }];

export default function Footer() {
  return (
    <FooterWrapper>
      <NavF>

        {Logos.map((logo) => (
          <li key={logo.name}>{logo.tipo}</li>
        ))}

      </NavF>
    </FooterWrapper>
  );
}
