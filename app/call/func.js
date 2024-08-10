import Groq from "groq-sdk";

const groq = new Groq({ apiKey: "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" ,dangerouslyAllowBrowser:true});

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama3-8b-8192",
  });
}


export function test(name) {
  console.log(name);
  return name;
}


