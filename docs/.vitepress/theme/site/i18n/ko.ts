import type { SiteMessages } from './types'

export const ko: SiteMessages = {
  hero: {
    name: 'Pomikit',
    text: '결정은 더 적게. 인터페이스는 더 낫게.',
    tagline:
      '의도 우선 Vue 3 컴포넌트. 하나만 import해도 프리미엄 UI를 얻습니다. Design Kits로 앱 전체를 한 번만 테마하세요.',
    logoTagline: 'Vue.js를 위한 UI/UX 라이브러리',
    getStarted: '시작하기',
    playground: 'Playground',
    createdBy: '제작',
  },
  features: {
    items: [
      {
        title: '💡 기본이 아름다움',
        body: '컴포넌트와 스타일시트를 import하세요. 보기 좋게 만들기 위해 토큰을 조립할 필요가 없습니다.',
      },
      {
        title: '🎯 의도 우선',
        body: 'Promise, confirm, pending 목록이 추론됩니다. 스타일 props보다 동작을 우선하세요.',
      },
      {
        title: '🎨 테마는 한 번',
        body: 'Design Kits가 강조색, 반경, 모션, 서피스를 앱 전체에 적용합니다.',
      },
      {
        title: '🧠 더 적은 결정',
        body: '호출 지점의 props가 적습니다. 정말 중요한 제품 작업에 에너지를 쓰세요.',
      },
      {
        title: '⚡ 제로 설정',
        body: '바로 동작합니다. 뚜렷한 개성이 필요할 때만 테마를 선택하세요.',
      },
      {
        title: '📦 Vue 3 네이티브',
        body: 'Vue 3 Composition API를 위한 tree-shakeable 컴포넌트와 composables.',
      },
    ],
  },
  playground: {
    eyebrow: 'Design Lab',
    title: '돌리고, 조이고, 놀자.',
    lede: '키트를 고르고 축을 돌리면 모든 컴포넌트가 분위기를 따라갑니다. 같은 UI, 다섯 가지 개성. Surprise로 약간의 혼돈을.',
  },
  kits: {
    items: [
      {
        id: 'linear',
        label: 'Linear',
        personality: '미니멀 제품 UI',
        useCase: '대시보드, 툴링, SaaS',
      },
      {
        id: 'glass',
        label: 'Glass',
        personality: '부드러운 반투명 서피스',
        useCase: '오버레이, 크리에이티브 앱',
      },
      {
        id: 'editorial',
        label: 'Editorial',
        personality: '콘텐츠 우선, 차분한 타이포',
        useCase: '문서, 퍼블리싱, 블로그',
      },
      {
        id: 'soft',
        label: 'Soft',
        personality: '친근하고 다가가기 쉬운',
        useCase: '온보딩, 컨슈머 앱',
      },
      {
        id: 'playful',
        label: 'Playful',
        personality: '더 밝고 표현력 있는',
        useCase: '마케팅, 소셜 제품',
      },
    ],
  },
  paths: {
    gettingStarted: '/guide/getting-started',
    playground: '/playground',
  },
}
