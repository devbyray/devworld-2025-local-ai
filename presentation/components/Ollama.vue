<script setup>
defineProps({
	hideTitle: {
		type: Boolean,
		default: false
	},
	size: {
		type: String,
		default: 'normal'
	}
})
</script>

<template>
	<ToolItem
		:hideTitle="hideTitle"
		title="Ollama"
		background="bg-white"
		:size="size"
		image="https://res.cloudinary.com/raymons/image/upload/v1737640972/dw2025/images/ollama-logo.png"
	/>
</template>
