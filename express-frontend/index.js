const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Jenkins CI/CD Fullstack App</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 60px; background-color: #f4f7f6; }
                .card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: inline-block; }
                h1 { color: #0284c7; }
                p { color: #334155; font-size: 16px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Fullstack App Deployed via Jenkins CI/CD</h1>
                <p><strong>Candidate:</strong> Ravi Shankar Tripathi</p>
                <p>Frontend Running on Port: <strong>3000</strong></p>
                <p>Managed by: <strong>PM2 Process Manager</strong></p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express frontend running on port ${PORT}`);
});
