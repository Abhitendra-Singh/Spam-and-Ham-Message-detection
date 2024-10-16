from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)
model = joblib.load('model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

@app.route('/classify', methods=['POST'])
def classify_message():
    data = request.json
    message = data['message']
    X = vectorizer.transform([message])
    prediction = model.predict(X)
    result = 'Spam' if prediction[0] == 1 else 'Ham'
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
