from flask import Flask

api = Flask(__name__)

@api.route("/profile")