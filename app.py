from flask import Flask, render_template, jsonify, request
from supabase_py import create_client, Client
from werkzeug.security import generate_password_hash

SUPABASE_URL = "https://wulvhqxiuvcmnecalaax.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bHZocXhpdXZjbW5lY2FsYWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMTU5MTQsImV4cCI6MjAzMTg5MTkxNH0.euL3iput-qiDL4yFD8hLT8-5iRf-ppCoOOtU9K2GuxU"
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def hello_Gstudios():
    return render_template('index.html')

@app.route("/dashboard")
def dashboard():
    return render_template('dashboard.html')  

@app.route("/login")
def login():
    return render_template('login.html')
 
@app.route("/sign_up", methods=['GET', 'POST'])
def signUp():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        # hash the password before storing it
        password_hash = generate_password_hash(password)

        # Insert the new user into the users table
        user = supabase.table("users").insert([{"name": username, "email":email, "password_hash":password_hash}]).execute()
    return render_template('sign_up.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
