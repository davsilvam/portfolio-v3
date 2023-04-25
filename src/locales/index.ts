export interface Locales {
  [key: string]: {
    code: string
    name: string
  }
}

export const locales: Locales = {
  'pt-BR': {
    code: 'pt-BR',
    name: 'Português (BR)'
  },
  'en-US': {
    code: 'en-US',
    name: 'English'
  }
}
