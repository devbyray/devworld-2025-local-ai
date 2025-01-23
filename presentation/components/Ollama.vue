<script setup>
defineProps({
	hideTitle: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<ToolItem
		:hideTitle="hideTitle"
		title="Ollama"
		background="bg-yellow-500"
		image="https://res.cloudinary.com/raymons/image/upload/v1737640972/dw2025/images/ollama-logo.png"
	/>
</template>
