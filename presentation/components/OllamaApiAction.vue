<template>
	<div class="w-full flex flex-col gap-3">
		<button @click="callApi" class="bg-green-500 text-black px-3 py-2 rounded-xl">
			<span v-if="!loading">Call Ollama</span> <span v-if="loading">Loading...</span>
		</button>

		<pre class="bg-slate-800 w-full p-3 rounded-xl min-h-[200px] overflow-auto text-xs">{{
			JSON.stringify(response, null, 2)
		}}</pre>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const response = ref(null)
const loading = ref(false)

const cleanResponse = data => {
	const { context, ...cleanedData } = data
	return cleanedData
}

const callApi = async () => {
	loading.value = true
	const res = await fetch('http://localhost:11434/api/generate', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			model: 'llama3.2',
			prompt: 'What is the difference between a library and framework in the perspective of a developer?',
			stream: false
		})
	})
	const data = await res.json()
	response.value = cleanResponse(data)
	loading.value = false
}
</script>
