import { describe, expect, it } from 'vitest'
import { createTheme } from './createTheme'

describe('createTheme', () => {
  it('maps accent into CSS vars', () => {
    const theme = createTheme({ accent: '#112233' })
    expect(theme.vars['--pomi-accent']).toBe('#112233')
    expect(theme.attrs['data-pomi-motion']).toBe('expressive')
  })

  it('applies personality presets', () => {
    const minimal = createTheme({ personality: 'minimal' })
    expect(minimal.attrs['data-pomi-radius']).toBe('sharp')
    expect(minimal.attrs['data-pomi-personality']).toBe('minimal')

    const glass = createTheme({ personality: 'glass' })
    expect(glass.vars['--pomi-surface-blur']).toBe('18px')

    const playful = createTheme({ personality: 'playful' })
    expect(playful.vars['--pomi-accent']).toBe('#FF5A7A')
  })
})
