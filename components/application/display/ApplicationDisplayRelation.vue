<script setup>
const props = defineProps(['relationType', 'type'])

const title = computed(() => {
  return convertSlugToTitle(props.type)
})
</script>

<template>
  <section class="flex flex-col gap-1 place-items-start">
    <header>
      <h5 class="font-header font-medium text-xs text-neutral-400">{{ title }}</h5>
    </header>
    <div class="flex flex-wrap gap-1">
      <div
        v-for="relation in relationType"
        :key="relation.id"
      >
        <div class="bg-primary-200 px-2 py-0.5 rounded-full">
          <p class="font-header font-semibold text-xs text-primary-500">{{ relation.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
