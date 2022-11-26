<script setup>
const props = defineProps(['relationType', 'type'])

const title = computed(() => {
  return convertSlugToTitle(props.type)
})
</script>

<template>
  <section class="flex flex-col gap-1 place-items-start">
    <header>
      <h5 class="font-header font-medium tracking-wide text-xs text-neutral-400">{{ title }}</h5>
    </header>
    <div class="flex flex-wrap gap-1">
      <div
        v-for="relation in relationType"
        :key="relation.id"
      >
        <div class="bg-primary-200 px-2 rounded-full dark:(bg-primary-300)">
          <p class="font-header font-semibold text-xs text-primary-500 dark:(text-primary-600)">{{ relation.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
