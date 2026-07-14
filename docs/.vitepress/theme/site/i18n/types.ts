export type KitId = 'linear' | 'glass' | 'editorial' | 'soft' | 'playful'

export type SiteMessages = {
  hero: {
    name: string
    text: string
    tagline: string
    logoTagline: string
    getStarted: string
    playground: string
    createdBy: string
  }
  features: {
    items: Array<{ title: string; body: string }>
  }
  playground: {
    eyebrow: string
    title: string
    lede: string
  }
  kits: {
    items: Array<{
      id: KitId
      label: string
      personality: string
      useCase: string
    }>
  }
  paths: {
    gettingStarted: string
    playground: string
  }
}
