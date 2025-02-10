<script setup>
defineProps({
	size: {
		type: String,
		default: 'max-w-2xl'
	}
})
</script>

<template>
	<div class="grid grid-rows-4 h-full gap-4 mx-auto" :class="size ? size : 'max-w-2xl'">
        <div class=" row-span-1"></div>
		<div class="">
            <slot></slot>
        </div>
	</div>
</template>
