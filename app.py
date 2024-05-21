from flask import Flask, render_template, jsonify

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
 
@app.route("/sign_up")
def signUp():
    return render_template('sign_up.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)