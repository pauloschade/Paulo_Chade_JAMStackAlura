/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { Text } from '../../Text';

const ProjetoWrapper = styled.div`
  display: flex;
  align-items: center;
   justify-content: center;
   width: '100%';
   flex-wrap: wrap;
`;

const CardWrapper = styled.h3`
  width: '100%';
  display: flex;
  flex-direction:column;
  
  ${breakpointsMedia({
    sm: css`
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
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

export default function ProjetosComponent() {
  return (
    <ProjetoWrapper>
      {[
        { url: '/Projeto1', name: 'Projeto1', img: 'https://froala.com/wp-content/uploads/2019/11/post41.svg' },
        { url: '/Projeto2', name: 'Projeto2', img: 'https://froala.com/wp-content/uploads/2019/11/post41.svg' },
        { url: '/Projeto3', name: 'Projeto3', img: 'https://froala.com/wp-content/uploads/2019/11/post41.svg' },
      ].map((link) => (
        <CardWrapper key={link.url}>
          <CardImgContainer>
            <img alt="projeto" style={{ maxWidth: '100%', height: 'auto' }} />
          </CardImgContainer>
          <CardTitle>
            <Text
              variant="projeto"
              tag="a"
              href={link.url}
              maxWidth={{
                xs: '50%',
                md: '50%',
              }}
            >
              {link.name}
            </Text>
          </CardTitle>
        </CardWrapper>
      ))}
    </ProjetoWrapper>

  );
}
