
import { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Heart, 
  MessageSquare, 
  Share2, 
  Calendar
} from 'lucide-react';

const SocialHub = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { label: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
    { label: 'Twitter/X', icon: <Twitter className="w-5 h-5" /> },
    { label: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
    { label: 'YouTube', icon: <Youtube className="w-5 h-5" /> }
  ];
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Social Media Hub</h1>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5" />
            <span>Twitter/X</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white hover:opacity-90 transition-opacity"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Youtube className="w-5 h-5" />
            <span>YouTube</span>
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-6 flex flex-wrap border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex items-center px-6 py-3 text-sm font-medium whitespace-nowrap ${
                  activeTab === index 
                    ? 'text-btn border-b-2 border-btn' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            {activeTab === 0 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Instagram Feed</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
                      <div className="flex items-center p-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <div className="ml-2">
                          <p className="text-sm font-medium">btncaliofficial</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-200 dark:bg-gray-700 aspect-square flex items-center justify-center">
                        <p className="text-gray-400 dark:text-gray-500 text-sm">Instagram Post {item}</p>
                      </div>
                      
                      <div className="p-3">
                        <div className="flex gap-4 mb-2">
                          <button className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            <MessageSquare className="w-5 h-5" />
                          </button>
                          <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-sm font-medium mb-1">1,234 likes</p>
                        <p className="text-sm">
                          <span className="font-medium">btncaliofficial</span> Supporting Cali on his journey! #BTNCali #BeTheNextDreamer
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Twitter/X Feed</h3>
                
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="ml-3">
                          <p className="font-medium">BTN Cali Official</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">@BTNCaliOfficial</p>
                        </div>
                      </div>
                      
                      <p className="mb-3 text-sm">
                        Don't forget to vote for Cali in tonight's episode! Let's show our support and help him make it to the next round! #VoteForCali #BTNDreamer
                      </p>
                      
                      <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>2:30 PM · Dec 5, 2023</span>
                      </div>
                      
                      <div className="flex gap-6 mt-3 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>542</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>32</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" />
                          <span>128</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Facebook Posts</h3>
                
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <div className="flex items-center p-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                        <div className="ml-3">
                          <p className="font-medium">BTN Cali Official</p>
                          <p className="text-gray-500 dark:text-gray-400 text-xs">December 5 at 2:30 PM</p>
                        </div>
                      </div>
                      
                      <div className="px-4 pb-3">
                        <p className="mb-4">
                          Check out Cali's amazing performance from last night's episode! He absolutely nailed it. 🌟 
                          #BTNCali #BeTheNextDreamer #9Dreamers
                        </p>
                        <div className="bg-gray-200 dark:bg-gray-700 aspect-video rounded-lg flex items-center justify-center mb-4">
                          <p className="text-gray-400 dark:text-gray-500 text-sm">Video Content</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2 flex items-center justify-between">
                        <div className="flex gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          <Heart className="w-5 h-5" />
                          <span>1.2K</span>
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">
                          <span>234 comments</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">YouTube Videos</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow">
                      <div className="bg-gray-200 dark:bg-gray-700 aspect-video flex items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 15.5L16 12L10 8.5V15.5Z" fill="white"/>
                            </svg>
                          </div>
                        </div>
                        <p className="text-gray-400 dark:text-gray-500 text-sm">Video Thumbnail</p>
                      </div>
                      
                      <div className="p-4">
                        <h4 className="font-medium mb-1">Cali's Best Moments - Episode {item}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">BTN Cali Official</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs">12K views • 3 days ago</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <a href="#" className="text-btn hover:underline">View All Videos</a>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Fan Spotlight</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
                <div className="bg-gray-200 dark:bg-gray-700 aspect-square flex items-center justify-center">
                  <p className="text-gray-400 dark:text-gray-500 text-sm">Fan Content {item}</p>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium mb-2">Amazing Fan Edit by @fan{item}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Check out this incredible edit showcasing Cali's journey so far!
                  </p>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Heart className="w-4 h-4 mr-1" />
                      <span>{item * 100 + 50}</span>
                    </div>
                    <button className="text-btn hover:underline text-sm">Share</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHub;
