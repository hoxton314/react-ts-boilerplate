import { FC, useContext } from 'react'
import { StyledThemeSwitcher } from './ThemeSwitcher.styles'
import { observer } from 'mobx-react'
import { StoreContext } from '../App'

export const ThemeSwitcher: FC = observer(() => {
  const store = useContext(StoreContext)
  return <StyledThemeSwitcher onClick={() => store.AppState.toggleTheme()}>Click me</StyledThemeSwitcher>
})
