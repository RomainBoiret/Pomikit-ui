import { describe, expect, it, vi } from 'vitest'
import { applyTheme, createTheme, resolveColorScheme } from './createTheme'
import { DESIGNS } from './designs'

describe('createTheme', () => {
  it('defaults to linear Design Kit', () => {
    const theme = createTheme()
    expect(theme.attrs['data-pomi-design']).toBe('linear')
    expect(theme.attrs['data-pomi-personality']).toBe('linear')
    expect(theme.attrs['data-pomi-motion']).toBe('normal')
    expect(theme.attrs['data-pomi-elevation']).toBe('flat')
    expect(theme.attrs['data-pomi-mode']).toBe('light')
    expect(theme.vars['--pomi-accent']).toBe('#34C759')
    expect(theme.resolved.design).toBe('linear')
    expect(theme.vars['--pomi-radius-md']).toBe('10px')
    expect(theme.vars['--pomi-font']).toContain('Inter')
  })

  it('maps accent into CSS vars', () => {
    const theme = createTheme({ accent: '#112233' })
    expect(theme.vars['--pomi-accent']).toBe('#112233')
  })

  it('aliases motion subtle → normal', () => {
    const theme = createTheme({ motion: 'subtle' })
    expect(theme.attrs['data-pomi-motion']).toBe('normal')
  })

  it('applies Design Kits with real material differences', () => {
    const linear = createTheme({ design: 'linear' })
    expect(linear.vars['--pomi-surface-blur']).toBe('0px')
    expect(linear.resolved.elevation).toBe('flat')

    const glass = createTheme({ design: 'glass' })
    expect(glass.vars['--pomi-surface-blur']).toBe('16px')
    expect(Number(glass.vars['--pomi-surface-alpha'])).toBeLessThan(1)
    expect(glass.vars['--pomi-border-highlight']).not.toBe('none')

    const editorial = createTheme({ design: 'editorial' })
    expect(editorial.vars['--pomi-font-display']).toContain('Newsreader')
    expect(editorial.vars['--pomi-radius-md']).toBe('6px')
    expect(editorial.resolved.elevation).toBe('flat')

    const soft = createTheme({ design: 'soft' })
    expect(soft.vars['--pomi-radius-md']).toBe('16px')
    expect(soft.vars['--pomi-ease']).toContain('0.33')

    const playful = createTheme({ design: 'playful' })
    expect(playful.vars['--pomi-accent']).toBe('#FF5A7A')
    expect(playful.vars['--pomi-radius-md']).toBe('18px')
    expect(playful.resolved.motion).toBe('expressive')
  })

  it('maps legacy personality names to Design Kits', () => {
    expect(createTheme({ personality: 'pomikit' }).resolved.design).toBe('linear')
    expect(createTheme({ personality: 'minimal' }).resolved.design).toBe('linear')
    expect(createTheme({ personality: 'elegant' }).resolved.design).toBe('editorial')
    expect(createTheme({ personality: 'glass' }).resolved.design).toBe('glass')
  })

  it('supports elevation and dark mode', () => {
    const floating = createTheme({ design: 'linear', elevation: 'floating', mode: 'dark' })
    expect(floating.attrs['data-pomi-elevation']).toBe('floating')
    expect(floating.attrs['data-pomi-mode']).toBe('dark')
    expect(floating.vars['--pomi-bg']).toBe(DESIGNS.linear.dark.bg)
  })

  it('explicit axes override design defaults', () => {
    const theme = createTheme({
      design: 'linear',
      radius: 'round',
      motion: 'expressive',
      density: 'compact',
    })
    expect(theme.resolved.radius).toBe('round')
    expect(theme.resolved.motion).toBe('expressive')
    expect(theme.resolved.density).toBe('compact')
    expect(theme.vars['--pomi-radius-md']).toBe('16px')
  })

  it('applyTheme writes design attrs and tokens', () => {
    const el = document.createElement('div')
    applyTheme(createTheme({ design: 'glass', elevation: 'floating' }), el)
    expect(el.getAttribute('data-pomi-design')).toBe('glass')
    expect(el.getAttribute('data-pomi-elevation')).toBe('floating')
    expect(el.style.getPropertyValue('--pomi-surface-blur')).toBe('16px')
  })

  it('resolveColorScheme handles system via matchMedia', () => {
    const matches = vi.fn(() => true)
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: matches(), addEventListener: vi.fn(), removeEventListener: vi.fn() })),
    )
    expect(resolveColorScheme('system')).toBe('dark')
    matches.mockReturnValue(false)
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
    )
    expect(resolveColorScheme('system')).toBe('light')
    vi.unstubAllGlobals()
  })
})
