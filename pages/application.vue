<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useApplicationStore } from '~~/stores/applicationStore';
import { Subtopic } from '~~/types';

const applicationStore = useApplicationStore()
const { expandedApplication, expandedApplicationFilterType } = storeToRefs(applicationStore)
onUnmounted(() => {
  expandedApplication.value = Number()
  expandedApplicationFilterType.value = String() as Subtopic
})
</script>

<template>
  <div
    class="flex flex-col gap-8"
  >
    <ApplicationFilterWidget />
    <ApplicationDisplayWidget />
  </div>
</template>
