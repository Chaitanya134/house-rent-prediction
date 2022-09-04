from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

app = FastAPI()

# env variables
load_dotenv("./.env.local")
CLIENT_URL = os.environ.get("CLIENT_URL")
print(CLIENT_URL)

# CORS
origins = [CLIENT_URL]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
)

@app.get("/")
def index():
    return { "message": "Hello World!" }