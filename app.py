from flask import Flask, render_template, jsonify

app = Flask(__name__, static_url_path='/static')

@app.route("/")
def hello_Gstudios():
    return render_template('index.html')

@app.route("/api/services")
def show_services():
    return jsonify(services)

@app.route("/api/login")
def show_login():
    return jsonify(login)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)