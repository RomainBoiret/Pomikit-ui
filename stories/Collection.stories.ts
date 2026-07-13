import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Collection from '../src/components/Collection/Collection.vue'
import Button from '../src/components/Button/Button.vue'
import Card from '../src/components/Card/Card.vue'

const meta = {
  title: 'Components/Collection',
  // Generic SFC breaks Storybook Meta inference — cast is intentional.
  component: Collection as object,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Intent-driven list chrome: \`pending\` + \`items\` + \`error\` replace nested \`v-if\` trees.

- First load (\`pending\` + empty) → Skeleton
- Refresh (\`pending\` + items) → keep items + discrete refresh bar (no layout shift)
- Error / empty → ErrorState / EmptyState
        `.trim(),
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

type User = { id: number; name: string }

export const Playground: Story = {
  render: () => ({
    components: { Collection, Button, Card },
    setup() {
      const items = ref<User[]>([])
      const pending = ref(true)
      const error = ref<unknown>(null)

      async function load(fail = false) {
        pending.value = true
        error.value = null
        await new Promise((r) => setTimeout(r, 900))
        pending.value = false
        if (fail) {
          error.value = new Error('Network unavailable')
          return
        }
        items.value = [
          { id: 1, name: 'Ada' },
          { id: 2, name: 'Grace' },
          { id: 3, name: 'Lin' },
        ]
      }

      async function refresh() {
        pending.value = true
        await new Promise((r) => setTimeout(r, 1200))
        pending.value = false
      }

      function clear() {
        items.value = []
        error.value = null
        pending.value = false
      }

      load()
      return { items, pending, error, load, refresh, clear }
    },
    template: `
      <div style="display:grid;gap:1rem">
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
          <Button @click="load(false)">Reload</Button>
          <Button @click="refresh">Refresh</Button>
          <Button @click="load(true)">Fail</Button>
          <Button @click="clear">Clear</Button>
        </div>
        <Collection
          :items="items"
          :pending="pending"
          :error="error"
          layout="grid"
          :columns="3"
          empty-title="No people yet"
          empty-description="Load the demo dataset to see cards."
          @retry="load(false)"
        >
          <template #item="{ item }">
            <Card>
              <template #title>{{ item.name }}</template>
              #{{ item.id }}
            </Card>
          </template>
          <template #empty-action>
            <Button @click="load(false)">Load people</Button>
          </template>
        </Collection>
      </div>
    `,
  }),
}

export const StackSkeleton: Story = {
  render: () => ({
    components: { Collection },
    template: `
      <Collection :items="[]" pending layout="stack" />
    `,
  }),
}
