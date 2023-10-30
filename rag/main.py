from fastapi import FastAPI, Query, Request, Body
from pydantic import BaseModel
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import FileResponse
from typing import Dict, List, Optional, Tuple, Union
from pydantic import ValidationError, validator
from lamini import (
    RetrievalAugmentedRunner,
    LaminiIndex,
    BasicModelRunner,
    LlamaV2Runner,
)

import os

app = FastAPI()

current_directory = os.path.dirname(os.path.abspath(__file__))
parent_directory = os.path.dirname(current_directory)


class CompletionsPayload(BaseModel, smart_union=True):
    in_value: Union[Dict, List[Dict]]  # further type checking with @validator
    model_name: str


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your React app's URL
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

if os.path.exists(parent_directory + "/frontend-app/build"):
    print(parent_directory + "/frontend-app/build")
    templates = Jinja2Templates(directory=parent_directory + "/frontend-app/build")
    app.mount(
        "/static",
        StaticFiles(directory=parent_directory + "/frontend-app/build/static"),
        name="static",
    )

    @app.route("/")
    async def catch_all(request: Request, full_path: str = "/"):
        return templates.TemplateResponse("index.html", {"request": request})


@app.post("/rag")
async def process_values(payload: CompletionsPayload = Body(...)):
    # Perform any desired processing with the received values
    print(payload)

    runner = RetrievalAugmentedRunner(
        model_name=payload.model_name,
        config={"local": {"key": "test_token", "url": "http://localhost:8001"}},
    )
    index_dir = parent_directory + "/models/"
    print(index_dir)
    for filename in os.listdir(index_dir):
        if os.path.isfile(os.path.join(index_dir, filename)):
            print(filename)
    runner.index = LaminiIndex.load_index(parent_directory + "/models/")
    answer = runner(payload.in_value["question"])
    print(answer)
    return {"answer": answer}


@app.post("/base")
async def process_values(payload: CompletionsPayload = Body(...)):
    # Perform any desired processing with the received values
    print(payload)

    runner = LlamaV2Runner(
        model_name=payload.model_name,
        config={"local": {"key": "test_token", "url": "http://localhost:8001"}},
    )
    answer = runner(payload.in_value["question"])
    print(answer)
    return {"answer": answer}
