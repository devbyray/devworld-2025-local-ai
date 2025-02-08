<script setup>
defineProps({
	title: {
		type: String,
		default: '1'
    },
    titleSize: {
        type: String,
        default: 'text-2xl'
    },
	background: {
		type: String,
		default: 'bg-yellow-500'
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
			class="max-h-[120px] max-w-[120px] flex flex-col items-center justify-center gap-2 text-center rounded-full overflow-hidden shadow-md"
			:class="{
				[background]: background,
				'w-[80px] h-[80px] p-3': size === 'normal' || !size,
				'w-[100px] h-[100px] p-3': size === 'large',
				'w-[40px] h-[40px] p-2': size === 'small'
			}"
		>
			<span :class="titleSize">{{ title }}</span>
		</div>
	</div>
</template>
