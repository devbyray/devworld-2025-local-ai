<script setup>
defineProps({
	source: {
		type: String,
		default: undefined
	},
	poster: {
		type: String,
		default: '../images/screens/images/ollama-llama-3-1-terminal.png'
	}
})
</script>

<template>
	<SlidevVideo
		class="object-cover object-center w-full h-auto"
		preload="auto"
		autoplay
		controls
		loop
		muted
		playsinline
		width="500"
		:poster="poster"
	>
		<source :src="source" type="video/mp4" />
	</SlidevVideo>
</template>
