export interface PathsTypes {
  key: string
  destination: string
  nameOfPage: string
  exact?: boolean
  scrollHook: 'entryPageStartHook' | 'entryPageEndHook'
}
