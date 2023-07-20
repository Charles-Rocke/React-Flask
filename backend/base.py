from flask import Flask
from flask_cors import CORS, cross_origin
    
api = Flask(__name__)
cors = CORS(api, resources={r'/*': {'origins': '*'}})
api.config['CORS_HEADERS'] = 'Content-Type'

base_data = {
    "title" : "CDV Road Test Evaluation",
    "info" : " The Road Test Evaluation form is the grading rubric DriverTrainers will use to assess the Driver candidate's performance throughout the test. The Road Test is graded on three tiers: Demonstrated, Demonstrated & Coached, and Not Demonstrated. Driver Trainers will monitor whether or not a Driver candidate demonstrates the listed behaviors and actions safely. The scoring system of the Road Test is based on the number of penalties or Not Demonstrated actions. If during the Road Test the instructor deems the candidate to have unsafe driving habits, they should locate a safe area for the candidate to park. If they feel it is safe, the instructor should take over operation of the vehicle and return to the DeliveryStation. Write in 0 for Demonstrate actions, 1 for Demonstrated & Coached actions, and 2 for actions that were Not Demonstrated. A Driver candidate must have a score of 10 or lower in order to pass. Additionally, items marked with an asterisk (*) are actions that the Driver candidate MUST demonstrate. Instances of these actions not being demonstrated will result in an automatic fail",
    "actions" : ["Demonstrated actions earn 0 points", "Demonstrated & Coached actions earn 1 point", "Not Demonstrated actions earn 2 points Red" ],
}
@api.route("/profile")
def my_profile():
    return base_data


if __name__ == "__main__":
    api.run(debug.true, host="::1:5000")
