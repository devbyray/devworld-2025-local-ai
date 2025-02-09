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
		title="ChatGPT"
		background="bg-[#75ac9d]"
		:size="size"
		image="https://res.cloudinary.com/raymons/image/upload/v1739129721/dw2025/images/512px-ChatGPT_logo.svg.png"
	/>
</template>
