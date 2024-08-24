import styled from 'styled-components'

export const StyledthemeIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary4};
  /* background-color: ${({ theme }) => theme.colors.primary}; */
  border-radius: 26px;

  svg {
    width: 25px;
    height: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 48px;
    height: 48px;
  }
`
