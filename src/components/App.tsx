import { createContext, FC, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { observer } from 'mobx-react'

import { AppContainer, GlobalStyle } from '@styles/App.styles'
import { Helmet } from './Helmet'
import { ContentRouter } from './ContentRouter'

import { rootStore } from '@store/Root.store'
import { themes } from '@/themes/themes'

export const StoreContext = createContext(rootStore)

export const App: FC = observer(() => {
  const store = useContext(StoreContext)
  const { theme } = store.AppState

  return (
    <StoreContext.Provider value={rootStore}>
      <Helmet title="React TS boilerplate" description="React boilerplate" themeColor="#320822" />
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <AppContainer className="app-container">
          <ContentRouter />
        </AppContainer>
      </ThemeProvider>
    </StoreContext.Provider>
  )
})
