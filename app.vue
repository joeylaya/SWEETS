<script setup>
import { useGlobalStore } from './stores/globalStore';
import { useAlgorithmStore } from './stores/algorithmStore';
import { useApplicationStore } from './stores/applicationStore';

useHead({
  link: [
    { rel:"icon", href:"/favicon.ico" },
    { rel:"preconnect", href:"https://fonts.googleapis.com" },
    { rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin:true },
    { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Questrial&family=Rubik:wght@300;400;500;600;700;800;900&display=swap" }
  ]
})

// Prep for data fetching and storing
const globalStore = useGlobalStore()
const applicationStore = useApplicationStore()
const algorithmStore = useAlgorithmStore()
const route = useRoute()
const seconds = new Date().getUTCSeconds()
const key = route.path + seconds

// Global data
const { data: topics } = useLazyAsyncData(
  `api/Topic/${key}`, () => $fetch('/api/Topic')
)
watch(
  [topics],
  ([newTopics]) => {
    globalStore.topics = newTopics
  }
)

// Application data
const { data: applications } = useLazyAsyncData(
  `api/Application/${key}`, () => $fetch('/api/Application')
)
const { data: application_algorithms } = useLazyAsyncData(
  `api/Application_Algorithm/${key}`, () => $fetch('/api/Application_Algorithm')
)
const { data: application_algorithmTypes } = useLazyAsyncData(
  `api/Application_AlgorithmType/${key}`, () => $fetch('/api/Application_AlgorithmType')
)
watch(
  [applications, application_algorithms, application_algorithmTypes],
  ([newApplications, newApplication_algorithms, newApplication_algorithmTypes]) => {
  applicationStore.applications = newApplications
  applicationStore.applicationRelations.algorithm = newApplication_algorithms
  applicationStore.applicationRelations.algorithmType = newApplication_algorithmTypes
})

// Algorithm data
const { data: algorithms } = useLazyAsyncData(
  `api/Algorithm/${key}`, () => $fetch('/api/Algorithm')
)
const { data: algorithmTypes } = useLazyAsyncData(
  `api/AlgorithmType/${key}`, () => $fetch('/api/AlgorithmType')
)
const { data: algorithm_algorithmTypes } = useLazyAsyncData(
  `api/Algorithm_AlgorithmType/${key}`, () => $fetch('/api/Algorithm_AlgorithmType')
)
watch(
  [algorithms, algorithmTypes, algorithm_algorithmTypes],
  ([newAlgorithms, newAlgorithmTypes, newAlgorithm_algorithmTypes]) => {
    algorithmStore.algorithms = newAlgorithms
    algorithmStore.algorithmTypes = newAlgorithmTypes
    algorithmStore.algorithmRelations.algorithmType = newAlgorithm_algorithmTypes
  }
)

// Add screen resize listener
const resizeListener = (event) => globalStore.updateScreenSize(event.target.innerWidth)
onBeforeMount(() => {
  if (process.client) globalStore.updateScreenSize(window.innerWidth)
  window.addEventListener('resize', resizeListener)
})
onBeforeUnmount(() => window.removeEventListener('resize', resizeListener))

// Get layout type
const layout = computed(() => {
  if (route.path == '/') return 'landing'
  return 'default'
})

</script>

<template>
  <div
    class="
      -m-2 min-w-screen min-h-screen
      font-body text-neutral-600 bg-neutral-50
      dark:(text-neutral-100 bg-neutral-900)
    "
  >
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
