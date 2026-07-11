<script setup lang="ts">
import { ref } from 'vue'
import { Badge, Button, Card, Dialog, Input } from 'pomikit-ui'

const name = ref('')
const dialogOpen = ref(false)
</script>

<template>
  <main class="playground">
    <header class="playground__header">
      <p class="playground__eyebrow">Pomikit</p>
      <h1>Playground</h1>
      <p>Local sandbox for the Vue 3 component library.</p>
    </header>

    <section class="playground__section">
      <h2>Actions</h2>
      <div class="playground__row">
        <Button>Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="soft" tone="success">Soft</Button>
        <Button variant="ghost" tone="neutral">Ghost</Button>
        <Button loading>Loading</Button>
        <Badge>Badge</Badge>
        <Badge tone="danger" variant="solid">Alert</Badge>
      </div>
    </section>

    <section class="playground__section playground__grid">
      <Card>
        <template #title>Profile</template>
        <template #description>Edit your public details.</template>
        <Input v-model="name" label="Display name" hint="Shown on your profile" placeholder="Romain" />
        <template #footer>
          <Button variant="ghost" tone="neutral">Cancel</Button>
          <Button @click="dialogOpen = true">Save</Button>
        </template>
      </Card>

      <Dialog
        v-model:open="dialogOpen"
        title="Save changes?"
        description="This will update your public profile."
      >
        <template #trigger>
          <Button variant="outline" @click="dialogOpen = true">Open dialog</Button>
        </template>
        Name preview: <strong>{{ name || '—' }}</strong>
        <template #footer>
          <Button variant="ghost" tone="neutral" @click="dialogOpen = false">Cancel</Button>
          <Button @click="dialogOpen = false">Confirm</Button>
        </template>
      </Dialog>
    </section>
  </main>
</template>

<style>
:root {
  color-scheme: light;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: var(--pomi-font);
  color: var(--pomi-fg);
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--pomi-color-primary) 12%, transparent), transparent 40%),
    linear-gradient(180deg, #f7f8fc 0%, #eef1f7 100%);
}

.playground {
  max-width: 880px;
  margin: 0 auto;
  padding: 3rem 1.25rem 4rem;
  display: grid;
  gap: 2rem;
}

.playground__header h1 {
  margin: 0.2rem 0 0.5rem;
  font-size: clamp(2rem, 4vw, 2.75rem);
  letter-spacing: -0.03em;
}

.playground__header p {
  margin: 0;
  color: var(--pomi-muted);
}

.playground__eyebrow {
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--pomi-color-primary);
}

.playground__section {
  display: grid;
  gap: 1rem;
}

.playground__section h2 {
  margin: 0;
  font-size: 1rem;
}

.playground__row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.playground__grid {
  grid-template-columns: 1fr;
  align-items: start;
}
</style>
