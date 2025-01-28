<script setup>
defineProps({
	className: {
		type: String,
		default: 'bg-black'
	}
})
</script>
<template>
	<div
		class="flex flex-col text-sm aspect-square bg-black rounded-lg items-center gap-4 justify-center py-6 px-4 text-center active:bg-slate-900 transition-all"
		:class="className"
	>
		<slot />
	</div>
</template>
