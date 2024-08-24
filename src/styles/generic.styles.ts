import styled, { css } from 'styled-components'

const ANIMATION_DURATION = '0.3s'
const ANIMATION_FUNCTION = 'ease-in-out'

export const AnimateColors = css`
  transition:
    color ${ANIMATION_DURATION} ${ANIMATION_FUNCTION},
    background-color ${ANIMATION_DURATION} ${ANIMATION_FUNCTION},
    border-color ${ANIMATION_DURATION} ${ANIMATION_FUNCTION},
    outline-color ${ANIMATION_DURATION} ${ANIMATION_FUNCTION},
    stroke ${ANIMATION_DURATION} ${ANIMATION_FUNCTION},
    fill ${ANIMATION_DURATION} ${ANIMATION_FUNCTION};
`

export const AnimateAll = css`
  transition: all ${ANIMATION_DURATION} ${ANIMATION_FUNCTION};
`

export const HideOnMobile = css`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`

export const HideOnDesktop = css`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile + 1}px) {
    display: none;
  }
`

export const Spacer = styled.div<{ margin?: string; size?: number; width?: string; $desktopOnly?: boolean }>`
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ margin }) => css`
    margin: ${margin || '0'};
  `}

  ${({ size }) =>
    size &&
    css`
      height: ${size}px;
      min-height: ${size}px;
    `}

  ${({ $desktopOnly }) =>
    $desktopOnly &&
    css`
      @media (max-width: 980px) {
        display: none;
      }
    `}
`
