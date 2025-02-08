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
		:size="size"
		title="LM Studio"
		background="bg-[#301671]"
		image="https://res.cloudinary.com/raymons/image/upload/v1737643879/dw2025/images/lm-studio-logo.png"
	/>
</template>
