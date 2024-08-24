import { action, makeAutoObservable } from 'mobx'

export type Theme = 'light' | 'dark'

const DEV_MODE = process.env.DEV_MODE === 'true'

export class AppStateStore {
  DEV_MODE = DEV_MODE || false
  rootStore
  theme = 'dark' as Theme

  constructor(rootStore) {
    makeAutoObservable(this)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.rootStore = rootStore
  }

  @action.bound setTheme(theme: Theme) {
    this.theme = theme
  }

  @action.bound toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light'
  }
}
