# Multi-LLM Ad Analyzer

A powerful web application that allows you to analyze advertising content using multiple state-of-the-art AI models. Upload your brand guidelines, context documents, and ads (images or videos) to get detailed analysis from GPT-5 Thinking, Claude Sonnet 4.5, Gemini 2.5, or Grok 4.

## Features

- **Multiple LLM Support**: Choose from 4 cutting-edge AI models
  - GPT-5 Thinking (OpenAI) - Supports images & video
  - Claude Sonnet 4.5 (Anthropic) - Supports images only
  - Gemini 2.5 (Google) - Supports images & video
  - Grok 4 (xAI) - Supports images only

- **Brand Context Integration**: Upload brand guidelines and context documents that are automatically included in all analyses

- **Batch Ad Analysis**: Upload multiple ads at once - each ad is analyzed separately with its own API call

- **Rich Media Support**: Supports images (JPG, PNG, GIF, WebP) and videos (MP4, MOV)

- **Custom Analysis Instructions**: Add your own text guidance to direct the AI's analysis

- **Beautiful UI**: Clean, modern interface with drag-and-drop file uploads

## Video Support

| Model | Images | Videos |
|-------|--------|--------|
| GPT-5 Thinking | ✓ | ✓ |
| Claude Sonnet 4.5 | ✓ | ✗ |
| Gemini 2.5 | ✓ | ✓ |
| Grok 4 | ✓ | ✗ |

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- API key for at least one of the supported models:
  - OpenAI API key ([Get it here](https://platform.openai.com/api-keys))
  - Anthropic API key ([Get it here](https://console.anthropic.com/))
  - Google AI API key ([Get it here](https://makersuite.google.com/app/apikey))
  - xAI API key ([Get it here](https://x.ai/api))

## Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000/ad-analyzer.html
```

## Usage

### Step 1: Select AI Model
Choose your preferred AI model from the dropdown. Note which models support video.

### Step 2: Upload Brand Guidelines
Upload your brand guidelines and any additional context documents (PDF, TXT, DOCX, MD). These will be included in all API calls.

### Step 3: Add Text Guidance
Enter specific instructions for analyzing the ads. For example:
- "Analyze this ad for brand consistency, messaging clarity, visual appeal, and call-to-action effectiveness."
- "Rate each ad on a scale of 1-10 for creativity, brand alignment, and engagement potential."

### Step 4: Upload Ads
Upload your ad files (images or videos). You can upload as many as you want - each will be analyzed separately.

### Step 5: Configure API
Enter your API key for the selected model.

### Step 6: Analyze
Click "Analyze Ads" and wait for the results. Each ad will be displayed with its analysis.

## API Keys Security

- Your API keys are only sent to the respective AI provider's servers
- Keys are not stored permanently - you'll need to enter them each session
- The backend server proxies requests to avoid CORS issues but does not log or store your keys

## How It Works

1. **File Processing**: The app reads your brand guidelines and context documents
2. **Prompt Construction**: For each ad, it builds a prompt containing:
   - Your brand guidelines
   - Context documents
   - Text guidance instructions
   - The ad media (image or video)
3. **Individual API Calls**: Each ad gets its own separate API call
4. **Results Display**: Responses are displayed alongside the original ads

## API Endpoints

The backend server provides proxy endpoints to handle CORS and API communication:

- `POST /api/gpt5` - OpenAI GPT-5 Thinking
- `POST /api/claude` - Anthropic Claude Sonnet 4.5
- `POST /api/gemini` - Google Gemini 2.5
- `POST /api/grok` - xAI Grok 4

## Model-Specific Details

### GPT-5 Thinking (OpenAI)
- Model ID: `gpt-5`
- Reasoning effort: `medium` (configurable)
- Best for complex reasoning tasks
- Native video support

### Claude Sonnet 4.5 (Anthropic)
- Model ID: `claude-sonnet-4-5-20250929`
- Max tokens: 4096
- Best for coding and complex analysis
- Images only (no video)

### Gemini 2.5 (Google)
- Model ID: `gemini-2.5-flash`
- Supports up to 10 videos per request
- Advanced multimodal understanding
- Both image and video support

### Grok 4 (xAI)
- Model ID: `grok-4-0709`
- Real-time search integration
- Images only (video support coming soon)

## Troubleshooting

### "API key is invalid"
- Verify you've entered the correct API key for the selected model
- Check that your API key has sufficient credits/quota

### "Model does not support video files"
- Claude Sonnet 4.5 and Grok 4 only support images
- Either select GPT-5 Thinking or Gemini 2.5, or remove video files

### Server won't start
- Ensure Node.js is installed: `node --version`
- Try deleting `node_modules` and running `npm install` again
- Check that port 3000 is available

### Large files taking too long
- Images are converted to base64, which increases size
- Consider resizing very large images before upload
- Video files can be quite large - expect longer processing times

## File Size Recommendations

- Images: Under 5MB for best performance
- Videos: Under 50MB (some APIs have specific limits)
- Brand guidelines: Text files work best (automatic text extraction from PDFs not included)

## Development

The project consists of three main files:

- `ad-analyzer.html` - Frontend interface
- `server.js` - Backend proxy server
- `package.json` - Dependencies and scripts

To modify the UI, edit `ad-analyzer.html`. To change API handling, edit `server.js`.

## License

MIT License - feel free to use and modify as needed.

## Support

For issues with specific AI models, consult their official documentation:
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Anthropic API Docs](https://docs.anthropic.com)
- [Google Gemini API Docs](https://ai.google.dev/gemini-api/docs)
- [xAI API Docs](https://docs.x.ai)

## Credits

Built using the latest API documentation from OpenAI, Anthropic, Google, and xAI.
