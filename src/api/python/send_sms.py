from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional
import subprocess

app = FastAPI()

# CORSの設定
origins = [
    "http://localhost:3000",  # Reactアプリケーションがホストされているオリジン
    "http://localhost:3000/send_sms",  # Reactアプリケーションがホストされているオリジン
    # 必要に応じて他のオリジンも追加可能
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AwsCommandResponse(BaseModel):
    id: int
    awsCommandInputtedReply : str

    class Config:
        orm_mode = True

@app.get("/send_sms/print_data",response_model=AwsCommandResponse)
async def create_sms(
    id: Optional[int] = Query(None, description="Filter by id"),
    content_text: Optional[str] = Query(None, description="inputted text"),
):

    phone_number = f'5099999999'

    command = f"aws sns publish --phone-number '+810{phone_number}' --message '{content_text}'"

    # シェルコマンドを実行
    result = subprocess.run([command], shell=True, capture_output=True, text=True)

    data = {"command": command}

    return JSONResponse(content=data)

# シェルコマンドを実行
# result = subprocess.run([command], shell=True, capture_output=True, text=True)

# 結果の出力
# print(result.stdout)

# サーバーの起動
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8003)




