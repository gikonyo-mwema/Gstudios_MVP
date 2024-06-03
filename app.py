from flask import Flask, render_template
from dashboard_routes import dashboard_bp
from supabase import create_client
import os

app = Flask(__name__, template_folder='templates')

app.register_blueprint(dashboard_bp, url_prefix='/dashboard')

url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)

@app.route("/")
def home():
    # Fetch designer data from Supabase
    response = supabase.table('designers').select("*").execute()
    designers_data = response.json()  # List of designer records

    # Render the template with designer data
    return render_template("index.html", designers_data=designers_data)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)