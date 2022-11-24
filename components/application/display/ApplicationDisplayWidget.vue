<script setup>
import { storeToRefs } from 'pinia';
import { useApplicationStore } from '~~/stores/applicationStore';

// Get applications
const applicationStore = useApplicationStore()
const { applications } = storeToRefs(applicationStore)

</script>

<template>
  <section class="flex flex-wrap gap-8 justify-start">
    <div
      v-for="application in applications"
      :key="application.id"
    >
      <ApplicationDisplayCard :="application" />
    </div>
  </section>
</template>
