from fastapi import FastAPI, Request, Depends, Query, HTTPException
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy import create_engine, Column, Integer, DateTime, String
from sqlalchemy.ext.declarative import declarative_base
from typing import List, Optional, Any
from pydantic import BaseModel, constr
from datetime import datetime
from fastapi.responses import JSONResponse

app = FastAPI()

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
    updated_at = Column(DateTime, index=True)
    created_at = Column(DateTime, index=True)

Base.metadata.create_all(bind=engine)

# Pydanticモデル
class UserItemResponse(BaseModel):
    id: int
    username: constr(max_length=50)
    phone_number: constr(max_length=50)
    password: constr(max_length=50)  
    updated_at: datetime
    created_at: datetime

    class Config:
        orm_mode = True
        from_attributes = True

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/users/{id}", response_model=UserItemResponse)
async def read_items(request: Request, id: int, db: Session = Depends(get_db)) -> Any:
    if id is not None:
        useritems = UserItem(id=id)
    else:
        useritems = UserItem.all
    
    if not useritems:
        raise HTTPException(status_code=404, detail="Items not found")

    return useritems

# サーバーの起動
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8765)