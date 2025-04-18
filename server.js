const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 10000;

// Model 1: OpenJourney - text to image
app.post('/openjourney', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await axios.post(
      'https://hf.space/embed/prompthero/openjourney/+/api/predict/',
      { data: [prompt] }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// Model 2: ModelScope - text to video
app.post('/modelscope', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await axios.post(
      'https://hf.space/embed/damo-vilab/modelscope-text-to-video-synthesis/+/api/predict/',
      { data: [prompt] }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
