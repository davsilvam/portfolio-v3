import { useI18n } from 'vue-i18n'

export default function useLang() {
  const { t } = useI18n()
  return {
    t
  }
}
