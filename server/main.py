from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/health")
def health():
    return {"message": "ok"}