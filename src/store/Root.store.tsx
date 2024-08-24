import { AppStateStore } from './AppState.store'

export class RootStore {
  AppState: AppStateStore

  constructor() {
    this.AppState = new AppStateStore(this)
  }
}

export const rootStore = new RootStore()
