<script setup lang="ts" generic="T = unknown">
import { computed, getCurrentInstance, useAttrs, useSlots } from 'vue'
import { cn } from '../../utils/cn'
import Skeleton from '../Skeleton/Skeleton.vue'
import EmptyState from '../EmptyState/EmptyState.vue'
import ErrorState from '../ErrorState/ErrorState.vue'

export type CollectionLayout = 'stack' | 'grid'

export type CollectionProps<Item = unknown> = {
  items?: Item[] | null
  /** Intent: data is being loaded or refreshed. */
  pending?: boolean
  error?: unknown
  layout?: CollectionLayout
  /** Grid column count (progressive disclosure). */
  columns?: number
  emptyTitle?: string
  emptyDescription?: string
  errorTitle?: string
  /** Skeleton placeholders on first load. */
  skeletonCount?: number
}

const props = withDefaults(defineProps<CollectionProps<T>>(), {
  items: () => [],
  pending: false,
  error: undefined,
  layout: 'stack',
  columns: 3,
  emptyTitle: 'Nothing here yet',
  emptyDescription: undefined,
  errorTitle: 'Couldn’t load this list',
  skeletonCount: undefined,
})

const emit = defineEmits<{
  retry: []
}>()

defineOptions({ name: 'PomiCollection', inheritAttrs: false })

const attrs = useAttrs()
const slots = useSlots()
const instance = getCurrentInstance()

const list = computed(() => props.items ?? [])
const hasItems = computed(() => list.value.length > 0)

/** First load: pending with no items → skeleton. Refresh: pending with items → keep list + indicator. */
const isInitialLoading = computed(() => props.pending && !hasItems.value)
const isRefreshing = computed(() => props.pending && hasItems.value)

/** Error replaces content only when there is nothing useful to show. */
const showError = computed(() => !props.pending && props.error != null && !hasItems.value)
const showEmpty = computed(() => !props.pending && props.error == null && !hasItems.value)
const showItems = computed(() => hasItems.value && !isInitialLoading.value)

const hasRetryListener = computed(() => typeof instance?.vnode.props?.onRetry === 'function')

const resolvedSkeletonCount = computed(() => {
  if (props.skeletonCount != null) return props.skeletonCount
  return props.layout === 'grid' ? props.columns * 2 : 4
})

const rootClass = computed(() =>
  cn(
    'pomi-collection',
    `pomi-collection--${props.layout}`,
    isRefreshing.value && 'pomi-collection--refreshing',
    attrs.class as string | undefined,
  ),
)

const rootStyle = computed(
  () => attrs.style as string | Record<string, string> | undefined,
)

const listClass = computed(() =>
  cn(
    'pomi-collection__list',
    props.layout === 'grid' && 'pomi-collection__list--grid',
    props.layout === 'stack' && 'pomi-collection__list--stack',
  ),
)

const listStyle = computed(() => {
  if (props.layout !== 'grid') return undefined
  return {
    gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))`,
  }
})

const fallthroughAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs
  return rest
})

function onRetry() {
  emit('retry')
}
</script>

<template>
  <div
    :class="rootClass"
    :style="rootStyle"
    v-bind="fallthroughAttrs"
    :aria-busy="pending || undefined"
  >
    <div v-if="isInitialLoading" class="pomi-collection__skeleton" role="status" aria-live="polite">
      <slot name="skeleton">
        <div :class="listClass" :style="listStyle">
          <template v-if="layout === 'grid'">
            <Skeleton
              v-for="i in resolvedSkeletonCount"
              :key="i"
              variant="rect"
              height="7rem"
            />
          </template>
          <template v-else>
            <div
              v-for="i in resolvedSkeletonCount"
              :key="i"
              class="pomi-collection__skeleton-row"
            >
              <Skeleton variant="circle" width="2.25rem" height="2.25rem" />
              <Skeleton :lines="2" />
            </div>
          </template>
        </div>
      </slot>
      <span class="pomi-sr-only">Loading</span>
    </div>

    <div v-else-if="showError" class="pomi-collection__state">
      <slot name="error" :error="error" :retry="onRetry">
        <ErrorState
          :title="errorTitle"
          :error="error"
          v-bind="hasRetryListener ? { onRetry } : {}"
        />
      </slot>
    </div>

    <div v-else-if="showEmpty" class="pomi-collection__state">
      <slot name="empty">
        <EmptyState :title="emptyTitle" :description="emptyDescription">
          <template v-if="slots['empty-action']" #action>
            <slot name="empty-action" />
          </template>
        </EmptyState>
      </slot>
    </div>

    <div v-else-if="showItems" class="pomi-collection__body">
      <div
        v-if="isRefreshing"
        class="pomi-collection__refresh"
        role="status"
        aria-live="polite"
      >
        <span class="pomi-collection__refresh-bar" aria-hidden="true" />
        <span class="pomi-sr-only">Refreshing</span>
      </div>

      <div :class="listClass" :style="listStyle">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="pomi-collection__item"
        >
          <slot name="item" :item="item" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>
