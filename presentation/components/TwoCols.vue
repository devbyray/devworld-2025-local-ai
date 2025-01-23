<script setup>
defineProps({
	bg: {
		type: String,
		default: undefined
	},
	typeBg: {
		type: String,
		default: 'image'
	},
	videoPoster: {
		type: String,
		default: '../images/screens/images/ollama-llama-3-1-terminal.png'
	}
})
</script>

<template>
	<div class="flex flex-row h-full gap-4 relative pl-[50%]">
		<div v-if="bg" class="h-[100%] fixed w-[50%] top-0 left-0">
			<img v-if="typeBg === 'image'" :src="bg" class="object-cover object-center w-full h-full" alt="Col bg" />
			<div v-if="typeBg === 'video'" class="flex items-center justify-center w-full h-full">
				<SlidevVideo
					class="object-cover object-center w-full h-auto"
					preload="auto"
					autoplay
					controls
					loop
					muted
					playsinline
					width="500"
					:poster="videoPoster"
				>
					<source :src="bg" type="video/mp4" />
				</SlidevVideo>
			</div>
		</div>
		<div class="pl-8 col-1 flex flex-col justify-center gap-4">
			<slot />
		</div>
	</div>
</template>
