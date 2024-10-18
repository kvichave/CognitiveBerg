# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask,session
from user_profile import user_profile
from clerkData import clerk_db
from dashboard import dashboard_functions
from flask_cors import CORS
app = Flask(__name__)
app.config['SECRET_KEY'] = 'lanukVichave@258'
app.register_blueprint(user_profile)
app.register_blueprint(clerk_db)
app.register_blueprint(dashboard_functions)
CORS(app)

@app.route('/')
def hello_world():
    session["test"]="kunal"

    return 'Hello World'



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0',port=5000)
