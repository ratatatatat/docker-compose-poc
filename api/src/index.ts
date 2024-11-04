import * as express from 'express';

const app = express();
const port = 3001;

// Get mock response from environment variable
const mockResponse = process.env.MOCK_RESPONSE || 'Default response from API';

app.get('/ping', (req, res) => {
  res.json({ message: mockResponse });
});

app.listen(port, () => {
  console.log(`API service running at http://localhost:${port}`);
});
