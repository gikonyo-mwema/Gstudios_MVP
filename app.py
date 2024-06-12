from flask import Flask, render_template
from supabase import create_client
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__, template_folder='templates')



url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)

@app.route("/")
def home():
    # Render the template with home page
    return render_template("index.html")

@app.route("/sign_up")
def sign_up():
    # Render the template with sign_up page
    return render_template("sign_up.html")

@app.route("/dashboard")
def dashboard():
    # Render the template with dashboard page
    return render_template("dashboard.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)