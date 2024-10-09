# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask
from clerkData import clerkData


app = Flask(__name__)

clerkData(app)
@app.route('/')
def hello_world():
    return 'Hello World'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=5000)
