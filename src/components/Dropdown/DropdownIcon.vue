<script setup lang="ts">
/**
 * Built-in dropdown icons — thin stroke, 16×16, optical alignment.
 * Prefer `#icon` slot for custom artwork.
 */
export type DropdownIconName =
  | 'copy'
  | 'pencil'
  | 'trash'
  | 'settings'
  | 'plus'
  | 'check'
  | 'share'
  | 'download'
  | 'external'
  | 'user'
  | 'logout'
  | 'folder'
  | 'link'
  | 'search'
  | 'more'
  | 'chevron-right'

defineProps<{ name: DropdownIconName }>()

defineOptions({ name: 'PomiDropdownIcon' })
</script>

<template>
  <svg
    class="pomi-dropdown__glyph"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <template v-if="name === 'copy'">
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5" />
      <path
        d="M10.5 5.5V4A1.5 1.5 0 0 0 9 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </template>
    <template v-else-if="name === 'pencil'">
      <path
        d="M11.2 2.6a1.4 1.4 0 0 1 2 2L5.5 12.3 2.5 13.2l.9-3L11.2 2.6Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </template>
    <template v-else-if="name === 'trash'">
      <path
        d="M3.5 4.5h9M6 4.5V3.25A.75.75 0 0 1 6.75 2.5h2.5a.75.75 0 0 1 .75.75V4.5m-5.5 0 .5 8.25A1 1 0 0 0 6.25 14h3.5a1 1 0 0 0 1-.75l.5-8.25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
    <template v-else-if="name === 'settings'">
      <circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.5" />
      <path
        d="M8 2.5v1.2M8 12.3v1.2M2.5 8h1.2M12.3 8h1.2M4.1 4.1l.85.85M11.05 11.05l.85.85M11.9 4.1l-.85.85M4.95 11.05l-.85.85"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </template>
    <template v-else-if="name === 'plus'">
      <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'check'">
      <path
        d="M3.5 8.2l3 3 6-7"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
    <template v-else-if="name === 'share'">
      <circle cx="12" cy="4" r="1.75" stroke="currentColor" stroke-width="1.5" />
      <circle cx="4" cy="8" r="1.75" stroke="currentColor" stroke-width="1.5" />
      <circle cx="12" cy="12" r="1.75" stroke="currentColor" stroke-width="1.5" />
      <path d="M5.6 7.1 10.4 4.9M5.6 8.9l4.8 2.2" stroke="currentColor" stroke-width="1.5" />
    </template>
    <template v-else-if="name === 'download'">
      <path
        d="M8 3v7.5M5.5 8 8 10.5 10.5 8M3.5 12.5h9"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
    <template v-else-if="name === 'external'">
      <path
        d="M9.5 3.5H12.5V6.5M6.5 9.5 12.5 3.5M4.5 5.5v6h6"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
    <template v-else-if="name === 'user'">
      <circle cx="8" cy="5.5" r="2.25" stroke="currentColor" stroke-width="1.5" />
      <path
        d="M3.5 13c.7-2.2 2.3-3.25 4.5-3.25S11.8 10.8 12.5 13"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </template>
    <template v-else-if="name === 'logout'">
      <path
        d="M7 3.5H4.5A1 1 0 0 0 3.5 4.5v7a1 1 0 0 0 1 1H7M10 5.5 12.5 8 10 10.5M12.5 8H6.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
    <template v-else-if="name === 'folder'">
      <path
        d="M2.5 5.25A1.25 1.25 0 0 1 3.75 4h2.6l1.2 1.5h4.7A1.25 1.25 0 0 1 13.5 6.75v5A1.25 1.25 0 0 1 12.25 13h-8.5A1.25 1.25 0 0 1 2.5 11.75v-6.5Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </template>
    <template v-else-if="name === 'link'">
      <path
        d="M7 9.5a3 3 0 0 0 4.24 0l1.26-1.26a3 3 0 0 0-4.24-4.24L7.5 4.75M9 6.5a3 3 0 0 0-4.24 0L3.5 7.76a3 3 0 0 0 4.24 4.24L8.5 11.25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </template>
    <template v-else-if="name === 'search'">
      <circle cx="7" cy="7" r="3.5" stroke="currentColor" stroke-width="1.5" />
      <path d="M10 10.5 13 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'more'">
      <circle cx="3.5" cy="8" r="1.1" fill="currentColor" />
      <circle cx="8" cy="8" r="1.1" fill="currentColor" />
      <circle cx="12.5" cy="8" r="1.1" fill="currentColor" />
    </template>
    <template v-else-if="name === 'chevron-right'">
      <path
        d="M6 3.5 10.5 8 6 12.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>
  </svg>
</template>
