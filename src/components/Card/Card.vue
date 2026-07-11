<script setup lang="ts">
defineOptions({ name: 'PomiCard' })
</script>

<template>
  <article class="pomi-card">
    <header v-if="$slots.header || $slots.title || $slots.description" class="pomi-card__header">
      <slot name="header">
        <h3 v-if="$slots.title" class="pomi-card__title">
          <slot name="title" />
        </h3>
        <p v-if="$slots.description" class="pomi-card__description">
          <slot name="description" />
        </p>
      </slot>
    </header>
    <div v-if="$slots.default" class="pomi-card__body">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="pomi-card__footer">
      <slot name="footer" />
    </footer>
  </article>
</template>
