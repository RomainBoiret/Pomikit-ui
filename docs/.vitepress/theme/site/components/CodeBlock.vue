<script setup lang="ts">
defineProps<{
  code: string
}>()
</script>

<template>
  <pre class="site-code"><code>{{ code }}</code></pre>
</template>
