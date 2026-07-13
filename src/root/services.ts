import {
  getSharedDialogStore,
  resetSharedDialogStore,
} from '../composables/useDialog'
import {
  getSharedToastStore,
  resetSharedToastStore,
} from '../composables/useToast'

let overlayMounted = false

export function getPomikitServices(toastDuration = 4200) {
  return {
    dialog: getSharedDialogStore(),
    toast: getSharedToastStore(toastDuration),
  }
}

export function resetPomikitServices() {
  resetSharedDialogStore()
  resetSharedToastStore()
  overlayMounted = false
}

export function getDialogApi() {
  return getSharedDialogStore().api
}

export function getToastApi() {
  return getSharedToastStore()
}

export function markOverlaysMounted() {
  overlayMounted = true
}

export function areOverlaysMounted() {
  return overlayMounted
}
