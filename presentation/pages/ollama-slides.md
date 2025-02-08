<img src="./images/ollama-website.png" alt="Ollama website" />

_[Ollama🔗](https://ollama.com)_

<!--

# Who has tried Ollama?

 -->

---

## Platforms

<img src="./images/ollama-download.png" alt="Ollama downloads" />

<!--

## Ollama runs the platforms

- MacOS
- Linux
- Windows
- Docker

 -->

---

<TwoCols bg="../images/ollama-llama-3-1.png">

<div class="flex gap-4 flex-col">

<Ollama />

## _Run open-source LLMs on your computer._

- ✅**Customization**
- ✅**Chat with your files**
- ✅**API**
- ✅ Multiple opensource LLM's
	- LLama3
	- Mistral
	- Gemma 2
	- DeepSeek

</div>

</TwoCols>

<!--

- **Goal:** Run open-source LLMs on a local computer. Like LLama3, Mistral, Gemma 2, and DeepSeek.
- **Customise:** Create your own version of an LLM by setting the temperature, system prompt, and more.
- **Chat with your files:** Can check files on your computer if you provide the path as context for a prompt.
- **API:** Easy to use API for integration with other tools. Or you could build a tool yourself. The API is highly inspired by the OpenAI API for ChatGPT.

 -->

---

<TwoCols bg="https://res.cloudinary.com/raymons/video/upload/v1737640806/dw2025/videos/ollama-llama3.1-terminal.mp4" videoPoster="./images/ollama-llama-3-1-terminal.png" typeBg="video">

<Ollama hideTitle />

## Ollama via Terminal

- `ollama list`
- `ollama pull llama3.1:latest`
- `ollama run llama3.1:latest`

</TwoCols>

<!--

## Usage via Terminal

- You can use the command `ollama list` for showing all the downloaded LLM's
- You can use the command `ollama pull llama3.1:latest` for downloading the LLM
- You can use the command `ollama run llama3.1:latest` for starting a session with LLama3.1

Check the website of Ollama for all the LLM's that are available.

 -->

---



<Ollama hideTitle />

## Ollama: API

<div class="flex flex-row gap-4 w-full">

<div>

### Request

```
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
```

</div>
<div>

### Result

```json
{
	"model": "llama3.2",
	"created_at": "2023-08-04T19:22:45.499127Z",
	"response": "The sky is blue because it is the color of the sky.",
	"done": true,
	"context": [1, 2, 3],
	"total_duration": 5043500667,
	"load_duration": 5025959,
	"prompt_eval_count": 26,
	"prompt_eval_duration": 325953000,
	"eval_count": 290,
	"eval_duration": 4709213000
}
```

</div>

</div>

---



<Ollama hideTitle />

## Ollama: API

<div class="flex flex-row gap-4 w-full">

<OllamaApiAction   />

</div>

<!--

## This is how the Ollama API works

### You can use it to:

- build your own tools or applications
- connect with existing tools
- I build something cool as well!

 -->

---



## [Financial Market Checker](https://github.com/devbyray/financial-market-checker)

<div class=" w-[600px]">

<Video source="https://res.cloudinary.com/raymons/video/upload/v1738831040/dw2025/videos/jarrznm4d0pwrrmnvlop.mp4" />

</div>

<!--

## Financial Market Checker

- NodeJS CLI prject
- Build with Ollama and Bitvavo API
- Is it smart to invest money now?

## Findings

- Not the best advice because of lack of data
- How can we solve that?

 -->

---



## How to get better answers with Local AI?

### We need more data!

<div class=" w-[600px]">

</div>

---

## How can we achieve this?

- Store data in a vector database
- Connect Ollama with vectore database

<div class=" w-[600px]">

</div>
