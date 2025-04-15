---
id: ollama in termux
aliases:
  - ollama in termux
tags:
  - ollama
  - termux
---

# Ollama in termux

> [!WARNING]
> This process only works on Android devices.

## Before we begin

Make sure you have installed [[termux]] on your android phone.

## Optional Dependencies

You can also download an API client for your android phone.

## Installation

You can start it just by simply following through these commands:

1. Install Ollama. This is already available in the termux repositories as of 04/2025

```bash
pkg install ollama
```

2. Run ollama in the background. Please note we add an `&` so that it would start as a background process.

```
ollama serve &
```

3. Browse [ollama website](https://ollama.com) for [[LLM]] models. I recommend using ~ 1b - 3b max depending on your device's RAM.

4. For this example, we will be using the smallest parameter model of deepseek-r1

```
ollama pull deepseek-r1:1.5b

ollama run deepseek-r1:1.5b
```

After runnning the commands above, you should be able to see a prompt like

```
>>> Send a message (/? for help)
```

And that's it! You may now be able to interact with the [[LLM]] of your choice

## Optional API Client

If you decided to install an API client, you can instead use the API client.
But basically, to get a prompt, you can create this request on your API client:

```

POST localhost:11434/api/generate


Request Body
{
  "model": "deepseek-r1:1.5b",
  "prompt": "Hello World!",
}
```

The above request is sufficient to generate a response from deepseek-r1 or any model you have downloaded, just change the `model` parameter. 
For more information, please refer to the [ollama docs](https://github.com/ollama/ollama/blob/main/docs/api.md).

