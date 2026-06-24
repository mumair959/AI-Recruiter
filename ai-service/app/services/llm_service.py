from ollama import chat

class LLMService:

    @staticmethod
    def generate(prompt: str):

        response = chat(
            model="llama3.2:1b",
            options={
                "temperature": 0.1
            },
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return response["message"]["content"]