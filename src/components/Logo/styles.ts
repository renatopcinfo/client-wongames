import styled, { css } from 'styled-components'

import { LogoProps } from '.' 

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    heigth: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    heigh: 5.9rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
  `}
`
