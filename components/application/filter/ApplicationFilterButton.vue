<script setup>
import { storeToRefs } from 'pinia';
import { useApplicationStore } from '~~/stores/applicationStore';

// Props
const props = defineProps(['id', 'name', 'type'])

// Application filters
const applicationStore = useApplicationStore()
const { activeApplicationFilters } = storeToRefs(applicationStore)

const toggleApplicationFilters = () => {
  applicationStore.toggleApplicationFilters(props.type, props.id)
}
const selected = computed(() => {
  return activeApplicationFilters.value[props.type].includes(props.id)
})
</script>

<template>
  <button
    class="
      px-2 py-1 rounded-lg
      bg-neutral-200 dark:(bg-neutral-600)
      hover:()
    "
    :class="selected ? 'bg-primary-200 text-primary-500' : ''"
    @click="toggleApplicationFilters"
  >
    <h5 class="font-header font-medium text-sm">{{id}}. {{name}}</h5>
  </button>
</template>
