import sqlite3
from flask import Flask,request
import json
def clerkData(app):
    

    @app.route("/api/clerk", methods=["POST", "GET"])
    def clerk():
        data=request.get_json()
        clerkId,clerkName,clerkEmail,requestType=extractClerk(data)
        conn = get_db_connection()
        if requestType == "user.created":
            cursor = conn.execute('SELECT * FROM clerk WHERE clerk_id = ? OR email = ?', (clerkId, clerkEmail))
            existing_user = cursor.fetchone()

            if existing_user:
                print("User already exists. No new user created.")
            else:
                conn.execute('INSERT INTO clerk (name, email, clerk_id) VALUES (?, ?, ?)', (clerkName, clerkEmail, clerkId))
                conn.commit()
                print("User created")

        elif requestType == "user.deleted":
            # Delete user from the database using clerk_id
            conn.execute('DELETE FROM clerk WHERE clerk_id = ?', (clerkId,))
            conn.commit()
            print("User deleted")

        elif requestType == "user.updated":
            # Update user information in the database using clerk_id
            conn.execute('UPDATE clerk SET name = ?, email = ? WHERE clerk_id = ?', (clerkName, clerkEmail, clerkId))
            conn.commit()
            print("User updated")

        
        conn.close()
        print(clerkName,clerkEmail,clerkId,requestType)
        return("Success")
    

def extractClerk(data):

    newdata=json.loads(data['data'])
    requestType=newdata['type']
    if requestType == "user.deleted":
        clerkId=newdata['data']['id']
        clerkName="NA"
        clerkEmail="NA"
        return(clerkId,clerkName,clerkEmail,requestType)
    clerkId=newdata['data']['id']
    clerkName=newdata['data']['first_name']
    clerkEmail=newdata['data']['email_addresses'][0]['email_address']
    return (clerkId,clerkName,clerkEmail,requestType)


def get_db_connection():
    conn = sqlite3.connect('/home/kunal/Documents/CognitiveBerg/clerkData.db')
    conn.row_factory = sqlite3.Row  # Allows us to return rows as dictionaries
    return conn