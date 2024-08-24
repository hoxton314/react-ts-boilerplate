import { ThemeSwitcher } from '@/components/ThemeSwitcher/ThemeSwitcher'
import { axiosInstance } from '@/methods/axiosConfig'
import { FC, useEffect } from 'react'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`
const Title = styled.h1`
  font:
    700 32px 'Roboto',
    sans-serif;
  color: inherit;
`
const Subtitle = styled.h2`
  font:
    700 26px 'Roboto',
    sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`

export const WelcomePage: FC = () => {
  const checkMockAuth = async () => {
    const res = await axiosInstance.get('/auth')

    console.log('Mock adapter check:', res.status === 200 ? 'success' : 'failed')
  }

  useEffect(() => {
    void checkMockAuth()
  }, [])

  return (
    <Page>
      <Title>React Typescript Boilerplate</Title>
      <Subtitle> with styled-components</Subtitle>
      <ThemeSwitcher />
    </Page>
  )
}
