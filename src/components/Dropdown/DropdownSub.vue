<script setup lang="ts">
import { DropdownMenuSub } from 'reka-ui'

defineOptions({ name: 'PomiDropdownSub' })
</script>

<template>
  <DropdownMenuSub>
    <slot />
  </DropdownMenuSub>
</template>
