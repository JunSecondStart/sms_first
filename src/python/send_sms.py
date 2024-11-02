import subprocess

app = FastAPI()

@app.get("/",response_model=ItemResponse)
async def create_sms(
    id: int,
    phone_number_id: int,
    user_id: int,
    title: str,
    content_text: str,
    created_at: str,
    updated_at: str,
    sent_at: str
):

phone_number = "090xxxxxxxx"

input_content_text = f'{content_text}'

command = f"aws sns publish \
    --phone-number '+81{phone_number}' \
    --message '{input_content_text}';

print(command)
# シェルコマンドを実行
# result = subprocess.run([command], shell=True,capture_output=True, text=True)

# 結果の出力
# print(result.stdout)