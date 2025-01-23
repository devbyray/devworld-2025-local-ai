<script setup>
defineProps({
	size: {
		type: String,
		default: 'max-w-2xl'
	}
})
</script>

<template>
	<div class="flex flex-col justify-center items-center h-full gap-4 mx-auto" :class="size ? size : 'max-w-2xl'">
		<slot></slot>
	</div>
</template>
