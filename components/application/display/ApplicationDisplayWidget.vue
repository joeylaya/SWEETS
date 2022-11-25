<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useApplicationStore } from '~~/stores/applicationStore';

// Get applications
const applicationStore = useApplicationStore()
const { filteredApplications, applicationRelations } = storeToRefs(applicationStore)
console.log(applicationRelations.value)
</script>

<template>
  <section class="flex flex-wrap gap-4 justify-start">
    <div
      v-for="application in filteredApplications"
      :key="application.id"
    >
      <ApplicationDisplayCard :="application" />
    </div>
  </section>
</template>
