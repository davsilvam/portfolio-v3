import antfu from '@antfu/eslint-config'
import NuxtEslintConfig from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    vue: {
      overrides: {
        'vue/multi-word-component-names': 'off',
      },
    },
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
  },
  NuxtEslintConfig,
)
