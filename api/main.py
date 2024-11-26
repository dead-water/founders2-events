from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests

app = FastAPI()

class Event(BaseModel):
    title: str
    description: str
    date: str
    location: str

LUMA_API_URL = "https://api.lu.ma/v1/events"
MEETUP_API_URL = "https://api.meetup.com/create_event"
LUMA_API_KEY = "your_luma_api_key"
MEETUP_API_KEY = "your_meetup_api_key"

@app.post("/events/")
async def create_event(event: Event):
    luma_response = requests.post(
        LUMA_API_URL,
        headers={"Authorization": f"Bearer {LUMA_API_KEY}"},
        json=event.dict()
    )
    
    if luma_response.status_code != 200:
        raise HTTPException(status_code=400, detail="Failed to create event on Lu.ma")

    meetup_response = requests.post(
        MEETUP_API_URL,
        headers={"Authorization": f"Bearer {MEETUP_API_KEY}"},
        json=event.dict()
    )
    
    if meetup_response.status_code != 200:
        raise HTTPException(status_code=400, detail="Failed to create event on Meetup")

    return {"message": "Event created successfully on both platforms"}