import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { applyTheme, createTheme } from '../src/theme'
import Button from '../src/components/Button/Button.vue'
import Field from '../src/components/Field/Field.vue'
import Input from '../src/components/Input/Input.vue'
import Card from '../src/components/Card/Card.vue'

const meta = {
  title: 'Intro/Welcome',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Wow: Story = {
  render: () => ({
    components: { Button, Field, Input, Card },
    setup() {
      function setPersonality(personality: 'minimal' | 'glass' | 'playful' | undefined) {
        applyTheme(
          createTheme({
            accent: personality === 'playful' ? '#FF5A7A' : '#5B5FFF',
            personality,
            motion: 'expressive',
          }),
        )
      }
      async function save() {
        await new Promise((r) => setTimeout(r, 1000))
      }
      async function fail() {
        await new Promise((_, rej) => setTimeout(() => rej(new Error('nope')), 800))
      }
      return { setPersonality, save, fail, email: ref('') }
    },
    template: `
      <div style="min-height:100vh;padding:3rem 1.5rem 4rem;background:
        radial-gradient(circle at 12% 10%, color-mix(in srgb, var(--pomi-accent) 18%, transparent), transparent 42%),
        radial-gradient(circle at 88% 0%, color-mix(in srgb, var(--pomi-accent) 10%, transparent), transparent 36%),
        var(--pomi-bg);font-family:var(--pomi-font);color:var(--pomi-fg)">
        <div style="max-width:720px;margin:0 auto;display:grid;gap:2rem">
          <header>
            <p style="margin:0;font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--pomi-accent)">Pomikit</p>
            <h1 style="margin:0.4rem 0 0.6rem;font-family:var(--pomi-font-display);font-size:clamp(2.4rem,6vw,3.4rem);letter-spacing:-0.04em;line-height:1.05">
              Beautiful by default.<br/>Components that understand your intent.
            </h1>
            <p style="margin:0;max-width:36rem;color:var(--pomi-muted);font-size:1.05rem;line-height:1.55">
              Change the DNA. Keep the intelligence. No loading props. No empty-state trees.
            </p>
          </header>

          <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
            <Button size="sm" variant="soft" @click="setPersonality(undefined)">Default</Button>
            <Button size="sm" variant="outline" @click="setPersonality('minimal')">Minimal</Button>
            <Button size="sm" variant="outline" @click="setPersonality('glass')">Glass</Button>
            <Button size="sm" variant="outline" @click="setPersonality('playful')">Playful</Button>
          </div>

          <Card>
            <template #title>Intent in action</template>
            <template #description>Promise click → busy → success / error. Theme shapes the motion.</template>
            <div style="display:flex;flex-wrap:wrap;gap:0.75rem;margin-top:0.5rem">
              <Button @click="save">Save</Button>
              <Button busy-text="Saving…" success-text="Saved" @click="save">Save with text</Button>
              <Button tone="danger" variant="outline" @click="fail">Will fail</Button>
              <Button tone="danger" confirm="Delete forever?" @click="save">Confirm delete</Button>
            </div>
          </Card>

          <Card>
            <template #title>Field chrome</template>
            <Field label="Work email" helper="We never share your email." required style="max-width:22rem;margin-top:0.5rem">
              <Input v-model="email" type="email" placeholder="you@studio.dev" />
            </Field>
          </Card>
        </div>
      </div>
    `,
  }),
}
