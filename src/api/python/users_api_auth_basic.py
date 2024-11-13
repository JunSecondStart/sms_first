from fastapi import FastAPI, Request, Depends, Path, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy import create_engine, Column, Integer, DateTime, String
from sqlalchemy.ext.declarative import declarative_base
from typing import List, Optional, Any
from pydantic import BaseModel, constr
from datetime import datetime
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
import secrets

app = FastAPI()
security = HTTPBasic()

# CORSの設定
origins = [
    "http://localhost:3000",  # Reactアプリケーションがホストされているオリジン
    "http://localhost:3333",  # Reactアプリケーションがホストされているオリジン
    "http://localhost:3333/user",  # Reactアプリケーションがホストされているオリジン
    "http://localhost:3333/users",
    # 必要に応じて他のオリジンも追加可能
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

####### auth ##########
# 簡単な認証情報を設定（実際のアプリケーションでは環境変数などで管理）
USERNAME = "testuser"
PASSWORD = "testpassword"

def verify_credentials(credentials: HTTPBasicCredentials = Depends(security)):
    is_correct_username = secrets.compare_digest(credentials.username, USERNAME)
    is_correct_password = secrets.compare_digest(credentials.password, PASSWORD)
    
    if not (is_correct_username and is_correct_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Basic"},
        )
    return credentials.username
#########################

# SQLite3 データベース接続設定
SQLALCHEMY_DATABASE_URL = "sqlite:///./sms_first.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class UserItem(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), index=True)
    phone_number = Column(String(50), index=True, nullable=True)
    password = Column(String(50), index=True)
    # updated_at = Column(DateTime, index=True)
    # created_at = Column(DateTime, index=True)

Base.metadata.create_all(bind=engine)

# Pydanticモデル
class UserItemResponse(BaseModel):
    id: int
    username: constr(max_length=50)
    phone_number: constr(max_length=50)
    password: constr(max_length=50)  
    # updated_at: datetime
    # created_at: datetime

    class Config:
        orm_mode = True
        from_attributes = True

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/user/{id}", response_model=UserItemResponse)
async def read_items(request: Request, id:int=Path(), db: Session = Depends(get_db)) -> Any:
    useritems = db.query(UserItem).filter(UserItem.id == id).first()
    
    if not useritems:
        raise HTTPException(status_code=404, detail="Items not found")

    return useritems

@app.get("/user", response_model=UserItemResponse)
async def read_items(request: Request, id:int, db: Session = Depends(get_db)) -> Any:
    useritems = db.query(UserItem).filter(UserItem.id == id).first()
    
    if not useritems:
        raise HTTPException(status_code=404, detail="Items not found")

    return useritems

@app.get("/users", response_model=List[UserItemResponse])
async def read_items(request: Request, db: Session = Depends(get_db)) -> Any:
    useritems = db.query(UserItem).all()
    
    if not useritems:
        raise HTTPException(status_code=404, detail="Items not found")

    return useritems

############## auth2 ##################
@app.get("/protected-route")
def protected_route(username: str = Depends(verify_credentials)):
    return {"message": f"Hello, {username}! You have accessed a protected route."}
#######################################

# サーバーの起動
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8383)