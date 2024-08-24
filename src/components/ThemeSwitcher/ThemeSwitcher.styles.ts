import styled from 'styled-components'
import { AnimateColors } from '@styles/generic.styles'

export const StyledThemeSwitcher = styled.div`
  font:
    500 26px 'Roboto',
    sans-serif;
  padding: 8px 16px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  ${AnimateColors}
`
