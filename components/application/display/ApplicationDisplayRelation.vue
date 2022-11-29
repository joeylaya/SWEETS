<script setup lang="ts">
import { useApplicationStore } from '~~/stores/applicationStore';
const props = defineProps(['relationType', 'type'])

const title = computed(() => {
  return convertSlugToTitle(props.type)
})

const applicationStore = useApplicationStore()
const filterByTag = (id: number) => {
  applicationStore.resetFilters()
  applicationStore.toggleApplicationFilters(props.type, id)
}
</script>

<template>
  <section class="flex flex-col place-items-start">
    <header>
      <h5 class="font-header font-medium tracking-wide text-xs text-neutral-400">{{ title }}</h5>
    </header>
    <div class="flex flex-wrap gap-1">
      <div
        v-for="relation in relationType"
        :key="relation.id"
      >
        <button
          class="bg-primary-200 px-2 rounded-full dark:(bg-primary-300)"
          @click="filterByTag(relation.id)"
        >
          <p class="font-header font-semibold text-xs py-1 leading-none text-primary-500 dark:(text-primary-600)">{{ relation.name }}</p>
        </button>
      </div>
    </div>
  </section>
</template>
