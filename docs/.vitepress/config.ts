import { defineConfig, type DefaultTheme, type LocaleSpecificConfig } from 'vitepress'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../..', import.meta.url))

const sharedTheme = {
  logo: '/logo.png',
  siteTitle: 'Pomikit',
  socialLinks: [
    { icon: 'github' as const, link: 'https://github.com/RomainBoiret/Pomikit-ui' },
    { icon: 'npm' as const, link: 'https://www.npmjs.com/package/pomikit-ui' },
  ],
}

type UiCopy = {
  guide: string
  components: string
  playground: string
  composables: string
  reference: string
  gettingStarted: string
  philosophy: string
  designKits: string
  intent: string
  providers: string
  storybook: string
  choice: string
  feedback: string
  sharedTypes: string
  rules: string
  exports: string
  footerMessage: string
  footerCopyright: string
  outline: string
  prev: string
  next: string
  appearance: string
  lightTheme: string
  darkTheme: string
  menu: string
  returnToTop: string
  langMenu: string
  description: string
}

function sidebarLinks(prefix: string, ui: UiCopy): DefaultTheme.Sidebar {
  const p = prefix === '' ? '' : `/${prefix}`
  return [
    {
      text: ui.guide,
      items: [
        { text: ui.gettingStarted, link: `${p}/guide/getting-started` },
        { text: ui.philosophy, link: `${p}/guide/philosophy` },
        { text: ui.designKits, link: `${p}/guide/theming` },
        { text: ui.intent, link: `${p}/guide/intent` },
        { text: ui.providers, link: `${p}/guide/providers` },
        { text: ui.playground, link: `${p}/playground` },
        { text: ui.storybook, link: `${p}/guide/storybook` },
      ],
    },
    {
      text: ui.components,
      items: [
        { text: 'Button', link: `${p}/components/button` },
        { text: 'Card', link: `${p}/components/card` },
        { text: ui.choice, link: `${p}/components/choice` },
        { text: 'Field', link: `${p}/components/field` },
        { text: 'Input', link: `${p}/components/input` },
        { text: 'Select', link: `${p}/components/select` },
        { text: 'Dropdown', link: `${p}/components/dropdown` },
        { text: 'Dialog', link: `${p}/components/dialog` },
        { text: 'Toast', link: `${p}/components/toast` },
        { text: 'Collection', link: `${p}/components/collection` },
        { text: 'Skeleton', link: `${p}/components/skeleton` },
        { text: ui.feedback, link: `${p}/components/feedback` },
      ],
    },
    {
      text: ui.composables,
      items: [
        { text: 'useDialog', link: `${p}/composables/use-dialog` },
        { text: 'useToast', link: `${p}/composables/use-toast` },
        { text: 'useFieldContext', link: `${p}/composables/use-field` },
      ],
    },
    {
      text: ui.reference,
      items: [
        { text: ui.sharedTypes, link: `${p}/reference/types` },
        { text: ui.rules, link: `${p}/reference/rules` },
        { text: ui.exports, link: `${p}/reference/exports` },
      ],
    },
  ]
}

function localeTheme(prefix: string, ui: UiCopy): DefaultTheme.Config {
  const p = prefix === '' ? '' : `/${prefix}`
  return {
    ...sharedTheme,
    nav: [
      { text: ui.guide, link: `${p}/guide/getting-started` },
      { text: ui.components, link: `${p}/components/button` },
      { text: ui.playground, link: `${p}/playground` },
    ],
    sidebar: sidebarLinks(prefix, ui),
    footer: {
      message: ui.footerMessage,
      copyright: ui.footerCopyright,
    },
    outline: { label: ui.outline },
    docFooter: { prev: ui.prev, next: ui.next },
    darkModeSwitchLabel: ui.appearance,
    lightModeSwitchTitle: ui.lightTheme,
    darkModeSwitchTitle: ui.darkTheme,
    sidebarMenuLabel: ui.menu,
    returnToTopLabel: ui.returnToTop,
    langMenuLabel: ui.langMenu,
  }
}

const license =
  'https://github.com/RomainBoiret/Pomikit-ui/blob/main/LICENSE'
const authorUrl = 'https://github.com/RomainBoiret'
const authorCopyright = `Copyright © 2026-present <a href="${authorUrl}">Romain Boiret</a>`

const enUi: UiCopy = {
  guide: 'Guide',
  components: 'Components',
  playground: 'Playground',
  composables: 'Composables',
  reference: 'Reference',
  gettingStarted: 'Getting Started',
  philosophy: 'Philosophy',
  designKits: 'Design Kits',
  intent: 'Intent design',
  providers: 'Root & services',
  storybook: 'Development tools',
  choice: 'Checkbox · Switch',
  feedback: 'EmptyState · ErrorState',
  sharedTypes: 'Shared types',
  rules: 'Rules (validation)',
  exports: 'Exports',
  footerMessage: `Released under the <a href="${license}">MIT License</a>.`,
  footerCopyright: authorCopyright,
  outline: 'On this page',
  prev: 'Previous',
  next: 'Next',
  appearance: 'Appearance',
  lightTheme: 'Switch to light theme',
  darkTheme: 'Switch to dark theme',
  menu: 'Menu',
  returnToTop: 'Return to top',
  langMenu: 'Change language',
  description: 'Less decisions. Better interfaces. Premium Vue 3 components that infer intent.',
}

const zhUi: UiCopy = {
  guide: '指南',
  components: '组件',
  playground: 'Playground',
  composables: '组合式 API',
  reference: '参考',
  gettingStarted: '快速开始',
  philosophy: '理念',
  designKits: 'Design Kits',
  intent: '意图设计',
  providers: '根节点与服务',
  storybook: '开发工具',
  choice: 'Checkbox · Switch',
  feedback: 'EmptyState · ErrorState',
  sharedTypes: '共享类型',
  rules: 'Rules（校验）',
  exports: '导出',
  footerMessage: `基于 <a href="${license}">MIT 许可</a> 发布。`,
  footerCopyright: authorCopyright,
  outline: '本页内容',
  prev: '上一页',
  next: '下一页',
  appearance: '外观',
  lightTheme: '切换到浅色主题',
  darkTheme: '切换到深色主题',
  menu: '菜单',
  returnToTop: '回到顶部',
  langMenu: '切换语言',
  description: '更少决策，更好界面。以意图为先的优质 Vue 3 组件。',
}

const jaUi: UiCopy = {
  guide: 'ガイド',
  components: 'コンポーネント',
  playground: 'Playground',
  composables: 'Composables',
  reference: 'リファレンス',
  gettingStarted: 'はじめに',
  philosophy: 'フィロソフィー',
  designKits: 'Design Kits',
  intent: 'インテント設計',
  providers: 'ルートとサービス',
  storybook: '開発ツール',
  choice: 'Checkbox · Switch',
  feedback: 'EmptyState · ErrorState',
  sharedTypes: '共通型',
  rules: 'Rules（バリデーション）',
  exports: 'エクスポート',
  footerMessage: `<a href="${license}">MIT ライセンス</a>で公開されています。`,
  footerCopyright: authorCopyright,
  outline: 'このページ',
  prev: '前へ',
  next: '次へ',
  appearance: '外観',
  lightTheme: 'ライトテーマに切り替え',
  darkTheme: 'ダークテーマに切り替え',
  menu: 'メニュー',
  returnToTop: 'トップに戻る',
  langMenu: '言語を変更',
  description: '決断を減らす。より良いインターフェースを。意図を理解するプレミアムな Vue 3 コンポーネント。',
}

const koUi: UiCopy = {
  guide: '가이드',
  components: '컴포넌트',
  playground: 'Playground',
  composables: 'Composables',
  reference: '레퍼런스',
  gettingStarted: '시작하기',
  philosophy: '철학',
  designKits: 'Design Kits',
  intent: '인텐트 디자인',
  providers: '루트 & 서비스',
  storybook: '개발 도구',
  choice: 'Checkbox · Switch',
  feedback: 'EmptyState · ErrorState',
  sharedTypes: '공유 타입',
  rules: 'Rules (검증)',
  exports: 'Exports',
  footerMessage: `<a href="${license}">MIT 라이선스</a>로 배포됩니다.`,
  footerCopyright: authorCopyright,
  outline: '이 페이지',
  prev: '이전',
  next: '다음',
  appearance: '테마',
  lightTheme: '라이트 테마로 전환',
  darkTheme: '다크 테마로 전환',
  menu: '메뉴',
  returnToTop: '맨 위로',
  langMenu: '언어 변경',
  description: '결정은 더 적게. 인터페이스는 더 낫게. 의도를 이해하는 프리미엄 Vue 3 컴포넌트.',
}

const esUi: UiCopy = {
  guide: 'Guía',
  components: 'Componentes',
  playground: 'Playground',
  composables: 'Composables',
  reference: 'Referencia',
  gettingStarted: 'Primeros pasos',
  philosophy: 'Filosofía',
  designKits: 'Design Kits',
  intent: 'Diseño por intención',
  providers: 'Raíz y servicios',
  storybook: 'Herramientas de desarrollo',
  choice: 'Checkbox · Switch',
  feedback: 'EmptyState · ErrorState',
  sharedTypes: 'Tipos compartidos',
  rules: 'Rules (validación)',
  exports: 'Exports',
  footerMessage: `Publicado bajo la <a href="${license}">licencia MIT</a>.`,
  footerCopyright: authorCopyright,
  outline: 'En esta página',
  prev: 'Anterior',
  next: 'Siguiente',
  appearance: 'Apariencia',
  lightTheme: 'Cambiar a tema claro',
  darkTheme: 'Cambiar a tema oscuro',
  menu: 'Menú',
  returnToTop: 'Volver arriba',
  langMenu: 'Cambiar idioma',
  description:
    'Menos decisiones. Mejores interfaces. Componentes Vue 3 premium orientados a la intención.',
}

const ptUi: UiCopy = {
  guide: 'Guia',
  components: 'Componentes',
  playground: 'Playground',
  composables: 'Composables',
  reference: 'Referência',
  gettingStarted: 'Começando',
  philosophy: 'Filosofia',
  designKits: 'Design Kits',
  intent: 'Design por intenção',
  providers: 'Raiz e serviços',
  storybook: 'Ferramentas de desenvolvimento',
  choice: 'Checkbox · Switch',
  feedback: 'EmptyState · ErrorState',
  sharedTypes: 'Tipos compartilhados',
  rules: 'Rules (validação)',
  exports: 'Exports',
  footerMessage: `Distribuído sob a <a href="${license}">licença MIT</a>.`,
  footerCopyright: authorCopyright,
  outline: 'Nesta página',
  prev: 'Anterior',
  next: 'Próximo',
  appearance: 'Aparência',
  lightTheme: 'Mudar para tema claro',
  darkTheme: 'Mudar para tema escuro',
  menu: 'Menu',
  returnToTop: 'Voltar ao topo',
  langMenu: 'Mudar idioma',
  description:
    'Menos decisões. Melhores interfaces. Componentes Vue 3 premium orientados à intenção.',
}

const frUi: UiCopy = {
  guide: 'Guide',
  components: 'Composants',
  playground: 'Playground',
  composables: 'Composables',
  reference: 'Référence',
  gettingStarted: 'Démarrage',
  philosophy: 'Philosophie',
  designKits: 'Design Kits',
  intent: 'Design par intention',
  providers: 'Racine & services',
  storybook: 'Outils de développement',
  choice: 'Checkbox · Switch',
  feedback: 'EmptyState · ErrorState',
  sharedTypes: 'Types partagés',
  rules: 'Rules (validation)',
  exports: 'Exports',
  footerMessage: `Distribué sous licence <a href="${license}">MIT</a>.`,
  footerCopyright: authorCopyright,
  outline: 'Sur cette page',
  prev: 'Précédent',
  next: 'Suivant',
  appearance: 'Apparence',
  lightTheme: 'Passer en thème clair',
  darkTheme: 'Passer en thème sombre',
  menu: 'Menu',
  returnToTop: 'Retour en haut',
  langMenu: 'Changer de langue',
  description:
    'Moins de décisions. De meilleures interfaces. Composants Vue 3 premium orientés intention.',
}

const deUi: UiCopy = {
  guide: 'Anleitung',
  components: 'Komponenten',
  playground: 'Playground',
  composables: 'Composables',
  reference: 'Referenz',
  gettingStarted: 'Erste Schritte',
  philosophy: 'Philosophie',
  designKits: 'Design Kits',
  intent: 'Intent-Design',
  providers: 'Root & Services',
  storybook: 'Entwicklungswerkzeuge',
  choice: 'Checkbox · Switch',
  feedback: 'EmptyState · ErrorState',
  sharedTypes: 'Gemeinsame Typen',
  rules: 'Rules (Validierung)',
  exports: 'Exports',
  footerMessage: `Veröffentlicht unter der <a href="${license}">MIT-Lizenz</a>.`,
  footerCopyright: authorCopyright,
  outline: 'Auf dieser Seite',
  prev: 'Zurück',
  next: 'Weiter',
  appearance: 'Darstellung',
  lightTheme: 'Zum hellen Theme wechseln',
  darkTheme: 'Zum dunklen Theme wechseln',
  menu: 'Menü',
  returnToTop: 'Nach oben',
  langMenu: 'Sprache wechseln',
  description:
    'Weniger Entscheidungen. Bessere Interfaces. Premium Vue-3-Komponenten mit Intent-First-API.',
}

function localeEntry(
  label: string,
  lang: string,
  prefix: string,
  ui: UiCopy,
): LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } {
  const link = prefix === '' ? '/' : `/${prefix}/`
  return {
    label,
    lang,
    link,
    description: ui.description,
    themeConfig: localeTheme(prefix, ui),
  }
}

export default defineConfig({
  title: 'Pomikit',
  titleTemplate: ':title | Pomikit',
  description: enUi.description,
  base: '/Pomikit-ui/',
  cleanUrls: true,
  appearance: true,
  vite: {
    resolve: {
      alias: {
        'pomikit-ui': resolve(root, 'src/index.ts'),
      },
    },
  },
  head: [
    ['meta', { name: 'theme-color', content: '#34C759' }],
    ['link', { rel: 'icon', href: '/Pomikit-ui/favicon.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/Pomikit-ui/favicon.png' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@600;800;900&display=swap',
      },
    ],
  ],
  // Search must live on the root themeConfig when using locales.
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                noResultsText: '没有结果',
                resetButtonTitle: '清除',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
          ja: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: {
                noResultsText: '結果がありません',
                resetButtonTitle: 'クリア',
                footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' },
              },
            },
          },
          ko: {
            translations: {
              button: { buttonText: '검색', buttonAriaLabel: '검색' },
              modal: {
                noResultsText: '결과 없음',
                resetButtonTitle: '지우기',
                footer: { selectText: '선택', navigateText: '이동', closeText: '닫기' },
              },
            },
          },
          es: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: {
                noResultsText: 'Sin resultados',
                resetButtonTitle: 'Limpiar',
                footer: { selectText: 'Seleccionar', navigateText: 'Navegar', closeText: 'Cerrar' },
              },
            },
          },
          pt: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: {
                noResultsText: 'Sem resultados',
                resetButtonTitle: 'Limpar',
                footer: { selectText: 'Selecionar', navigateText: 'Navegar', closeText: 'Fechar' },
              },
            },
          },
          fr: {
            translations: {
              button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
              modal: {
                noResultsText: 'Aucun résultat',
                resetButtonTitle: 'Effacer',
                footer: { selectText: 'Sélectionner', navigateText: 'Naviguer', closeText: 'Fermer' },
              },
            },
          },
          de: {
            translations: {
              button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
              modal: {
                noResultsText: 'Keine Ergebnisse',
                resetButtonTitle: 'Zurücksetzen',
                footer: { selectText: 'Auswählen', navigateText: 'Navigieren', closeText: 'Schließen' },
              },
            },
          },
        },
      },
    },
  },
  locales: {
    root: localeEntry('English', 'en-US', '', enUi),
    zh: localeEntry('简体中文', 'zh-CN', 'zh', zhUi),
    ja: localeEntry('日本語', 'ja-JP', 'ja', jaUi),
    ko: localeEntry('한국어', 'ko-KR', 'ko', koUi),
    es: localeEntry('Español', 'es-ES', 'es', esUi),
    pt: localeEntry('Português', 'pt-BR', 'pt', ptUi),
    fr: localeEntry('Français', 'fr-FR', 'fr', frUi),
    de: localeEntry('Deutsch', 'de-DE', 'de', deUi),
  },
})
