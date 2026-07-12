<script setup lang="ts">
import { ref } from 'vue'
import {
  Button,
  Card,
  Checkbox,
  Collection,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  Field,
  Input,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Switch,
  applyTheme,
  createTheme,
  useDialog,
  useToast,
} from 'pomikit-ui'

const name = ref('Romain')
const query = ref('')
const accept = ref(false)
const dark = ref(true)
const plan = ref('pro')
const engineer = ref('grace')
const peoplePending = ref(false)
const peopleError = ref<unknown>(null)
const people = ref([
  { id: 1, name: 'Ada' },
  { id: 2, name: 'Grace' },
  { id: 3, name: 'Lin' },
])

const options = [
  { label: 'Ada', value: 'ada' },
  { label: 'Grace', value: 'grace' },
  { label: 'Lin', value: 'lin' },
]

function setDna(kind: 'default' | 'minimal' | 'glass' | 'playful') {
  if (kind === 'default') {
    applyTheme(createTheme({ accent: '#5B5FFF', motion: 'expressive' }))
    return
  }
  applyTheme(
    createTheme({
      accent: kind === 'playful' ? '#FF5A7A' : '#5B5FFF',
      personality: kind,
    }),
  )
}

async function save() {
  await new Promise((r) => setTimeout(r, 700))
  toast.success('Saved', 'Profile updated')
}

const dialog = useDialog()
const toast = useToast()

async function askDelete() {
  const ok = await dialog.confirm({
    title: 'Delete workspace?',
    description: 'This cannot be undone.',
    confirmLabel: 'Delete',
    tone: 'danger',
    onConfirm: async () => {
      await new Promise((r) => setTimeout(r, 500))
    },
  })
  if (ok) toast.success('Deleted')
}
</script>

<template>
  <main class="playground">
    <header class="playground__header">
      <p class="playground__eyebrow">Pomikit</p>
      <h1>Catalog focus</h1>
      <p>Button, Field, Input, Collection, Dialog, Select, Toast, Dropdown, Checkbox family, Card, Skeleton.</p>
      <div class="playground__row">
        <Button size="sm" variant="soft" @click="setDna('default')">Default</Button>
        <Button size="sm" variant="outline" @click="setDna('minimal')">Minimal</Button>
        <Button size="sm" variant="outline" @click="setDna('glass')">Glass</Button>
        <Button size="sm" variant="outline" @click="setDna('playful')">Playful</Button>
      </div>
    </header>

    <section class="playground__section">
      <h2>Actions</h2>
      <div class="playground__row">
        <Button @click="save">Save</Button>
        <Button tone="danger" variant="outline" @click="askDelete">Dialog confirm</Button>
        <Button variant="soft" @click="toast.show('Hello Pomikit')">Toast</Button>
        <Dropdown>
          <template #trigger>
            <Button variant="outline">Menu</Button>
          </template>
          <DropdownItem @select="toast.success('Edit')">Edit</DropdownItem>
          <DropdownItem @select="toast.success('Duplicated')">Duplicate</DropdownItem>
          <DropdownSeparator />
          <DropdownItem tone="danger" @select="askDelete">Delete</DropdownItem>
        </Dropdown>
      </div>
    </section>

    <section class="playground__section playground__grid">
      <Card>
        <template #title>Form</template>
        <form class="playground__stack" @submit.prevent="save">
          <Field label="Display name" required>
            <Input v-model="name" />
          </Field>
          <Field label="Search">
            <Input v-model="query" type="search" clearable placeholder="Find a component…" />
          </Field>
          <Field label="Engineer">
            <Select v-model="engineer" :options="options" />
          </Field>
          <Checkbox v-model="accept" label="Accept terms" />
          <Switch v-model="dark" label="Compact density preference" />
          <Field label="Plan">
            <RadioGroup v-model="plan">
              <Radio value="starter" label="Starter" />
              <Radio value="pro" label="Pro" />
            </RadioGroup>
          </Field>
          <Button type="submit">Submit</Button>
        </form>
      </Card>

      <Card>
        <template #title>Collection</template>
        <div class="playground__row" style="margin-bottom: 0.75rem">
          <Button
            size="sm"
            :variant="peoplePending ? 'solid' : 'outline'"
            @click="peoplePending = !peoplePending"
          >
            {{ peoplePending ? 'Stop loading' : 'Show skeleton' }}
          </Button>
        </div>
        <Collection
          :items="people"
          :pending="peoplePending"
          :error="peopleError"
          layout="stack"
          empty-title="No people"
        >
          <template #item="{ item }">
            <div class="playground__person">{{ item.name }}</div>
          </template>
        </Collection>
      </Card>
    </section>

    <section class="playground__section">
      <h2>Skeleton</h2>
      <div class="playground__grid">
        <Card>
          <template #title>Profile</template>
          <div class="playground__skeleton-profile">
            <Skeleton variant="circle" width="3rem" height="3rem" />
            <Skeleton :lines="3" />
          </div>
        </Card>
        <Card>
          <template #title>Media</template>
          <div class="playground__stack">
            <Skeleton variant="rect" height="8rem" />
            <Skeleton :lines="2" />
          </div>
        </Card>
      </div>
    </section>
  </main>
</template>

<style>
body {
  margin: 0;
  min-height: 100vh;
  font-family: var(--pomi-font);
  color: var(--pomi-fg);
  background:
    radial-gradient(circle at 10% 0%, color-mix(in srgb, var(--pomi-accent) 16%, transparent), transparent 40%),
    var(--pomi-bg);
}

.playground {
  max-width: 880px;
  margin: 0 auto;
  padding: 3rem 1.25rem 4rem;
  display: grid;
  gap: 2rem;
}

.playground__header h1 {
  margin: 0.35rem 0 0.65rem;
  font-family: var(--pomi-font-display);
  font-size: clamp(2rem, 5vw, 2.75rem);
  letter-spacing: -0.04em;
}

.playground__header p {
  margin: 0;
  color: var(--pomi-muted);
}

.playground__eyebrow {
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--pomi-accent);
}

.playground__section {
  display: grid;
  gap: 1rem;
}

.playground__section h2 {
  margin: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--pomi-muted);
}

.playground__row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.playground__stack {
  display: grid;
  gap: 1rem;
}

.playground__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

.playground__person {
  padding: 0.75rem 0.9rem;
  border: 1px solid var(--pomi-border);
  border-radius: var(--pomi-radius);
  background: var(--pomi-surface);
}

.playground__skeleton-profile {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.playground__skeleton-profile .pomi-skeleton-stack {
  flex: 1;
  min-width: 0;
}

@media (min-width: 800px) {
  .playground__grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
</style>
