import { FC } from 'react'
import { Route, Switch } from 'wouter'
import { observer } from 'mobx-react'

import { WelcomePage } from '@/pages/WelcomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const ContentRouter: FC = observer(() => {
  return (
    <Switch>
      <Route path="/" component={WelcomePage} />

      {/* Default route in a switch */}
      <Route component={NotFoundPage} />
    </Switch>
  )
})
