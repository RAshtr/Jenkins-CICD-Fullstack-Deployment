from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({
        "status": "online",
        "service": "Flask Backend API",
        "deployed_by": "Jenkins CI/CD Pipeline",
        "author": "Ravi Shankar Tripathi"
    })

@app.route('/api/items')
def get_items():
    return jsonify({
        "host": "Flask-EC2-Backend",
        "items": ["Item 1: Automated Deployment", "Item 2: Jenkins Webhook", "Item 3: PM2 Process Management"]
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
