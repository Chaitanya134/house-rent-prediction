import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from fastapi import Request
import pandas as pd
from lightgbm import Booster

app = FastAPI()

# env variables
load_dotenv("./.env.local")
CLIENT_URL = os.environ.get("CLIENT_URL")

# CORS
origins = [CLIENT_URL]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

model = Booster(model_file="model.txt")

@app.get("/")
def index():
    return { "message": "Hello World!" }

@app.post("/predict")
async def predict(request: Request):
    houseData = await request.json()

    date = {}
    date['month'] = pd.to_datetime(houseData['activation_date']).month
    date['year'] = pd.to_datetime(houseData['activation_date']).year
    date['day_of_week'] = pd.to_datetime(houseData['activation_date']).day_of_week
    date['quarter'] = pd.to_datetime(houseData['activation_date']).quarter
    cols = ["type", "latitude", "longitude", "lease_type", "gym"	,"lift"	,"swimming_pool"	,"negotiable"	,"furnishing"	,"parking"	,"property_size"	,"property_age"	,"bathroom"	,"cup_board"	,"floor"	,"total_floor"	,"balconies"	,"amenityLIFT"	,"amenityGYM"	,"amenityINTERNET"	,"amenityAC"	,"amenityCLUB"	,"amenityINTERCOM"	,"amenityPOOL"	,"amenityCPA"	,"amenityFS"	,"amenitySERVANT"	,"amenitySECURITY"	,"amenitySC"	,"amenityGP"	,"amenityPARK"	,"amenityRWH"	,"amenitySTP"	,"amenityHK"	,"amenityPB"	,"amenityVP"	,"month"	,"year"	,"day_of_week"	,"quarter"	,"E"	,"N"	,"NE"	,"NW"	,"S"	,"SE"	,"SW"	,"W"	,"BOREWELL"	,"CORPORATION"	,"CORP_BORE"	,"AP"	,"GC"	,"IF"	,"IH"]
    
    X = []
    for col in cols:
        try:
            X.append(houseData[col])
        except:
            X.append(date[col])
    
    try:
        prediction = model.predict([X])[0]
    except:
        prediction = 0
    return prediction
