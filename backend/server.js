const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const apiKey = process.env.OPENAI_API_KEY;

let selectedGender = null;

app.use(bodyParser.json());
app.use(cors());

// Route to receive and store gender
app.post('/api/gender', (req, res) => {
  const { gender } = req.body;
  selectedGender = gender;
  console.log('Received gender:', gender);
  res.sendStatus(200);
});

// Function to generate a single image
const generateImage = async (description) => {
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
  return response.data.data[0].url;
};

// Route to receive description and generate images
app.post('/api/generate', async (req, res) => {
  const { data } = req.body;
  const stringData = stringFormat(data);
  const description = `${stringData} 등 외모 조건들을 가진 ${selectedGender} 한 명의 사진`;
  console.log('Received data from client:', description);

  try {
    const imageUrl1 = await generateImage(description);
    const imageUrl2 = await generateImage(description);

    res.json({ imageUrls: [imageUrl1, imageUrl2] });

  } catch (error) {
    console.error('Error generating images:', error.response ? error.response.data : error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: error.response ? error.response.data : error.message });
    }
  }
});
// Route to receive input text and generate images
app.post('/api/generateText', async (req, res) => {
  const { inputText } = req.body;
  const description = inputText;
  console.log('Received input text from client:', description);

  try {
    const imageUrl1 = await generateImage(description);
    const imageUrl2 = await generateImage(description);

    res.json({ imageUrls: [imageUrl1, imageUrl2] });

  } catch (error) {
    console.error('Error generating images:', error.response ? error.response.data : error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: error.response ? error.response.data : error.message });
    }
  }
});



// JSON format to String 
const stringFormat = (data) => {
  return Object.entries(data)
    .filter(([key, values]) => Array.isArray(values) && values.length > 0) // filter out empty arrays
    .map(([key, values]) => `${key} ${values.join(', ')}`)
    .join(', ');
};

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
