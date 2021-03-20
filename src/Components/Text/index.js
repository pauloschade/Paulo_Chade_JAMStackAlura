import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { propToStyle } from '../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

/* Consts ##################################################################### */

const subTitle = css`
${({ theme }) => css`
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight}
  `}
`;

const title = css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
        `}
      `,
  })}
  `;

const logo = css`
${({ theme }) => css`
    font-size: ${theme.typographyVariants.logoXS.fontSize};
    font-weight: ${theme.typographyVariants.logoXS.fontWeight};
  `}

  ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.logo.fontSize};
          font-weight: ${theme.typographyVariants.logo.fontWeight};
        `}
      `,
  })}
`;

const nav = css`
${({ theme }) => css`
    font-size: ${theme.typographyVariants.navXS.fontSize};
    font-weight: ${theme.typographyVariants.navXS.fontWeight};
  `}

  ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.nav.fontSize};
          font-weight: ${theme.typographyVariants.nav.fontWeight};
        `}
      `,
  })}
`;

const projeto = css`
${({ theme }) => css`
    font-size: ${theme.typographyVariants.projetoXS.fontSize};
    font-weight: ${theme.typographyVariants.projetoXS.fontWeight};
  `}

  ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.projeto.fontSize};
          font-weight: ${theme.typographyVariants.projeto.fontWeight};
        `}
      `,
  })}
`;

const description = css`
${({ theme }) => css`
    font-size: ${theme.typographyVariants.description.fontSize};
    font-weight: ${theme.typographyVariants.description.fontWeight};
  `}
`;

const TextGhost = css`
  ${breakpointsMedia({
    xs: css`
    display:none
  `,
    md: css`
    display: block;
    font-size: 18px;
  `,
  })}
`;

/* Consts ##################################################################### */

export const TextStyleVariants = {
  subTitle,
  title,
  logo,
  nav,
  projeto,
  description,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${({ ghost }) => (ghost && TextGhost)}
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
  ${propToStyle('marginRight')}
  ${propToStyle('maxWidth')}
  ${propToStyle('border')}
`;

export function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'subTitle',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span', 'button']),
  variant: PropTypes.oneOf(['title', 'subTitle', 'nav', 'logo', 'projeto', 'description']),
};
