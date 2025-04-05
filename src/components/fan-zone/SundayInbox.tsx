
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Music, Pause, Play } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Create a typing effect component
const TypeWriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const speed = 40; // typing speed in ms
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  return (
    <div className="whitespace-pre-line">
      {displayText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </div>
  );
};

const SundayInbox = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  
  const fanMessage = `To Cali,

Every week, we watch you grow—not just as a trainee, but as someone who continues to inspire many with your heart, passion, and unwavering dedication. This journey hasn't been easy, but you continue to face every challenge with courage and grit.

I've always believed in you since Day 1. We've been through thick and thin, and I know the road hasn't always been smooth—but we carried on and pursued this dream together. Some may have doubted your skills and potential, but time and time again, you slay those doubts with your growth, hard work, and sincerity.

Whatever happens, I'm always proud of you. I'll keep cheering and supporting you, no matter where this journey takes us.

Thank you for sharing your dreams with your fans. Thank you for never giving up. Know that I'm always here for you—always have been, and always will be. Your light reaches farther than you know, and your DreamKeepers will always be by your side, cheering you on.

Lezz gaur and fightinggg!! 💜
— Admin Kim`;

  const handleEnvelopeClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setTimeout(() => {
        setIsTyping(true);
      }, 1000); // Start typing after the envelope is fully open
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.3; // Lower volume for background music
        audioRef.current.play().catch(error => {
          toast({
            title: "Playback Error",
            description: "Please interact with the page first to enable audio playback.",
            variant: "destructive",
          });
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="py-8 px-4">
      <h3 className="text-2xl font-bold text-center mb-8">Sunday Inbox 💌</h3>
      
      {/* Audio control */}
      <div className="flex justify-end mb-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={toggleMusic}
          className="flex items-center gap-2"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          <Music size={16} />
          <span className="text-sm">{isPlaying ? 'Pause Music' : 'Play Music'}</span>
        </Button>
      </div>
      
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/download/audio/2021/11/25/audio_cb15d9640d.mp3?filename=relaxing-135575.mp3"
        loop
      />
      
      <div className="flex justify-center perspective-[1000px]">
        <div 
          className={`relative w-full max-w-2xl transition-all duration-1000 transform-style-3d cursor-pointer ${
            isFlipped ? "rotate-x-180" : ""
          }`}
          style={{ height: isFlipped ? "500px" : "250px" }}
        >
          {/* Front of envelope */}
          <div 
            className={`absolute inset-0 backface-hidden bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg rounded-lg flex flex-col items-center justify-center p-6 border-2 border-purple-300 ${
              isFlipped ? "invisible" : ""
            }`}
            onClick={handleEnvelopeClick}
          >
            <Mail className="h-16 w-16 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-center text-purple-700">Sunday Message for Cali</h3>
            <p className="text-sm text-purple-600 mt-2 text-center">Click to open</p>
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-300 skew-y-[45deg] transform origin-top-right"></div>
          </div>
          
          {/* Back of envelope (message) */}
          <div 
            className="absolute inset-0 backface-hidden rotate-x-180 bg-white shadow-lg rounded-lg p-8 overflow-y-auto"
          >
            <div className="max-h-[450px] prose prose-sm overflow-y-auto">
              {isTyping ? (
                <div className="font-handwritten text-gray-800 leading-relaxed">
                  <TypeWriter text={fanMessage} />
                </div>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-pulse">Loading message...</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SundayInbox;
