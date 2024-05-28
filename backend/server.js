const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const apiKey = process.env.OPENAI_API_KEY;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.post('/api/generate', async (req, res) => {
  const { description } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        model: 'dall-e-3', 
        prompt: description,
        n: 1,  
        size: "1024x1024"
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

  
    const imageUrls = response.data.data.map(image => image.url);
    res.json({ imageUrls });
  } catch (error) {
    console.error('Error generating image:', error.response ? error.response.data : error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: error.response ? error.response.data : error.message });
    }
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

