<script setup>
const { data, error, pending } = await useFetch('https://devworldconference.com/api/page?eventId=5&path=/speakers', { method: 'get' })
const componentData = computed(() => data?.value?.mainArea?.find(item => item.component === "ComponentNewSpeakerCardList"))
</script>

<template>
  <div class="bg-[#1a1a1a]">
  <header class="p-5 text-center py-12 sticky top-0 bg-[#1a1a1a] z-10">
    <div class="flex flex-row justify-center gap-6">
      <img width="80" src="https://images.jsworldconference.com/devworld_b41c690105.png">
    <h1 class="font-bold text-5xl text-white">DevWorld Conference</h1>
    </div>
  <h2 class="font-bold text-2xl text-white">Speakers 2025</h2>
  </header>
  <div v-if="error">Error: {{ error }}</div>
  <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
      <template v-if="pending">
        <div v-for="n in 8" :key="n">
          <LoadingSkeleton />
        </div>
      </template>
      <template v-else>
          <div v-for="(speaker, index) in componentData?.config?.speakers"
               :key="index"
               class="relative rounded-xl overflow-hidden bg-[#2a2a2a] transition-transform hover:scale-105">
            <div class="relative">
          <img
              :src="speaker?.person?.photo?.url"
            :alt="speaker?.person?.displayName"
                class="w-full aspect-square object-cover"
              loading="lazy"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-green-500/30 to-transparent"></div>
          </div>
            <div class="p-4">
              <h3 class="text-white text-lg font-bold mb-1">{{ speaker?.person?.displayName }}</h3>
              <p class="text-dev-green text-sm mb-2">{{ speaker?.person?.organization?.name }}</p>
              <p class="text-gray-300 text-sm leading-relaxed">
                <a :href="speaker?.person?.organization?.website" class="hover:underline">
                  {{ speaker?.organization?.name }}
                </a>
              </p>
        </div>
    </div>
</template>
      </div>
    </div>
  </div>
</template>


