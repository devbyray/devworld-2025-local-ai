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
		title="Github Copilot"
		background="bg-white"
		:size="size"
		image="https://res.cloudinary.com/raymons/image/upload/v1739128723/dw2025/images/github-icon.svg"
	/>
</template>
