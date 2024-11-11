from fastapi import FastAPI, Request, Depends, Query, HTTPException
import sqlite3
import json

app = FastAPI()

path = "sqlite:///./sms_first.db"

@app.get()
def fetch_data_from_db(query):
    # SQLiteデータベースに接続
    conn = sqlite3.connect(path)
    conn.row_factory = sqlite3.Row  # 結果を辞書形式で取得
    cursor = conn.cursor()

    # クエリを実行してデータを取得
    cursor.execute(query)
    rows = cursor.fetchall()

    # 辞書のリストを作成して、JSONに変換
    data = [dict(row) for row in rows]
    json_data = json.dumps(data, ensure_ascii=False, indent=2)

    # リソースを解放
    cursor.close()
    conn.close()

    return json_data

# 使用例
db_path = 'example.db'
query = 'SELECT * FROM users'  # 任意のSQLクエリを指定
json_result = fetch_data_from_db(db_path, query)
print(json_result)
