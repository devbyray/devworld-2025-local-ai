---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
# some information about your slides (markdown enabled)
info: |
    ## Slidev Starter Template
    Presentation slides for developers.

    Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
    persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
title: Empowering Developers with local AI 🚀
author: Raymon S

themeConfig:
  primary: '#09DE6B'
favicon: 'https://byrayray.dev/apple-touch-icon.png'
---

<LowerThird>

# Empowering Developers with local AI 🚀

</LowerThird>

---
layout: image-right
image: https://images.unsplash.com/photo-1727434032792-c7ef921ae086?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# Agenda

- Why use local AI
- Open source LLM's
- Ollama
- LM Studio
- Continue.dev
- OpenWebUI

---
layout: image-left
image: https://res.cloudinary.com/raymons/image/upload/v1739044905/dw2025/images/144310DSC05136.jpg
backgroundSize: cover
---
# Who Am I?
- 👋 I’m Raymon 
- 📅 36 years
- 🧑‍💻 Tech Lead at SBB
- 🤖 I love working with, talking with, and playing with AI 
- 🫶 Frontend Development is my specialty for <Age dob="01-09-2010" /> 

---
layout: quote
class: text-center
---

<Center>


# _In preparation_

<img src="https://media.licdn.com/dms/image/v2/D4E22AQGo50O8hfOmPA/feedshare-shrink_800/B4EZTwR0jKGgAk-/0/1739197991647?e=1743033600&v=beta&t=kdDzvkR30zhnoYvSx0dPANBfL9GyIfFW7Q-QxIKBTsg" width="400" />

</Center>

---
layout: image-right
image: https://images.unsplash.com/photo-1738107445976-9fbed007121f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
backgroundSize: cover
---

# Who is using AI at work?
- ChatGPT
- Github Copilot
- Google Gemini 
- Claude
- Mistral AI
- DeepSeek?

---

<TwoCols bg="https://res.cloudinary.com/raymons/image/upload/v1740083331/dw2025/images/statistic_id1483838_most-used-ai-search-and-developer-tools-among-developers-worldwide-2024.png">

# 👈 You are not alone!


</TwoCols>


---

<TwoCols bg="https://res.cloudinary.com/raymons/image/upload/v1740083331/dw2025/images/statistic_id1401409_most-popular-uses-of-ai-in-the-development-workflow-globally-2024.png">

# 😲 A lot of developers use AI while writing code


</TwoCols>


---
layout: image-left
image: https://images.unsplash.com/photo-1738107450287-8ccd5a2f8806?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---
# The AI landscape has changed a lot!

- xAi launched Grok 3 
- DeepSeek open sourced R1
- Github Copilot keeps adding LLM's
- OpenAI launched 03 mini
- Meta open sourced LLama3.2 and 3.3
- Google Gemini 2.0
- and so much more...

---
layout: image-right
image: https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGRkanZodjI0bHZpejBha2o2Mzhxdnk0cjZsZndobnNuNW1yam13bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wUmp8UfCWdOA4BOZqT/giphy.gif
---

# But, what if...

- Github Copilot or ChatGPT goes down?
- Your connection dropped?
- Github Copilot has errors?
- What are you going to do?

<!-- 

## What if...

- Github Copilot or ChatGPT goes down?
- Your connection dropped?
- Github Copilot has errors?
- What are you going to do?

 -->

---
layout: image
image: https://res.cloudinary.com/raymons/image/upload/v1739049194/dw2025/images/copilot-error.png
class: text-center
---

<LowerThird>

# Github Copilot Broke

</LowerThird>

---
class: text-center
---

<div class="h-full flex items-center flex-row justify-center">
    <div class=" grid grid-cols-2 gap-4">
        <div class=" col-span-2 flex justify-center items-center">
            <h2> local AI to the rescue 🛟 </h2>
        </div>
        <Card>
            <Ollama  /> 
        </Card>
        <Card>
            <OpenWebUI /> 
        </Card>
        <Card>
            <LmStudio /> 
        </Card>
        <Card>
            <Continue  /> 
        </Card>
    </div>
</div>

<!-- 

## local AI to the rescue

- Ollama: Developer friendly way to run open source LLMs locally
- OpenWebUI: ChatGPT alternative which you can connect to Ollama
- LM Studio: More friendly for non-developers to run open source LLMs via a GUI
- Continue.dev: IDE extension for Visual Studio Code and JetBrains to use multiple LLMs as AI coding assistant.

 -->
---
layout: image
image: https://res.cloudinary.com/raymons/image/upload/v1739050286/dw2025/images/add-route-dotnet-continue-dev-landscape.png
class: text-center
---

<!-- 

## I had a real world problem!

1. I had to add a new route to a Dotnet application
2. Since I'm not a .Net developer, I had no idea
3. Microsoft it's documentation is not my favorite

 -->
---

<div class="h-full flex items-center flex-row justify-center">
    <div class=" grid grid-cols-2 gap-4">
        <div class=" col-span-2 flex justify-center items-center">
            <h2> How did I overcome this issue? </h2>
        </div>
        <Card>
            <LmStudio /> 
        </Card>
        <Card>
            <Continue  /> 
        </Card>
    </div>
</div>

---
layout: image-right
image: https://res.cloudinary.com/raymons/image/upload/v1739050210/dw2025/images/add-route-dotnet-continue-dev-1.png
---

## What did I use?
- I had **LM Studio** already installed
- Installed **Qwen 2.5 coder 7B**  
- I installed **Continue.dev**
- Continued to work 💪


<!-- 

## What did I use?

- LM Studio was already installed on my computer
- I installed **Qwen 2.5 coder 7B** locally
- I installed **Continue.dev** in my Visual Studio Code
- And continued to work in no time!

 -->
---
layout: quote
class: text-center
---

# Let's dive into the world of local AI

## _I'll take you on a journey_

---
layout: quote
class: text-center
---

<Circle title="1" titleSize="font-bold text-6xl text-black font-italic" />

_Running LLMs locally_

---
class: text-center
---


<div class="h-full flex items-center flex-row justify-center">
    <div class=" grid grid-cols-3 gap-4">
        <div class=" col-span-3 flex justify-center items-center">
            <span class="pr-2"><Circle title="1" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Install</em>
        </div>
        <Card>
            <LmStudio /> 
        </Card>
        <Card>
            <h2>OR</h2>
        </Card>
        <Card>
            <Ollama  /> 
        </Card>
    </div>
</div>

<!-- 

## To run LLMs locally you need
- Ollama
- OR
- LM Studio

But you can try out which one you like

 -->

---
layout: image-left
image: https://res.cloudinary.com/raymons/image/upload/v1739051820/dw2025/images/714bd8f9-3f6f-4568-8b68-c32114a3fa59.png
---

<header class="mb-12">
<span class="pr-2"><Circle title="1" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Install LM Studio</em>
</header>


<LmStudio class="mb-4" />

- 🧑‍💻 Open source
- 🧩 User-friendly.
- 🔗 Integrates with other tools
- 📴 Offline usage
- 📚 Large library of LLMs

<!--

## Why use LM Studio?

- 🧑‍💻 Open source
- 🧩 User-friendly interface for local AI models.
- 🔗 Integrates with coding assistants and other tools
- 📴 Offline usage (you need internet to download a LLM)
- 📚 Large library of LLMs from multiple sources like: Ollama and huggingface
- ⚡ Practical use cases:
    - Use local LLMs from Ollama and huggingface
    - Set system prompts, temperature, structured output

 -->

---
layout: quote
class: text-center
---

<header class="mb-12">
<span class="pr-2"><Circle title="2" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Use LM Studio</em>
</header>

<LmStudio class="mb-4" />

## Demo time: LM Studio

Ask `LLama3.2:3B`:

```text
What is the difference between a library and framework in the perspective of a developer?
```

<!-- 

1. Open LM Studio
2. Show modes
3. Show LLM Library
4. Start new chat with LLama3.2:3B
5. What is the difference between a library and framework in the perspective of a developer?

 -->

---
image: https://res.cloudinary.com/raymons/image/upload/v1737640973/dw2025/images/ollama-website.png
layout: image-right
---

<header class="mb-12">
<span class="pr-2"><Circle title="3" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Install Ollama</em>
</header>

<Ollama class="mb-4" />

- 🧑‍💻 Open source
- 🧑‍💻 Terminal based
- 🔗 Offers REST API 
- 🧩 Integrates with coding assistants and other tools
- 📴 Offline usage
- 🥇 The best open source LLMs 

<!-- 


## Ollama

- 🧑‍💻 Open source
- 🧑‍💻 Is Terminal based
- 🔗 Offers REST API to connect with your own applications
- 🧩 Integrates with coding assistants and other tools
- 📴 Of course you can use it offline (you need internet to download a LLM)
- 🥇 The best open source LLMs 

 -->

---
layout: quote
class: text-center
---

<header class="mb-12">
<span class="pr-2"><Circle title="4" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Use Ollama</em>
</header>

<Ollama class="mb-4" />

## Demo time: Ollama

Ask `LLama3.2 3B`:

```text
What is the difference between a library and a framework from the perspective of a developer?
```

<!-- 

1. Open Terminal
2. ollama list
3. ollama pull llama3.2:3b
4. ollama run llama3.2:3b
5. What is the difference between a library and a framework from the perspective of a developer?

 -->

---
layout: quote
class: text-center
---

<header class="mb-12">
<span class="pr-2"><Circle title="5" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Use Ollama API</em>
</header>

Try [http://localhost:11434](http://localhost:11434) in your browser.


---

<header class="mb-12">
<span class="pr-2"><Circle title="6" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Use Ollama API</em>
</header>


```javascript
const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        model: 'llama3.2:3b',
        prompt: `What is the difference between
        a library and framework in the 
        perspective of a developer?`,
        stream: false
    })
})
const data = await res.json()
```



<!-- 

1. The API of Ollama is very simple
2. If you used the OpenAI API, then this feels familair

 -->

---

<header class="mb-12">
<span class="pr-2"><Circle title="7" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Result of Ollama API</em>
</header>


```json
{
  "model": "llama3.2",
  "created_at": "2025-02-20T20:43:57.139198326Z",
  "response": "In the context of software development, both libraries and frameworks are used to build applications, but they serve different purposes and have distinct characteristics.\n\n**Library:**\n\nA library is a collection of pre-written code that provides a specific functionality or set of functionalities that can be easily integrated into an application. Libraries typically:\n\n1. Provide a specific feature or functionality that solves a particular problem.\n2. Are designed to be used by multiple projects, allowing developers to reuse the code.\n3. Typically do not include the underlying architecture or structure of the application.\n4. Can be used in conjunction with other libraries and frameworks.\n\nExamples of popular libraries include:\n\n* jQuery for client-side scripting\n* React Native for building mobile applications\n* TensorFlow for machine learning\n\n**Framework:**\n\nA framework, on the other hand, is a more comprehensive structure that provides a set of tools, libraries, and conventions to build an application. Frameworks typically:\n\n1. Provide a complete architecture or structure for building an application.\n2. Include a set of pre-built components, such as templates, views, and controllers.\n3. Often come with their own programming language or syntax.\n4. Encourage developers to follow a specific design pattern or approach.\n\nExamples of popular frameworks include:\n\n* React for building web applications\n* Angular for building complex web applications\n* Django for building web applications in Python\n\n**Key differences:**\n\n1. **Scope**: Libraries are typically smaller and more focused on a single functionality, while frameworks are larger and provide a more comprehensive structure.\n2. **Usage**: Libraries can be used independently, while frameworks often require the entire framework to be used.\n3. **Development style**: Libraries encourage a \"plugin-like\" development style, where developers add new functionality as needed. Frameworks, on the other hand, promote a more modular and structured approach.\n\nIn summary, libraries provide pre-built functionality that can be easily integrated into an application, while frameworks offer a complete structure and set of tools to build an entire application from scratch.\n\n**When to use each:**\n\n1. Use libraries when:\n * You need a specific feature or functionality that's not available in the framework.\n * You want to reuse code across multiple projects.\n * You prefer a more lightweight approach.\n2. Use frameworks when:\n * You're building a complex application that requires a structured architecture.\n * You want to take advantage of a pre-built set of tools and components.\n * You're willing to learn a new programming language or syntax.\n\nUltimately, the choice between using a library or framework depends on your specific needs, project requirements, and personal preferences.",
  "done": true,
  "done_reason": "stop",
  "total_duration": 11063278246,
  "load_duration": 4352626473,
  "prompt_eval_count": 41,
  "prompt_eval_duration": 422000000,
  "eval_count": 522,
  "eval_duration": 6284000000
}
```


---
image: https://res.cloudinary.com/raymons/image/upload/v1739054165/dw2025/images/26fb1209-1010-4c26-bdb3-dc1b8d734370.png
layout: image-left
---

<header class="mb-12">
<span class="pr-2"><Circle title="8" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Install Continue.dev</em>
</header>


<Continue class="mb-4" />

- 🧑‍💻 Open source
- 🧑‍💻 Extensions for VS Code & JetBrains
- 🧩 Integrates with many AI APIs
- 📴 Offline/Online usage

<!-- 


## Continue.dev

- 🧑‍💻 Open source
- 🧑‍💻 Extensions for Visual Studio Code & JetBrains IDE
- 🧩 Integrates with many AI APIs
- 📴 Offline/Online usage

 -->


---
layout: image-right
image: https://res.cloudinary.com/raymons/image/upload/v1739128074/dw2025/images/d971e674-0fdf-4dad-a701-2f845440fe34.png
---

<header class="mb-12">
<span class="pr-2"><Circle title="9" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Use Continue.dev</em>
</header>

<Continue class="mb-4" />


## Demo time: Continue.dev

Load `qwen2.5-coder-7b-instruct` in LM Studio.

```text
How can I start this .Net project via the terminal? Check my codebase
```

---
layout: image-left
image: https://res.cloudinary.com/raymons/image/upload/v1739128273/dw2025/images/942d4098-f7f2-495e-80d5-1b01e3a69d62.png
---

<header class="mb-12">
<span class="pr-2"><Circle title="10" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> <em>Use Continue.dev</em>
</header>

<Continue class="mb-4" />

## Second prompt
```text
Show me how to add a new route for the about page
```

---
layout: quote
class: text-center
---

<GithubCopilot class="pt-4" /> 

## Is replaced


---
layout: image-right
image: https://res.cloudinary.com/raymons/image/upload/v1739129318/dw2025/images/a67f9ade-a1f2-48dd-8666-a3a630e43693.png
---

<Continue class="mb-4" />


- ✅ Chat
- ✅ Edit
- ✅ Auto suggestions
- ❌ Agents ([in development](https://github.com/continuedev/continue/issues/2274))
- ✅✅ Docs index
- ✅✅ Multiple LLM providers
- 😉 As fast as your computer

---
layout: quote
class: text-center
---

## Let's replace

<ChatGPT class="pt-4" />

---
layout: image-right
image: https://res.cloudinary.com/raymons/image/upload/v1739130057/dw2025/images/9fb9f86d-a517-427b-859d-e01a7c5b568f.png
---

<header class="mb-12 flex justify-start items-center gap-2">
<span class="pr-2"><Circle title="1" background="bg-[#75ac9d]" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> 
<em>Install OpenWebUI</em> 
<OpenWebUI hideTitle size="small" />
</header>



- 🧑‍💻 Open source
- 🖥️ Run via Python or Docker
- 🧩 Integrates with Ollama and other OpenAI-compatible APIs
- 📴 Offline/Online usage
- 🕸️ Built-in RAG to add knowledge base
- 👥 User management
- 🛠️ Create custom Ollama models and agents
- 🔍 Websearch
- [Much more...](https://docs.openwebui.com/features/)


---
layout: quote
class: text-center
---

<header class="mb-12 flex justify-center items-center gap-2">
<span class="pr-2"><Circle title="2" background="bg-[#75ac9d]" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> 
<em>Use OpenWebUI</em> 
<OpenWebUI hideTitle size="small" />
</header>

## Select model
`deepseek-r1:7b`

<img class=" rounded-t-xl translate-y-4" src="https://res.cloudinary.com/raymons/image/upload/v1739131306/dw2025/images/55ee9f8a-28cc-4678-a944-e135bc9a8312.png" />

---
layout: quote
class: text-center
---

<header class="mb-12 flex justify-center items-center gap-2">
<span class="pr-2"><Circle title="3" background="bg-[#75ac9d]" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> 
<em>Use OpenWebUI</em> 
<OpenWebUI hideTitle size="small" />
</header>

## Prompt
```
How many r's are there in the word Strawberry?
```

---
layout: quote
class: text-center
---

<header class="mb-12 flex justify-center items-center gap-2">
<span class="pr-2"><Circle title="4" background="bg-[#75ac9d]" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> 
<em>Use OpenWebUI</em> 
<OpenWebUI hideTitle size="small" />
</header>

## Prompt
```
ell me the 3 main reasons why I should use TypeScript, and also 3 reasons why I shouldn’t.
```

---
layout: quote
---

<header class="mb-12 flex justify-center items-center gap-2">
<span class="pr-2"><Circle title="5" background="bg-[#75ac9d]" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> 
<em>Use OpenWebUI</em> 
<OpenWebUI hideTitle size="small" />
</header>

<div class="flex justify-center">

<div>

## Let's put DeepSeek R1 to the test

What goes wrong in this function? Explain it to me like I'm 12 years old.
```javascript

function containsValue(arr, value) {
  // This function is intended to return true if 'value' is in the array,
  // and false otherwise.
  return arr.indexOf(value) ? true : false;
}

// Test cases:
console.log(containsValue([1, 2, 3], 1)); // Expected: true, but outputs: false
console.log(containsValue([1, 2, 3], 2)); // Expected: true, outputs: true
console.log(containsValue([1, 2, 3], 4)); // Expected: false, outputs: false
```
</div>
</div>

---
layout: quote
class: text-center
---

<header class="mb-12 flex justify-center items-center gap-2">
<span class="pr-2"><Circle title="6" background="bg-[#75ac9d]" titleSize="font-bold text-2xl text-black font-italic" size="small" /></span> 
<em>Use OpenWebUI</em> 
<OpenWebUI hideTitle size="small" />
</header>


## Try Web Search with LLama3.2

```
When will be the DevWorld Conference 2025 in Amsterdam RAI? 
And tell me more about the talks and topics I can expect there?
```

---
layout: quote
---

<div class="flex justify-center">

<div>

<h2 class="text-center">Recap</h2>

- 🤖 **Ollama** and **LM Studio** run open source LLMs
- 🧑‍✈️ **Continue.dev** > **Github Copilot**
- 💬 **OpenWeb UI** > **ChatGPT**

</div>
</div>

---
layout: quote
---

<Center>


## 🌐 Why use local AI?

- 🔐 Data security 
- 💪 Works offline
- 💰 No recuring subscriptions
- 💻 Is as fast as your computer


</Center>

---
layout: quote
---

<div class="flex justify-center">

<div>

<h2 class="text-center">MSI Steelseries</h2>

### 🥇Intel Core 9, <br /> 64GB RAM, Nvidia RTX 4070 

<br />

- DeepSeek R1 Qwen 7B: 50 tokens per second
- LLama 3.2 7B: 32 tokens per second

</div>
</div>

---
layout: quote
---

<div class="flex justify-center">

<div>

<h2 class="text-center"> Macbook Pro M1</h2>

### 🥈 16GB RAM

<br />

- DeepSeek R1 Qwen 7B: 11 tokens per second
- LLama 3.2 7B: 24 tokens per second

</div>
</div>

---
layout: quote
---

<div class="flex justify-center">

<div>

<h2 class="text-center">Asus Zenbook</h2>

### 🥉AMD Ryzen 9 5900HX, 16GB RAM

<br />

- DeepSeek R1 Qwen 7B: 6 tokens per second
- LLama 3.2 7B: 10 tokens per second

</div>
</div>

---
layout: quote
---
<Center>


<h2 class="text-center">Notes</h2>

- 🏎️ Having a separated GPU gives performance boost 
- 🤭 Don't use the biggest LLMs
- 🪫 Drains your laptop battery faster 

</Center>

---
layout: quote
class: text-center
---


# _Please install local AI at least as a backup_

## You will thank me later 😏

---
layout: quote
class: text-center
---

## Presentation

[https://dw2025.byrayray.dev/](https://dw2025.byrayray.dev/)


Repository: [https://github.com/devbyray/devworld-2025-local-ai](https://github.com/devbyray/devworld-2025-local-ai)

_Created with [Sli.dev](https://sli.dev)_

---
layout: quote
class: text-center
---

## Thank You!

Questions are more than welcome via:

<div class="flex justify-center pt-4">
<img src="https://res.cloudinary.com/raymons/image/upload/v1739136412/dw2025/images/qr-code.png" width="200" />
</div>

[x.com/devbyrayray](https://x.com/devbyrayray)

[github.com/devbyray](https://github.com/devbyray)

[byrayray.dev](https://byrayray.dev)
