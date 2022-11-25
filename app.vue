<script setup lang="ts">
import { supabase } from './supabase';
import { useGlobalStore } from './stores/globalStore';
import { useAlgorithmStore } from './stores/algorithmStore';
import { useApplicationStore } from './stores/applicationStore';
import { storeToRefs } from 'pinia';
import { Topic, Application, Application_Algorithm, Application_AlgorithmType, Algorithm, AlgorithmType, Algorithm_AlgorithmType} from './types';

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
const { topics, isDarkMode } = storeToRefs(globalStore)
const { applications, applicationRelations } = storeToRefs(applicationStore)
const { algorithms, algorithmTypes, algorithmRelations } = storeToRefs(algorithmStore)

// Fetch global data
const { data: topicData } = await supabase.from('Topic').select('*')
topics.value = topicData as Array<Topic>

// Fetch application data
const { data: applicationData } = await supabase.from('Application').select('*')
const { data: application_algorithmData } = await supabase.from('Application_Algorithm').select('*')
const { data: application_algorithmTypeData } = await supabase.from('Application_AlgorithmType').select('*')
applications.value = applicationData as Array<Application>
applicationRelations.value = {
  algorithm: application_algorithmData as Array<Application_Algorithm>,
  algorithmType: application_algorithmTypeData as Array<Application_AlgorithmType>,
  application: []
}
applicationStore.updateFilteredApplications()

// Fetch algorithm data
const { data: algorithmData } = await supabase.from('Algorithm').select('*')
const { data: algorithmTypeData } = await supabase.from('AlgorithmType').select('*')
const { data: algorithm_algorithmTypeData } = await supabase.from('Algorithm_AlgorithmType').select('*')
algorithms.value = algorithmData as Array<Algorithm>
algorithmTypes.value = algorithmTypeData as Array<AlgorithmType>
algorithmRelations.value = {
  algorithm: [],
  algorithmType: algorithm_algorithmTypeData as Array<Algorithm_AlgorithmType>,
  application: []
}

// Add screen resize listener
const resizeListener = (event) => globalStore.updateScreenSize(event.target.innerWidth)
onBeforeMount(() => {
  if (process.client) globalStore.updateScreenSize(window.innerWidth)
  window.addEventListener('resize', resizeListener)
})
onBeforeUnmount(() => window.removeEventListener('resize', resizeListener))

// Get layout type
const route = useRoute()
const layout = computed(() => {
  if (route.path == '/') return 'landing'
  return 'default'
})
</script>

<template>
  <div
    class="w-screen max-w-screen h-auto min-h-screen font-body"
    :class="isDarkMode ? 'dark text-neutral-100 bg-neutral-900' : 'text-neutral-600 bg-neutral-50'"
  >
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
