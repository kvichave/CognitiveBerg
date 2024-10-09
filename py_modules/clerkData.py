from flask import Flask,request

def clerkData(app):
    

    @app.route("/api/clerk", methods=["POST", "GET"])
    def clerk():
        data=request.get_json()
        print(data)
        return("Success")