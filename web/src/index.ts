import * as express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// Get API URL from environment variable
const apiUrl = process.env.API_URL || 'http://localhost:3001';

app.get('/', async (req, res) => {
  try {
    // Ping the API service
    const response = await axios.get(`${apiUrl}/ping`);
    const apiMessage = response.data.message;

    // Send response back to the browser
    res.send(`
      <html>
        <body>
          <h1>Hello, World!</h1>
          <p>API response: ${apiMessage}</p>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send('Error connecting to API service');
  }
});

app.listen(port, () => {
  console.log(`Web service running at http://localhost:${port}`);
});
