from dotenv import load_dotenv
load_dotenv()
from flask import Flask, render_template, request
from dashboard_routes import dashboard_bp
from supabase import create_client
from logging import FileHandler, WARNING
import os

app = Flask(__name__, template_folder='templates')
file_handler = FileHandler('errorlog.txt')
file_handler.setLevel(WARNING)


app.register_blueprint(dashboard_bp, url_prefix='/dashboard')


url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase = create_client(url, key)

@app.route("/")
def hello_Gstudios():
    return render_template('index.html')

@app.route("/dashboard")
def dashboard():
    return render_template('dashboard.html')

@app.route("/sign_up", methods=['GET', 'POST'])
def sign_up():
    error = None
    if request.method == "POST":
        # Extract form data
        username = request.form.get("username")
        email = request.form.get("email")
        password = request.form.get("password")

        # Check if email and password are not None or empty
        if email and password:
            # Sign up the user using Supabase Auth API
            user, error = supabase.auth.sign_up({"email": email, "password": password})
            if user:
                # Update the user's profile to include their name (username)
               # supabase.table("profiles").update({"username": username}).match({"id": user['id']}).execute()

                # Log the user ID if sign-up is successful
                print(f"New user signed up. User ID: {user[1]}")

                # Redirect to a success page or another route
                return render_template("success.html", message="Sign-up successful!")

    # Handle any errors
    if error:
        return render_template('error.html', message=error.message)

    # Render the sign-up form
    return render_template('sign_up.html')

@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        # Extract form data
        email = request.form.get("email")
        password = request.form.get("password")

        # Check if email and password are not None or empty
        if email and password:
            # Sign in the user using Supabase Auth API
            user, error = supabase.auth.sign_in_with_password({"email": email, "password": password})
            if error:
                # Handle login errors
                return render_template('error.html', message=error.message)

            # User successfully logged in
            return render_template('dashboard.html')  # Redirect to the dashboard or another page

    # Render the login form
    return render_template('login.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)