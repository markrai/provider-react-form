import boto3
import os
import flask
import datetime
from flask import Response, request, make_response, abort
from flask_cors import CORS
import json

app = flask.Flask(__name__)
CORS(app)


dynamodb = boto3.resource(
    'dynamodb', region_name="us-east-1", aws_access_key_id="AKIATDZTTYTCYQ3VHVWQ", aws_secret_access_key='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', endpoint_url="https://dynamodb.us-east-1.amazonaws.com")


table = dynamodb.Table("Availity-Provider")
print("Table status:", table.table_status)


@app.route("/register", methods=['POST'])
def registerform():
    print("in register")
    data = request.data.decode("utf-8")
    data = json.loads(data)
    print("3=>", data["email"])
    table.put_item(Item=data)
    return flask.jsonify("done")


if __name__ == "__main__":
    app.run(host="localhost", port=3001)
