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
//성별 받기
app.post('/api/gender', (req, res) => {
  const { gender } = req.body;
  selectedGender = gender;
  console.log('Received gender:', gender);// 없어도 됨
  
  res.sendStatus(200); 
});

//외모 조건 받고, 이미지 생성해서, 이미지 주소 보냄 
app.post('/api/generate', async (req, res) => {
  const { data } = req.body; 
  const description = `${data} 를 만족하는 ${selectedGender} 한 명의 사진`;
  console.log('Received data from client fixed:', description); // 변경된 부분
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

    const imageUrl = response.data.data[0].url;
    res.json({ imageUrl });
    
  }  catch (error) {
      console.error('Error generating image:', error.response ? error.response.data : error.message);
      if (!res.headersSent) {
        res.status(500).json({ error: error.response ? error.response.data : error.message });
      }
    }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

