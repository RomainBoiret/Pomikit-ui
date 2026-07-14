import type { SiteMessages } from './types'

export const ja: SiteMessages = {
  hero: {
    name: 'Pomikit',
    text: '決断を減らす。より良いインターフェースを。',
    tagline:
      '意図優先の Vue 3 コンポーネント。ひとつ import すれば、プレミアムな UI が手に入ります。Design Kits でアプリ全体を一度だけテーマ設定。',
    logoTagline: 'Vue.js のための UI/UX ライブラリ',
    getStarted: 'はじめる',
    playground: 'Playground',
    createdBy: '作成者',
  },
  features: {
    items: [
      {
        title: '💡 最初から美しい',
        body: 'コンポーネントとスタイルシートを import するだけ。見た目が整う前にトークンを組み立てる必要はありません。',
      },
      {
        title: '🎯 意図を優先',
        body: 'Promise、confirm、pending リストは推論されます。スタイル props より振る舞いを。',
      },
      {
        title: '🎨 テーマは一度だけ',
        body: 'Design Kits がアクセント、半径、モーション、サーフェスをアプリ全体で決めます。',
      },
      {
        title: '🧠 決断を減らす',
        body: '呼び出し側の props を減らす。本当に大切なプロダクト作業にエネルギーを。',
      },
      {
        title: '⚡ ゼロ設定',
        body: 'すぐ使える。個性を出したいときだけ、テーマ設定は任意。',
      },
      {
        title: '📦 Vue 3 ネイティブ',
        body: 'Vue 3 Composition API 向けの tree-shakeable なコンポーネントと composables。',
      },
    ],
  },
  playground: {
    eyebrow: 'Design Lab',
    title: 'ひねって、整えて、遊ぼう。',
    lede: 'キットを選び、軸を回すと、すべてのコンポーネントが雰囲気に乗ってきます。同じ UI、5 つの個性。Surprise で少しのカオスを。',
  },
  kits: {
    items: [
      {
        id: 'linear',
        label: 'Linear',
        personality: 'ミニマルなプロダクト UI',
        useCase: 'ダッシュボード、ツール、SaaS',
      },
      {
        id: 'glass',
        label: 'Glass',
        personality: '柔らかな半透明サーフェス',
        useCase: 'オーバーレイ、クリエイティブアプリ',
      },
      {
        id: 'editorial',
        label: 'Editorial',
        personality: 'コンテンツ優先、落ち着いた文字',
        useCase: 'ドキュメント、出版、ブログ',
      },
      {
        id: 'soft',
        label: 'Soft',
        personality: 'フレンドリーで親しみやすい',
        useCase: 'オンボーディング、コンシューマアプリ',
      },
      {
        id: 'playful',
        label: 'Playful',
        personality: '明るく表現豊か',
        useCase: 'マーケティング、ソーシャル製品',
      },
    ],
  },
  paths: {
    gettingStarted: '/guide/getting-started',
    playground: '/playground',
  },
}
