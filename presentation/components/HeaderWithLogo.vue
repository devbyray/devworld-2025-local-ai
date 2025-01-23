<script setup>
defineProps({
	logo: {
		type: String,
		required: true
	},
	alt: {
		type: String,
		required: true
	}
})
</script>

<template>
	<header class="flex flex-col items-center gap-4">
		<div class="w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center">
			<img :src="logo" :alt="alt" class="object-cover h-full p-4" />
		</div>

		<slot />
	</header>
</template>
