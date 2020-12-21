# React Provider Registration Form

Greetings! This rudimentary React form allows the Provider to to sign-up with their details, a record of which is written to a table on a DynamoDB database. You will have
to create this table beforehand. Additionally, the form provides the user with validation checks using regular expressions on items such as e-mail, and phone number. Also, the user is unable to proceed unless they accept the terms and conditions.

## PRE-REQUISITES:

1. NPM
2. Python 3.8+

Optional: To see persistence capabillity,  `Availity-Provider` table must be present on DynamoDB with the primary key set to `id` and AWS credentials must be provided in `connect.py`

## DIRECTIONS:

### Run React App:

  `npm install`
  `npm start`

### Run Python/DynamoDB Connection:

  pip install -r requirements.txt
  `python connect` will run the Flask server. 

### Navigate to:
http://localhost:3000/