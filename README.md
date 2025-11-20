<div align="center">

# 🎯 AI Senior Living Placement Assistant

### *Transforming Senior Care Placement with Real-Time AI Intelligence*

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Gemini AI](https://img.shields.io/badge/Gemini-2.5%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Flask](https://img.shields.io/badge/Flask-3.0+-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Status: Production](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)]()

</div>

---

## 🌟 **The Problem We Solve**

Finding the perfect senior living community is **stressful, time-consuming, and emotionally draining**. Traditional placement processes involve:
- ❌ Hours of manual research
- ❌ Inconsistent matching criteria  
- ❌ Limited transparency in recommendations
- ❌ Delayed responses to urgent needs
- ❌ Human error in requirement extraction

**We've built something different.**

---

## ✨ **What Makes Us Different**

### 🚀 **Real-Time Intelligence**
Have a **live conversation** with clients and watch as our AI extracts requirements, analyzes communities, and delivers ranked recommendations **in real-time**—no waiting, no delays.

### 🧠 **8-Dimensional AI Analysis**
We don't just match on price and location. Our system evaluates communities across **8 sophisticated dimensions**:
- 💰 Business Value & Commission Optimization
- 💵 Total Cost Analysis (including hidden fees)
- 📍 Real Geocoded Distance Calculations
- ⏰ Timeline & Availability Matching
- 🏠 Amenity & Lifestyle Compatibility
- 👥 Couple-Friendly Options
- 💡 Budget Efficiency Scoring
- 🎯 Holistic Fit Assessment

### 🎯 **Deterministic & Explainable**
Every recommendation comes with **detailed reasoning**. Same input = same output. No black boxes, no guesswork—just transparent, auditable results.

### 🌍 **Multi-Language Support**
Break down language barriers. Currently supports **English** and **Spanish**, with **Hindi** coming soon.

---

## 🎬 **See It In Action**

```
┌─────────────────────────────────────────────────────────────┐
│  👤 Consultant: "Hi, I'm calling about senior living..."    │
│                                                             │
│  🤖 AI Assistant: [Listening... Analyzing...]             │
│                                                             │
│  📊 Dashboard Updates:                                      │
│     ✓ Care Level: Assisted Living                           │
│     ✓ Budget: $5,500/month                                  │
│     ✓ Timeline: Immediate                                  │
│     ✓ Location: ZIP 14618                                  │
│                                                             │
│  🎯 Top 5 Recommendations Generated                        │
│     → Ranked by 8-dimensional analysis                     │
│     → Detailed explanations provided                       │
│     → Ready for client review                               │
└─────────────────────────────────────────────────────────────┘
```

**Average Processing Time:** ~79 seconds from conversation to ranked recommendations

---

## 🏗️ **Architecture Overview**

```
┌─────────────────────────────────────────────────────────────┐
│                    🎨 Modern React Frontend                 │
│  • Real-time audio capture & streaming                     │
│  • Live transcription display                              │
│  • Interactive dashboard & recommendations                 │
│  • Beautiful, responsive UI (Tailwind CSS)                │
└────────────────────┬────────────────────────────────────────┘
                     │ WebSocket (SocketIO)
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              ⚡ Flask Backend (Python)                      │
│  • Real-time WebSocket communication                       │
│  • Audio processing pipeline                               │
│  • API endpoint management                                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│         🤖 Google Gemini 2.5 Flash Live API                │
│  • Real-time speech-to-text                                │
│  • Intelligent requirement extraction                       │
│  • Contextual understanding                                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│            🔍 Smart Filtering Engine                       │
│  • Care level matching                                     │
│  • Budget compatibility                                     │
│  • Timeline alignment                                       │
│  • Enhanced/Enriched services                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│        📊 8-Dimension Ranking System                        │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Rule-Based   │  │ Rule-Based   │  │ AI-Powered   │     │
│  │ Rankings     │  │ Rankings     │  │ Rankings     │     │
│  │ (5 dims)     │  │ (continued)  │  │ (3 dims)     │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                             │
│  → Weighted Borda Count Aggregation                        │
│  → Always 5 Ranked Recommendations                          │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│            📈 CRM Integration (Google Sheets)               │
│  • Automatic consultation logging                          │
│  • Recommendation tracking                                 │
│  • Performance analytics                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 **Quick Start**

### **Prerequisites**

- 🐍 **Python 3.9+** ([Download](https://www.python.org/downloads/))
- 📦 **Node.js 18+** ([Download](https://nodejs.org/))
- 🔑 **Gemini API Key** ([Get one here](https://ai.google.dev/))

### **⚡ One-Command Setup**

**Mac/Linux:**
```bash
chmod +x START.sh && ./START.sh
```

**Windows:**
```bash
START.bat
```

### **📝 Manual Setup**

<details>
<summary><b>Click to expand detailed setup instructions</b></summary>

#### **1. Clone the Repository**
```bash
git clone https://github.com/Shivyyyy-git/AI-Sales-Assistant-.git
cd senior-community-recom-engine-1
```

#### **2. Backend Setup**
```bash
# Create virtual environment
python3 -m venv venv

# Activate (Mac/Linux)
source venv/bin/activate

# Activate (Windows)
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

#### **3. Frontend Setup**
```bash
cd .studio_import
npm install
```

#### **4. Environment Configuration**
Create `.env` file:
```env
GEMINI_API_KEY=your_api_key_here
SECRET_KEY=your_secret_key_here
ALLOWED_ORIGINS=http://localhost:3000

# Optional: Google Sheets CRM
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_FILE=path/to/service-account.json
```

#### **5. Run the Application**
```bash
# Terminal 1: Backend
python app.py

# Terminal 2: Frontend
cd .studio_import && npm run dev
```

**Access:** http://localhost:3000 🎉

</details>

---

## 💡 **Key Features Deep Dive**

### 🎤 **Real-Time Audio Processing**
- **Live Transcription**: Watch conversations transcribed in real-time
- **Multi-Format Support**: Upload MP3, WAV, M4A, OGG, WebM, FLAC files
- **Advanced Noise Filtering**: Professional audio processing pipeline
- **Language Flexibility**: English, Spanish (Hindi coming soon)

### 🤖 **AI-Powered Intelligence**
- **Smart Extraction**: Automatically identifies care level, budget, timeline, location, special needs
- **Contextual Understanding**: Understands nuanced requirements ("near my daughter" → location inference)
- **Deterministic Output**: Temperature=0.0 ensures consistent, reproducible results

### 📊 **Advanced Ranking System**

Our **8-dimension hybrid ranking** combines:

**Rule-Based Dimensions (5):**
1. **Business Value** - Commission rates × willingness scores
2. **Total Cost** - Monthly fees + amortized upfront costs
3. **Distance** - Real geocoded ZIP-to-ZIP calculations
4. **Budget Efficiency** - Utilization percentage analysis
5. **Couple Friendliness** - Second person fee comparison

**AI-Powered Dimensions (3):**
6. **Availability Match** - Timeline compatibility analysis
7. **Amenity & Lifestyle** - Semantic matching of needs vs. features
8. **Holistic Fit** - Overall compatibility assessment

**Result:** Weighted Borda Count aggregation → Always 5 ranked recommendations with detailed explanations

### 💼 **Business Features**
- ⭐ **Partner Spotlight** - Highlights partner communities for commission optimization
- 📊 **CRM Integration** - Automatic Google Sheets push (consultations, recommendations, analytics)
- 📧 **Email Integration** - Send recommendations to clients or managers
- 🔄 **Comparison Tool** - Side-by-side community comparison
- 📜 **Call History** - Track all consultations and outcomes

---

## 📈 **Performance Metrics**

| Metric | Value | Why It Matters |
|--------|-------|----------------|
| **Average E2E Time** | ~79 seconds | From conversation to ranked recommendations |
| **Token Throughput** | ~89 tokens/sec | Fast AI processing |
| **API Calls per Run** | 4 calls | Optimized (1 extraction + 3 ranking) |
| **Recommendations** | Always 5 | Consistent CRM integration |
| **Optimization** | 70% reduction | Pre-filtering reduces API calls |

---

## 🛠️ **Technology Stack**

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 18+, TypeScript, Vite | Modern, type-safe UI |
| **Styling** | Tailwind CSS | Beautiful, responsive design |
| **Backend** | Python 3.9+, Flask, SocketIO | Real-time communication |
| **AI** | Google Gemini 2.5 Flash Live | Speech-to-text & intelligence |
| **Data** | Pandas, NumPy | Community data processing |
| **CRM** | Google Sheets API | Automatic tracking |
| **Geocoding** | GeoPy, OpenStreetMap | Real distance calculations |

---

## 📚 **Documentation**

- 📖 **[CLIENT_SETUP.md](CLIENT_SETUP.md)** - Detailed setup guide for clients
- 📊 **[RANKING_SYSTEM_README.md](RANKING_SYSTEM_README.md)** - Deep dive into ranking algorithms
- 📈 **[GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md)** - CRM integration guide

---

## 🔌 **API Reference**

### **Backend Endpoints**

#### `POST /api/process-audio`
Process uploaded audio file and return recommendations.

**Request:**
```bash
curl -X POST http://localhost:5050/api/process-audio \
  -F "audio=@consultation.m4a" \
  -F "language=english"
```

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
  "recommendations": [
    {
      "final_rank": 1,
      "community_name": "Community 31",
      "combined_rank_score": 37.0,
      "key_metrics": {
        "monthly_fee": 3528.0,
        "distance_miles": 3.83,
        "est_waitlist": "Available"
      },
      "explanations": {
        "holistic_reason": "Great option: Good cost and immediately available..."
      }
    }
  ],
  "metrics": {
    "total_time": 72.65,
    "total_cost": 0.004288
  }
}
```

#### `POST /api/process-text`
Process text consultation input.

#### `GET /api/communities`
Retrieve all communities from database.

#### `POST /api/communities`
Add new community to database.

### **WebSocket Events**

- `start_call` - Begin live audio consultation
- `audio_chunk` - Send audio data (base64 encoded)
- `end_call` - End current call
- `pause_call` / `resume_call` - Control audio processing

---

## ⚙️ **Configuration**

### **Environment Variables**

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | ✅ Yes | Your Gemini API key |
| `SECRET_KEY` | ✅ Yes | Flask secret key |
| `ALLOWED_ORIGINS` | ✅ Yes | CORS allowed origins |
| `GOOGLE_SPREADSHEET_ID` | ❌ No | Google Sheets ID for CRM |
| `GOOGLE_SERVICE_ACCOUNT_FILE` | ❌ No | Service account JSON path |

### **Custom Ranking Weights**

Adjust priorities in `main_pipeline_ranking.py`:

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

---

## 🐛 **Troubleshooting**

<details>
<summary><b>Common Issues & Solutions</b></summary>

### **Audio Not Being Picked Up**
- ✅ Check microphone permissions in browser
- ✅ Ensure AudioContext is resumed (click anywhere on page)
- ✅ Verify audio constraints in browser console

### **Transcription Lag or Breakage**
- ✅ Check internet connection
- ✅ Verify Gemini API key is valid
- ✅ Check browser console for WebSocket errors

### **Audio File Upload Fails**
- ✅ Ensure file format is supported (MP3, WAV, M4A, OGG, WebM, FLAC)
- ✅ Check file size (max 50MB)
- ✅ Verify file is not corrupted

### **API Timeout Errors**
- ✅ System has built-in retry logic (3 attempts)
- ✅ Check internet connection
- ✅ Verify API key has sufficient quota

### **Port Already in Use**
- ✅ Backend: Change port in `app.py` (default: 5050)
- ✅ Frontend: Change port in `vite.config.ts` (default: 3000)

</details>

---

## 👥 **Project Team**

<div align="center">

| Role | Name |
|------|------|
| **Project Team** | Shivam Sharma, Ritwik Agrawal, Manu Jain, Yu Chen Lin (Ryan) |
| **Faculty Advisor** | Professor Elizabeth Mohr |
| **Client Partner** | Neil Russell, Culina Health |

</div>

---

## 🤝 **Contributing**

We welcome contributions! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔄 **Open** a Pull Request

### **Code Style**
- **Python**: Follow PEP 8
- **TypeScript/React**: Use ESLint and Prettier
- **Commits**: Use descriptive commit messages

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **Google Gemini Team** - For the powerful Gemini 2.5 Flash model
- **OpenStreetMap Nominatim** - For geocoding services
- **React & Flask Communities** - For excellent frameworks and tools

---

## 🔗 **Useful Links**

- 🔵 [Gemini API Documentation](https://ai.google.dev/gemini-api/docs)
- ⚛️ [React Documentation](https://react.dev/)
- 🐍 [Flask Documentation](https://flask.palletsprojects.com/)
- 📦 [Project Repository](https://github.com/Shivyyyy-git/AI-Sales-Assistant-)

---

<div align="center">

### **🌟 Star this repo if you find it helpful!**

**Built with ❤️ by the AI Senior Living Placement Assistant Team**

*Making senior living placement smarter, faster, and more accurate.*

[⬆ Back to Top](#-ai-senior-living-placement-assistant)

</div>
