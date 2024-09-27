# whisper_server.py
from fastapi import FastAPI, UploadFile, File
import whisper

app = FastAPI()
model = whisper.load_model("base")

@app.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    audio = await file.read()
    with open("temp.mp3", "wb") as f:
        f.write(audio)

    # Perform the transcription
    result = model.transcribe("temp.mp3")
    return {"transcription": result["text"]}
