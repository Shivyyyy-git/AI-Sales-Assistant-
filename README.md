<div align="center">

# 🏘️ AI Senior Living Placement Assistant

**AI‑Powered Client Intake and Community Matching System**

[![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb.svg)](https://reactjs.org/)
[![Gemini](https://img.shields.io/badge/Gemini-2.5%20Flash-orange.svg)](https://ai.google.dev/)
[![Flask](https://img.shields.io/badge/Flask-3.0+-green.svg)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

*An intelligent recommendation system that processes real-time audio consultations or text inputs to match clients with the most suitable senior living communities using advanced AI and multi-dimensional ranking algorithms.*

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Project Team](#-project-team)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage](#-usage)
- [System Architecture](#-system-architecture)
- [Ranking System](#-ranking-system)
- [API Documentation](#-api-documentation)
- [Configuration](#-configuration)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

The **AI Senior Living Placement Assistant** is a comprehensive solution designed to streamline the senior living placement process. It combines cutting-edge AI technology with sophisticated ranking algorithms to provide accurate, explainable recommendations for senior living communities.

### What It Does

1. **Real-Time Audio Processing**: Captures and processes live consultations using Gemini Live API
2. **Intelligent Extraction**: Uses Gemini 2.5 Flash to extract client requirements from audio or text
3. **Multi-Dimensional Ranking**: Evaluates communities across 8 dimensions (business value, cost, distance, availability, amenities, etc.)
4. **Smart Recommendations**: Always provides exactly 5 ranked recommendations with detailed explanations
5. **CRM Integration**: Automatically pushes results to Google Sheets for tracking and analytics

### Technology Stack

- **Backend**: Python 3.9+, Flask, SocketIO
- **Frontend**: React 18+, TypeScript, Vite
- **AI**: Google Gemini 2.5 Flash Live API
- **Data Processing**: Pandas, NumPy
- **CRM**: Google Sheets API
- **Styling**: Tailwind CSS

---

## ✨ Key Features

### 🎤 Real-Time Audio Processing
- **Live Transcription**: Real-time speech-to-text using Gemini Live API
- **Multi-Language Support**: English and Spanish (Hindi coming soon)
- **Audio File Upload**: Process pre-recorded consultations (MP3, WAV, M4A, OGG, WebM, FLAC)
- **Noise Filtering**: Advanced audio processing pipeline with filters and compression

### 🤖 AI-Powered Intelligence
- **Smart Extraction**: Automatically extracts client requirements (budget, care level, timeline, location, special needs)
- **Contextual Understanding**: Understands nuanced requirements and preferences
- **Deterministic Output**: Temperature=0.0 ensures consistent results for the same input

### 📊 Advanced Ranking System
- **8-Dimension Analysis**: 
  - Business Value (commission rates, willingness scores)
  - Total Cost (monthly fees + amortized upfront costs)
  - Distance (geocoded ZIP-to-ZIP calculations)
  - Budget Efficiency (utilization percentage)
  - Couple Friendliness (second person fees)
  - Availability Match (timeline compatibility)
  - Amenity & Lifestyle Fit (pet-friendly, enhanced services, etc.)
  - Holistic Fit (overall compatibility)
- **Weighted Borda Count**: Combines all dimensions into a single ranked score
- **Always 5 Recommendations**: Consistent output for CRM integration

### 💼 Business Features
- **Partner Spotlight**: Highlights partner communities for higher commissions
- **CRM Integration**: Automatic push to Google Sheets (consultations, recommendations, analytics)
- **Email Integration**: Send recommendations to clients or managers
- **Comparison Tool**: Side-by-side comparison of selected communities
- **Call History**: Track all consultations and outcomes

### 🎨 User Experience
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Live Dashboard**: Real-time updates during consultations
- **Interactive Maps**: Visual location display for communities
- **Client Profiles**: Comprehensive client information management
- **Database Management**: Add, edit, and manage community database via UI

---

## 👥 Project Team

**Project Team:**
- Shivam Sharma
- Ritwik Agrawal
- Manu Jain
- Yu Chen Lin (Ryan)

**Faculty Advisor / Mentor:**
- Professor Elizabeth Mohr

**Client Partner:**
- Neil Russell, Culina Health

---

## 🚀 Quick Start

### Prerequisites

- **Python 3.9+** ([Download](https://www.python.org/downloads/))
- **Node.js 18+ and npm** ([Download](https://nodejs.org/))
- **Gemini API Key** ([Get one here](https://ai.google.dev/))

### One-Command Start (Mac/Linux)

```bash
chmod +x START.sh
./START.sh
```

### One-Command Start (Windows)

```bash
START.bat
```

### Manual Start

**Backend:**
```bash
# Activate virtual environment
source venv/bin/activate  # Mac/Linux
# OR
venv\Scripts\activate  # Windows

# Install dependencies (first time only)
pip install -r requirements.txt

# Start backend server
python app.py
```

**Frontend:**
```bash
cd .studio_import
npm install  # First time only
npm run dev
```

**Access the Application:**
- Frontend: http://localhost:3000 (Use this!)
- Backend API: http://localhost:5050 (Internal only)

---

## 📦 Installation

### Step 1: Clone Repository

```bash
git clone https://github.com/Shivyyyy-git/AI-Sales-Assistant-.git
cd senior-community-recom-engine-1
```

### Step 2: Backend Setup

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate  # Windows

# Install Python dependencies
pip install -r requirements.txt
```

### Step 3: Frontend Setup

```bash
cd .studio_import
npm install
```

### Step 4: Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# Required
GEMINI_API_KEY=your_gemini_api_key_here

# Optional - For Google Sheets CRM integration
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_FILE=path/to/service-account.json
SECRET_KEY=your_secret_key_here
ALLOWED_ORIGINS=http://localhost:3000
```

### Step 5: Run the Application

Use the startup scripts (`START.sh` or `START.bat`) or follow the manual start instructions above.

---

## 💻 Usage

### Web Interface (Recommended)

1. **Start the application** using `START.sh` or `START.bat`
2. **Open your browser** to http://localhost:3000
3. **Launch AI Placement Assistant** from the landing page
4. **Start a call** or **upload an audio file**
5. **View recommendations** in real-time as the conversation progresses

### Command-Line Interface

Process an audio file:

```bash
python run_consultation.py --audio "audio-files/Transcript 1 (Margaret Thompson).m4a"
```

Process without pushing to CRM (testing):

```bash
python run_consultation.py --audio "path/to/audio.m4a" --no-push
```

### Python API

```python
from main_pipeline_ranking import RankingBasedRecommendationSystem
from google_sheets_integration import push_to_crm

# Initialize system
system = RankingBasedRecommendationSystem()

# Process audio file
result = system.process_audio_file(
    audio_path="audio-files/consultation.m4a",
    output_file="output/result.json"
)

# Push to Google Sheets CRM
crm_result = push_to_crm(result)
print(f"Consultation #{crm_result['consultation_id']} added to CRM")
```

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERFACE                            │
│  (React Frontend - Real-time Audio/Text Input)              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              FLASK BACKEND (SocketIO)                        │
│  • Real-time WebSocket communication                        │
│  • Audio streaming to Gemini Live API                       │
│  • Request/response handling                                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│         GEMINI LIVE API / AUDIO PROCESSOR                   │
│  • Real-time transcription                                  │
│  • Client requirement extraction                            │
│  • Temperature=0.0 for deterministic output                │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              HARD FILTER ENGINE                              │
│  • Care level match                                         │
│  • Budget compatibility                                     │
│  • Timeline fit                                             │
│  • Enhanced/Enriched services                               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│         8-DIMENSION RANKING ENGINE                          │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Rule-Based   │  │ Rule-Based   │  │ AI-Powered   │     │
│  │ (5 dims)     │  │ (continued)  │  │ (3 dims)     │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                             │
│  • Business Value  • Budget Efficiency  • Availability      │
│  • Total Cost      • Couple Friendly    • Amenities        │
│  • Distance                              • Holistic Fit    │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│         WEIGHTED BORDA COUNT AGGREGATION                     │
│  • Combines all 8 dimensions                                │
│  • Produces final ranked score                              │
│  • Always returns top 5 recommendations                     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              OUTPUT & CRM INTEGRATION                        │
│  • JSON recommendations with explanations                   │
│  • Google Sheets push (optional)                            │
│  • Email integration                                        │
└─────────────────────────────────────────────────────────────┘
```

### Performance Metrics

| Metric | Value |
|--------|-------|
| **Average E2E Time** | ~79 seconds |
| **Token Throughput** | ~89 tokens/sec |
| **API Calls per Run** | 4 (1 extraction + 3 ranking) |
| **Recommendations** | Always 5 |
| **Optimization** | 70% reduction in API calls (pre-filtering) |

---

## 📊 Ranking System

### Hybrid Scoring Methodology

The system combines **deterministic (rule-based)** and **AI-powered** scoring:

#### Deterministic Dimensions (5)

These use pure mathematical formulas with **zero randomness**:

1. **Business Value**: `willingness_score × commission_rate`
2. **Total Cost**: `monthly_fee + amortized_upfront_costs`
3. **Distance**: Geodesic distance (ZIP-to-ZIP via GeoPy)
4. **Budget Efficiency**: `(monthly_fee / client_budget) × 100`
5. **Couple Friendliness**: Comparison of 2nd person fees

#### AI-Powered Dimensions (3)

These use **Gemini 2.5 Flash with temperature=0.0**:

6. **Availability Match**: Timeline compatibility analysis
7. **Amenity & Lifestyle**: Semantic matching of needs vs. features
8. **Holistic Fit**: Overall compatibility considering all factors

### Rank Aggregation

**Weighted Borda Count Formula:**
```
combined_score = Σ (rank_in_dimension × weight_of_dimension)
```

Lower scores = better recommendations.

### Determinism Guarantee

- **Temperature=0.0**: Same input = same output every time
- **Structured JSON**: Forces consistent data extraction
- **Reproducible Rankings**: Can audit and trace every recommendation

---

## 🔌 API Documentation

### Backend Endpoints

#### `POST /api/process-audio`
Process an uploaded audio file.

**Request:**
- `Content-Type: multipart/form-data`
- `audio`: Audio file (MP3, WAV, M4A, OGG, WebM, FLAC)
- `language`: Language code (optional, default: 'english')

**Response:**
```json
{
  "success": true,
  "client_info": {
    "client_name": "John Doe",
    "care_level": "Assisted Living",
    "budget": 5500,
    "timeline": "immediate",
    "location_preference": "14526"
  },
  "recommendations": [...],
  "metrics": {...}
}
```

#### `POST /api/process-text`
Process text consultation input.

**Request:**
```json
{
  "text": "Client consultation transcript...",
  "language": "english"
}
```

#### `GET /api/communities`
Get all communities from database.

#### `POST /api/communities`
Add a new community to database.

#### `PUT /api/communities/:id`
Update an existing community.

#### `DELETE /api/communities/:id`
Delete a community.

### WebSocket Events

#### `start_call`
Start a live audio consultation.

#### `audio_chunk`
Send audio data chunk (base64 encoded).

#### `end_call`
End the current call.

#### `pause_call` / `resume_call`
Pause/resume audio processing.

---

## ⚙️ Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|------------|
| `GEMINI_API_KEY` | Yes | Your Gemini API key |
| `GOOGLE_SPREADSHEET_ID` | No | Google Sheets ID for CRM |
| `GOOGLE_SERVICE_ACCOUNT_FILE` | No | Path to service account JSON |
| `SECRET_KEY` | Yes | Flask secret key |
| `ALLOWED_ORIGINS` | Yes | CORS allowed origins |

### Ranking Weights

Customize ranking priorities in `main_pipeline_ranking.py`:

```python
custom_weights = {
    'business': 1.5,      # Increase business priority
    'cost': 1.0,
    'distance': 0.8,      # Reduce distance importance
    'availability': 1.2,
    'budget_efficiency': 1.0,
    'couple': 1.0,
    'amenity': 1.0,
    'holistic': 1.0
}
```

### Database Schema

Required columns in `DataFile_students_OPTIMIZED.xlsx`:

- `CommunityID`: Unique identifier
- `Care Level`: Independent/Assisted/Memory Care
- `Monthly Fee`: Base monthly rate
- `ZIP`: 5-digit ZIP code
- `Work with Placement?`: Boolean
- `Contract Rate`: Commission percentage
- `Est. Waitlist`: Availability status
- `Enhanced`: Enhanced services available
- `Enriched`: Enriched programming available

---

## 🔍 Troubleshooting

### Common Issues

**Audio Not Being Picked Up**
- Check microphone permissions in browser
- Ensure AudioContext is resumed (click anywhere on page)
- Verify audio constraints in browser console

**Transcription Lag or Breakage**
- Check internet connection
- Verify Gemini API key is valid
- Check browser console for WebSocket errors

**Audio File Upload Fails**
- Ensure file format is supported (MP3, WAV, M4A, OGG, WebM, FLAC)
- Check file size (max 50MB)
- Verify file is not corrupted

**API Timeout Errors**
- System has built-in retry logic (3 attempts)
- Check internet connection
- Verify API key has sufficient quota

**Google Sheets Push Fails**
- Verify `.env` has correct `GOOGLE_SPREADSHEET_ID`
- Check spreadsheet is shared with service account email
- Ensure Google Sheets API is enabled in Google Cloud Console

**Port Already in Use**
- Backend: Change port in `app.py` (default: 5050)
- Frontend: Change port in `vite.config.ts` (default: 3000)

### Debug Mode

Enable verbose logging:

```python
# In app.py
import logging
logging.basicConfig(level=logging.DEBUG)
```

---

## 📚 Additional Documentation

- **[CLIENT_SETUP.md](CLIENT_SETUP.md)**: Detailed setup instructions for clients
- **[RANKING_SYSTEM_README.md](RANKING_SYSTEM_README.md)**: In-depth ranking system documentation
- **[GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md)**: Google Sheets CRM integration guide

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- **Python**: Follow PEP 8
- **TypeScript/React**: Use ESLint and Prettier
- **Commits**: Use descriptive commit messages

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini Team** - For the powerful Gemini 2.5 Flash model
- **OpenStreetMap Nominatim** - For geocoding services
- **React & Flask Communities** - For excellent frameworks and tools

---

## 🔗 Links

- [Gemini API Documentation](https://ai.google.dev/gemini-api/docs)
- [React Documentation](https://react.dev/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Project Repository](https://github.com/Shivyyyy-git/AI-Sales-Assistant-)

---

<div align="center">

**Built with ❤️ by the AI Senior Living Placement Assistant Team**

*Making senior living placement smarter, faster, and more accurate.*

</div>
