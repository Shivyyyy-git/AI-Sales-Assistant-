


import React, { useRef, useState, useEffect } from 'react';
import { CallStatus, SupportedLanguage } from '../types';

interface CallControlsProps {
  status: CallStatus;
  isAgentAssistMode: boolean;
  isCallPaused: boolean;
  selectedLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onStart: () => void;
  onEnd: () => void;
  onToggleAssistMode: () => void;
  onTogglePause: () => void;
  onEscalate: () => void;
  onSaveSummary: () => void;
  onAudioFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onProcessText: () => void;
  hasData: boolean;
}

const CallStatusIndicator: React.FC<{ status: CallStatus, isAgentAssistMode: boolean, subtitle?: string }> = ({ status, isAgentAssistMode, subtitle }) => {
    let color = 'bg-gray-400';
    let text = 'Idle';
    let showPing = false;
    let animationClass = '';

    if (status === CallStatus.CONNECTING) {
        color = 'bg-yellow-400';
        text = 'Connecting';
        showPing = true;
    } else if (status === CallStatus.ACTIVE) {
        if(isAgentAssistMode) {
            color = 'bg-purple-500';
            text = 'Agent Assist';
        } else {
            color = 'bg-green-500';
            text = 'Live Call';
        }
        animationClass = 'animate-pulse';
    } else if (status === CallStatus.PROCESSING) {
        color = 'bg-blue-500';
        text = 'Processing';
        showPing = true;
    } else if (status === CallStatus.ERROR) {
        color = 'bg-red-500';
        text = 'Error';
    }

    return (
        <div className="flex items-center space-x-2">
            <span className="relative flex h-3 w-3 mt-1 self-start">
                {showPing && <span className={`absolute inline-flex h-full w-full rounded-full ${color} animate-ping opacity-75`}></span>}
                <span className={`relative inline-flex rounded-full h-3 w-3 ${color} ${animationClass}`}></span>
            </span>
            <div>
                 <span className="text-sm font-semibold text-gray-700">{text}</span>
                 {subtitle && <span className="block text-xs text-gray-500 -mt-1">{subtitle}</span>}
            </div>
        </div>
    );
};


const CallControls: React.FC<CallControlsProps> = ({ status, isAgentAssistMode, isCallPaused, selectedLanguage, onLanguageChange, onStart, onEnd, onToggleAssistMode, onTogglePause, onEscalate, onSaveSummary, onAudioFileSelect, onProcessText, hasData }) => {
  const isCallActiveOrConnecting = status === CallStatus.ACTIVE || status === CallStatus.CONNECTING;
  const isCallActive = status === CallStatus.ACTIVE;
  const isProcessing = status === CallStatus.PROCESSING;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const buttonBaseClasses = "px-4 py-2 text-sm font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F8F7F2] transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";

  const languages: { code: SupportedLanguage; name: string; disabled?: boolean; note?: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'hi', name: 'हिन्दी (Coming Soon)', disabled: true, note: 'Coming Soon' },
  ];

  const currentLanguage = languages.find(l => l.code === selectedLanguage) || languages[0];

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false);
      }
    };

    if (showLanguageMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageMenu]);

  return (
    <div className="flex items-center space-x-4">
      {/* Language Selector - Always reserve space to prevent layout shift */}
      <div className="relative" ref={languageMenuRef}>
        {!isCallActiveOrConnecting ? (
          <>
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              disabled={isProcessing}
              className={`${buttonBaseClasses} bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500`}
              title="Select Language"
            >
              <div className="text-left">
                <div className="text-sm font-semibold">{currentLanguage.name}</div>
                {currentLanguage.code === 'hi' && <p className="text-[11px] text-amber-600">Coming soon</p>}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showLanguageMenu && (
              <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      if (lang.disabled) return;
                      onLanguageChange(lang.code);
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 flex items-center transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      lang.disabled ? 'opacity-60 cursor-not-allowed bg-gray-50 text-gray-400' : 'hover:bg-gray-50 text-gray-700'
                    } ${lang.code === selectedLanguage ? 'bg-blue-50 text-blue-600 font-semibold' : ''}`}
                    disabled={lang.disabled}
                  >
                    <div className="flex flex-col flex-1">
                      <span>{lang.name}</span>
                      {lang.note && <span className="text-[11px] text-amber-600">{lang.note}</span>}
                    </div>
                    {lang.code === selectedLanguage && !lang.disabled && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          // Invisible placeholder to maintain layout when call is active
          <div className={`${buttonBaseClasses} bg-transparent border border-transparent invisible pointer-events-none`} aria-hidden="true">
            <div className="text-left">
              <div className="text-sm font-semibold">{currentLanguage.name}</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
      
      {isCallActiveOrConnecting ? (
         <div className="flex items-center space-x-2">
            <CallStatusIndicator 
              status={status} 
              isAgentAssistMode={isAgentAssistMode}
              subtitle={isAgentAssistMode && isCallActive ? 'Silent Mode' : undefined}
            />
            <button
                onClick={onToggleAssistMode}
                disabled={!isCallActive}
                className={`${buttonBaseClasses} ${isAgentAssistMode ? 'bg-purple-600 border border-transparent text-white hover:bg-purple-700 focus:ring-purple-500' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500'}`}
                title={isAgentAssistMode ? "Re-engage Live Call mode: The AI will resume speaking and actively participate in the conversation." : "Switch to Agent Assist mode: The AI will become silent and provide text-based guidance while you take over the conversation."}
                >
                {isAgentAssistMode ? (
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" /></svg>
                    Re-engage AI
                    </>
                ) : (
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    Transfer to Agent
                    </>
                )}
            </button>
            <button
                onClick={onTogglePause}
                disabled={!isCallActive}
                className={`${buttonBaseClasses} ${isCallPaused ? 'bg-green-100 border-green-200 text-green-700 hover:bg-green-200 focus:ring-green-500' : 'bg-yellow-100 border-yellow-200 text-yellow-700 hover:bg-yellow-200 focus:ring-yellow-500'}`}
                title={isCallPaused ? "Resume call" : "Pause call"}
            >
                {isCallPaused ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Resume
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Pause
                    </>
                )}
            </button>
            <button
                onClick={onEscalate}
                disabled={!isCallActive}
                className={`${buttonBaseClasses} bg-amber-100 border border-amber-200 text-amber-700 hover:bg-amber-200 focus:ring-amber-500`}
                title="Escalate call to a manager"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" /></svg>
                Escalate
            </button>
            <button
                onClick={onEnd}
                className={`${buttonBaseClasses} bg-red-600 border border-transparent text-white hover:bg-red-700 focus:ring-red-500`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2 2m-2-2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8" />
                </svg>
                End Call
            </button>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
            {hasData && !isProcessing && (
                 <button
                    onClick={onSaveSummary}
                    className={`${buttonBaseClasses} bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500`}
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                    Save Summary
                 </button>
            )}
             <input
                type="file"
                ref={fileInputRef}
                onChange={onAudioFileSelect}
                accept="audio/mpeg,audio/mp3,audio/wav,audio/x-wav,audio/m4a,audio/x-m4a,audio/ogg,audio/webm,audio/flac,.mp3,.wav,.m4a,.ogg,.webm,.flac"
                className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isProcessing}
              className={`${buttonBaseClasses} bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500`}
              title="Upload Call Recording"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              Upload
            </button>
            <button
              onClick={onProcessText}
              disabled={isProcessing}
              className={`${buttonBaseClasses} bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500`}
              title="Process a text transcript"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Process Text
            </button>
            {status === CallStatus.ERROR ? (
              <button
                onClick={onStart}
                disabled={isProcessing}
                className={`${buttonBaseClasses} bg-red-600 border border-transparent text-white hover:bg-red-700 focus:ring-red-500 animate-pulse ring-4 ring-red-300 ring-opacity-50 transform transition-transform hover:scale-105`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Error - Retry
              </button>
            ) : isCallActiveOrConnecting ? (
              <button
                onClick={onEnd}
                className={`${buttonBaseClasses} bg-green-600 border border-transparent text-white hover:bg-green-700 focus:ring-green-500`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
                End
              </button>
            ) : (
              <button
                onClick={onStart}
                disabled={isProcessing}
                className={`${buttonBaseClasses} bg-blue-600 border border-transparent text-white hover:bg-blue-700 focus:ring-blue-500`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Start Call
              </button>
            )}
        </div>
      )}
    </div>
  );
};

export default CallControls;
