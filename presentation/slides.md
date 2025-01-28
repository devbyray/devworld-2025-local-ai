---
class: text-center
drawings:
    persist: false
transition: slide-left
mdc: true

title: Empowering Developers with Local AI 🚀
author: Raymon S
---

<Center>

# Empowering Developers with Local AI 🚀

</Center>

---

<Center>

## 📋 Agenda

1. Why Local AI Solutions Matter
2. Local AI Developer Tools
3. Continue.dev + LM Studio (demo)
4. Key Takeaways & Resources
5. Q&A

</Center>

---

<Center size="max-w-lg">

## 🎯 What to Expect

- **Learn** how local AI tools can improve your workflow.
- **Discover** privacy-first and offline solutions.
- **See** real-world demos with:

<div class="flex flex-row gap-4 pt-4">
    <Ollama />
    <OpenWebUI />
    <LmStudio />
    <Continue />
</div>

</Center>

---

<Center>

<header>

## 🧑‍💻 About Me

</header>

<div>

- **Raymon Schouwenaar**
- <Age dob="14-05-1988" />
- **Tech Lead** at SBB via ShareValue.
- Passionate about: - Frontend Development - Integrating AI into development workflows. - Sharing knowledge. - Help junior developers grow.

</div>

</Center>

---

<Center>

## Let's talk Local AI 🤖

</Center>

---

<Center>

## 🤔 What do I mean with Local AI?

Running LLM's on a local computer

</Center>

<!--

# When I talk about local AI

- I mean running LLM's on my computer
- Not advanced AI like OpenAI or other companies
- But local LLM's helping me with development work

 -->

---

<Center>

## 🤔 Why Local AI?

- ✅ **Privacy**
- ✅ **Prevent Data Leaks**
- ✅ **Cost Efficiency** \*
- ✅ **Control**
- ✅ **Speed** \*

<div v-click>

_\* Yes you may need a more powerful computer_ 😅

</div>

</Center>

<!--

- ✅ **Privacy:** Your data stays on your machine.
- ✅ **Prevent Data Leaks:** Very low risk of leaks or external dependencies.
- ✅ **Cost Efficiency:** Save on expensive cloud subscriptions\*.
- ✅ **Control:** You control the data that goes in.
- ✅ **Speed:** Run AI locally without internet latency\*.

## * Yes you may need a more powerful computer


 -->

---

<Center>

## 🔧 Tools

<div class="max-h-[200px] flex justify-center flex-row gap-4">
    <Card>
        <Ollama  size="small" /> 
        Run local AI model  with API support.
    </Card>
    <Card>
        <LmStudio  size="small" /> 
        User-friendly GUI for running local AI with API support.
    </Card>

</div>
<div class="max-h-[200px] flex justify-center flex-row gap-4">
    <Card>
        <OpenWebUI  size="small" /> 
        ChatGPT alternative that works with Ollama
    </Card>
    <Card>
        <Continue  size="small" /> 
        Copilot alternative that works with Ollama, LM Studio and more.
    </Card>

</div>

</Center>

<!--

### I want to introduce you to my favorite tools

#### **Ollama:**
With Ollama you can run local LLM's and they offer a API.

#### **LM Studio:**
LM Studio is a User-friendly interface for running local LLM's, and also offer a API.

#### **Open Web UI:**
Open Web UI is a Flexible, open-source alternative to ChatGPT. It's a true

#### **Continue.dev:**
Copilot alternative that works with Ollama, LM Studio and more.

 -->

---

<Center>

<img src="./images/ollama-website.png" alt="Ollama website" />

_[Ollama🔗](https://ollama.com)_

</Center>

<!--

# Who has tried Ollama?

 -->

---

<Center>

## Platforms

<img src="./images/ollama-download.png" alt="Ollama downloads" />

</Center>

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

<Center size="max-w-4xl">

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

</Center>

<!--

## This is how the Ollama API works

### You can use it to:

- build your own tools or applications
- connect with existing tools

 -->

---

<Center>

<LmStudio />

</Center>

<!--

## Next tools is LM studio

 -->

---

<Center>

<LmStudio hideTitle />

## LM Studio

- 🧩 User-friendly.
- 🔗 Intergrates with other tools
- 📴 Offline usage
- 📚 Large library of LLMs

</Center>

<!--

## Why use LM Studio?

- 🧩 User-friendly interface for local AI models.
- 🔗 Integrates with coding assistants and other tools
- 📴 Offline usage
- 📚 Large library of LLMs
- ⚡ Practical use cases:
    - Use local LLM's from Ollama and huggingface
    - Set system prompts, temprature, structured output
    - Use GPU

 -->

---

<Center>

## 🌐 Open Web UI: AI Without Cloud

### Key Features

- 🛠️ Customize workflows locally.
- 🚀 Flexible open-source alternative to proprietary platforms.
- 🌍 Supports local LLMs for enhanced privacy.

</Center>

---

<Center>

## 🎥 Live Demo: Continue.dev + DeepSeek Coder

### What You’ll See:

1️⃣ **Code Reviews:** Real-time suggestions for improving code.  
2️⃣ **Refactoring:** Simplify and optimize code with AI assistance.  
3️⃣ **Productivity Boost:** Simulated live coding with local AI tools.

</Center>

---

<Center>

## 🎁 Key Takeaways

- **Privacy-First Development:** Local AI keeps your data safe.
- **Affordable & Accessible:** No need for expensive subscriptions.
- **Powerful Alternatives:** **Continue.dev + Ollama** can rival GitHub Copilot.
- **Automation Made Easy:** Tools like **n8n** eliminate repetitive tasks.

</Center>

---

<Center>

## ❓ Q&A

Let’s discuss:

- Your concerns about local AI.
- How to integrate these tools into your workflow.
- Challenges and solutions for local AI adoption.

</Center>

---

<Center>

## 📂 Resources

- **Ollama:** [ollama.com](https://ollama.com)
- **LM Studio:** [lmstudio.ai](https://lmstudio.ai)
- **Open Web UI:** [openwebui.ai](https://openwebui.ai)
- **Continue.dev:** [continue.dev](https://continue.dev)
- **My Blog:** [byrayray.dev](https://byrayray.dev)

</Center>
