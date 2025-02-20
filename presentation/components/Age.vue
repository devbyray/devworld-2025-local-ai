<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
	dob: {
		type: String,
		required: true
	}
})

const parseDate = dateStr => {
	const [day, month, year] = dateStr.split('-').map(Number)
	return new Date(year, month - 1, day)
}

const currentUnit = ref(1)
const units = ['days', 'years']

const displayAge = computed(() => {
	const ageInMilliseconds = new Date() - parseDate(props.dob)
	switch (units[currentUnit.value]) {
		case 'days':
			return `${Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24))} days`
		default:
			return `${Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25))} years`
	}
})
</script>

<template>
	<div>{{ displayAge }}</div>
</template>

<style scoped>
div {
	cursor: pointer;
}
</style>
