// AudioWorklet processor for capturing microphone audio
class AudioCaptureProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.frameCount = 0;
    this.messageCount = 0;
    
    // Listen for messages from main thread
    this.port.onmessage = (event) => {
      if (event.data.type === 'ping') {
        this.port.postMessage({ type: 'pong', frameCount: this.frameCount });
      }
    };
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    
    // Process input audio
    if (input && input.length > 0) {
      const inputChannel = input[0];
      
      // Send audio data directly (128 samples per call at 16kHz = ~8ms chunks)
      // This matches what Gemini expects - small, frequent chunks
      if (inputChannel && inputChannel.length > 0) {
        // Create a copy of the audio data
        const audioData = new Float32Array(inputChannel.length);
        audioData.set(inputChannel);
        
        // Send to main thread
        try {
          this.port.postMessage({
            type: 'audioData',
            data: audioData,
            frameCount: this.frameCount++
          });
          this.messageCount++;
        } catch (e) {
          // Ignore errors if port is closed
        }
      }
    }
    
    return true; // Keep processor alive
  }
}

registerProcessor('audio-capture-processor', AudioCaptureProcessor);

