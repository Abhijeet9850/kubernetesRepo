from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.json
    return jsonify({
        "message": "Data received successfully",
        "data": data
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
