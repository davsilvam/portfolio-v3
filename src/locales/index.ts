export interface ILocales {
  [key: string]: {
    code: string
    name: string
  }
}

export const locales: ILocales = {
  'pt-BR': {
    code: 'pt-BR',
    name: 'Português (BR)'
  },
  'en-US': {
    code: 'en-US',
    name: 'English'
  }
}
