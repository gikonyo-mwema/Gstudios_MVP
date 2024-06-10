from flask import Flask, render_template
from supabase import create_client
import os

app = Flask(__name__, template_folder='templates')



url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)

@app.route("/")
def home():
    # Render the template with home page
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

@app.route("/sign_up")
def sign_up():
    return render_template("sign_up.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")