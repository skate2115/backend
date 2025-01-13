from flask import Flask, request, jsonify

app = Flask(__name__)

# Lista zweryfikowanych użytkowników (zastąp to bazą danych w przyszłości)
verified_users = {
    "123456789": True,  # Przykładowe User ID Roblox
    "987654321": True,
    "1080997930": True
}

@app.route('/verify', methods=['GET'])
def verify_user():
    user_id = request.args.get('userId')
    if user_id in verified_users:
        return jsonify({"verified": True})
    return jsonify({"verified": False})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
