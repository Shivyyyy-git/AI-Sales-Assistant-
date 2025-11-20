# WebSocket Closure Diagnostic Guide
**Date:** November 19, 2025  
**Issue:** WebSocket closes immediately after opening  
**Status:** 🔍 DIAGNOSING

---

## 🔍 **Current Status**

### **What's Working:**
✅ API Key loaded correctly: `AIzaSyCKqhvL30SESAqFMkrE3xfoXO_0e1fhA-g`  
✅ Model name correct: `gemini-2.5-flash-live-preview`  
✅ Session opens successfully  
✅ Audio processing starts  
✅ Initial test chunk sent  

### **What's Failing:**
❌ WebSocket closes immediately after first chunk  
❌ Error: "WebSocket is already in CLOSING or CLOSED state"  
❌ Session closes before audio can be processed  

---

## 🔴 **Root Cause Analysis**

The WebSocket closing immediately after opening typically indicates:

### **1. API-Side Rejection (Most Likely)**
- **API Quota Exceeded** - Check Google Cloud Console
- **Invalid API Key Permissions** - Key might not have Gemini Live API access
- **Billing Issue** - Account might not be enabled for billing
- **API Key Restrictions** - IP/domain restrictions blocking the connection

### **2. Configuration Issue**
- **Model Name** - Already verified as correct
- **Audio Format** - PCM format might be incorrect
- **Sample Rate** - Mismatch between audio context and API expectations

### **3. Network/Firewall**
- **CORS Issues** - Unlikely, but possible
- **Firewall Blocking** - WebSocket connections blocked
- **Proxy Issues** - Development proxy interfering

---

## 🔧 **Diagnostic Steps**

### **Step 1: Check Google Cloud Console**

1. **Go to:** https://console.cloud.google.com/apis/dashboard
2. **Check API Quotas:**
   - Navigate to "APIs & Services" > "Dashboard"
   - Find "Generative Language API" or "Gemini API"
   - Check quota usage and limits
3. **Check API Errors:**
   - Go to "APIs & Services" > "Logs"
   - Filter for "Generative Language API"
   - Look for 400/403/429 errors
4. **Verify API Key:**
   - Go to "APIs & Services" > "Credentials"
   - Find your API key
   - Check:
     - ✅ API restrictions (should allow Gemini API)
     - ✅ Application restrictions (should allow your domain/IP)
     - ✅ Key is enabled

### **Step 2: Check Browser Console**

Look for these specific errors:

```javascript
// Check for API errors
[DEBUG] Session error: ...
[DEBUG] Error type: ...
[DEBUG] Error message: ...
[DEBUG] Error details: ...

// Check for WebSocket errors
WebSocket is already in CLOSING or CLOSED state
```

### **Step 3: Test API Key Directly**

```bash
# Test API key with curl
curl -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"Hello"}]}]}' \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyCKqhvL30SESAqFMkrE3xfoXO_0e1fhA-g"
```

**Expected:** JSON response with generated content  
**If Error:** Check the error message for clues

### **Step 4: Check Network Tab**

1. Open browser DevTools > Network tab
2. Filter for "WebSocket" or "ws://" / "wss://"
3. Click on the WebSocket connection
4. Check:
   - **Status Code** - Should be 101 (Switching Protocols)
   - **Response Headers** - Look for error messages
   - **Messages** - Check if any error messages are sent before closure

---

## 🛠️ **Potential Fixes**

### **Fix 1: Verify API Key Has Live API Access**

```bash
# Check if API key has Gemini Live API enabled
# Go to: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com
# Ensure API is enabled for your project
```

### **Fix 2: Check Billing**

```bash
# Ensure billing is enabled
# Go to: https://console.cloud.google.com/billing
# Check if billing account is linked and active
```

### **Fix 3: Remove API Key Restrictions (Temporarily)**

1. Go to Google Cloud Console > Credentials
2. Click on your API key
3. Under "API restrictions":
   - Select "Don't restrict key" (temporarily)
   - Save
4. Test again
5. If it works, add restrictions back gradually

### **Fix 4: Check Audio Format**

The current audio format:
- **Sample Rate:** 16000 Hz
- **Format:** PCM (Float32Array converted to Blob)
- **Channels:** Mono (1 channel)

**Verify this matches Gemini Live API requirements.**

### **Fix 5: Add More Error Logging**

The code already has enhanced error logging in `onerror` callback. Check the console for:
- Error type
- Error message
- Full error details

---

## 📊 **Expected Console Output (Working)**

```
[API Key] Loaded from environment variables
🔑 GEMINI API KEY CHECK
API Key found: ✅ YES
[DEBUG] Creating GoogleGenAI client...
[DEBUG] Microphone access granted
[DEBUG] Session opened, setting up audio...
[DEBUG] Session stored and ready for audio
[DEBUG] Audio processing ready
[DEBUG] ✅ Initial test chunk sent successfully
[DEBUG] ✅ First audio chunk processed! Audio capture is working.
```

**Should NOT see:**
- ❌ "WebSocket is already in CLOSING or CLOSED state"
- ❌ "Session closed."
- ❌ Any error messages in `onerror` callback

---

## 🎯 **Next Steps**

1. **Check Google Cloud Console** for API errors/quota
2. **Check Browser Console** for detailed error messages
3. **Test API Key** with curl command above
4. **Check Network Tab** for WebSocket connection details
5. **Share Error Details** - The enhanced error logging should show the exact error

---

## 📝 **Code Changes Made**

### **Enhanced Error Logging:**
```typescript
onerror: (e: ErrorEvent) => {
  console.error('[DEBUG] ❌ Session error:', e);
  console.error('[DEBUG] Error type:', e.type);
  console.error('[DEBUG] Error message:', e.message);
  console.error('[DEBUG] Error details:', JSON.stringify(e, null, 2));
  // ...
}
```

### **Session Storage Improvements:**
- Added `sessionObject` variable for immediate access
- Reduced polling timeout to 100ms
- Dual session access (`sessionObject || sessionRef`)

---

## 🔗 **Useful Links**

- **Google Cloud Console:** https://console.cloud.google.com
- **API Dashboard:** https://console.cloud.google.com/apis/dashboard
- **API Logs:** https://console.cloud.google.com/logs
- **Credentials:** https://console.cloud.google.com/apis/credentials
- **Billing:** https://console.cloud.google.com/billing

---

## ✅ **If Still Not Working**

Please share:
1. **Browser Console Output** - Full error messages
2. **Network Tab Screenshot** - WebSocket connection details
3. **Google Cloud Console Errors** - Any API errors shown
4. **API Key Status** - From credentials page

This will help identify the exact issue!

