from dotenv import load_dotenv
load_dotenv()
from flask import Flask, render_template, request
from supabase import create_client
import os

app = Flask(__name__, static_url_path='/static')


# Initialize Supabase client
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
supabase= create_client(url, key)


@app.route("/")
def hello_Gstudios():
    return render_template('index.html')

@app.route("/dashboard")
def dashboard():
    return render_template('dashboard.html')

 
@app.route("/sign_up", methods=['GET', 'POST'])
def signUp():
    # Initialize variables
    username = None
    email = None
    password = None
    error = None
    user = None

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
                # Update the user's profile to include their name
                supabase.table("users").update({"name": username}).match({"id": user.id}).execute()

    if error:
        # Handle any errors
        return render_template('error.html', message=error.message)
    elif user:
        # User successfully signed up
        return render_template("success.html", message="Sign-up successful!")

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
            # Sign in the use using Supabase Auth API
            user, error = supabase.auth.sign_in_with_password({"email": email, "password": password})
            if error:
                # Handle login errors
                return render_template('error.html', message=error.message)
        
            # User successfully logged in
            return render_template('dashboard.html') #Redirect to the dashboard or another page
    
    return render_template('login.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
