<script setup>
defineProps({
	title: {
		type: String,
		default: 'Tool'
	},
	image: {
		type: String,
		default: 'ollama-logo.png'
	},
	background: {
		type: String,
		default: 'bg-white'
	},
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
	<div class="inline-flex flex-col items-center gap-1">
		<div
			class="max-h-[120px] max-w-[120px] flex flex-col items-center gap-2 text-center rounded-full overflow-hidden shadow-md"
			:class="{
				[background]: background,
				'w-[80px] h-[80px] p-3': size === 'normal' || !size,
				'w-[100px] h-[100px] p-3': size === 'large',
				'w-[40px] h-[40px] p-2': size === 'small'
			}"
		>
			<img :src="image" alt="Tool" />
		</div>
		<span v-if="!hideTitle" class="text-sm">{{ title }}</span>
	</div>
</template>
