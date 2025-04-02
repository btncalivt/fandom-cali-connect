
import { useState } from 'react';
import { CheckCircle, Info, Phone, Award, FileText } from 'lucide-react';

const VotingTeam = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { label: 'How to Vote', icon: <FileText className="w-5 h-5" /> },
    { label: 'Voting Schedule', icon: <Phone className="w-5 h-5" /> },
    { label: 'Join Team', icon: <Award className="w-5 h-5" /> }
  ];
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Voting Team</h1>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-8">
            <div className="flex flex-col sm:flex-row items-center mb-8 gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Info className="text-btn w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Why Your Vote Matters</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  In Be The Next Dreamer, fan votes directly impact which contestants advance to the next round and 
                  ultimately debut as part of 9 Dreamers. Your vote for Cali is crucial to his success in the competition!
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-lg font-semibold mb-4">Live Voting Updates</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                <p className="text-center text-gray-500 dark:text-gray-400 italic">
                  Voting updates will appear here during active voting periods. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="mb-6 flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex items-center px-5 py-3 text-sm font-medium ${
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
                <h3 className="text-xl font-bold mb-6 text-btn">How to Vote for Cali</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Download the Official App</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Download the Be The Next Dreamer official app from the App Store or Google Play Store.
                      </p>
                      <div className="flex gap-4 mt-2">
                        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M17.5,7.71a3.31,3.31,0,0,0-1,.16A4.62,4.62,0,0,0,8.5,8L9.92,3.76A.75.75,0,0,0,9.22,2.8H6a.75.75,0,0,0-.7.48L2.38,13A.75.75,0,0,0,3.08,14H6.3a.75.75,0,0,0,.7-.48L8.25,9.9a3.1,3.1,0,0,1,5.9.6.8.8,0,0,0,.78.5h2.9a.7.7,0,0,0,.72-.87A4.62,4.62,0,0,0,17.5,7.71Z"/>
                            <path d="M21.9,14.29a4.62,4.62,0,0,0-8-1.59l1.42-4.24a.75.75,0,0,0-.7-1H11.4a.75.75,0,0,0-.7.48L7.78,17.72a.75.75,0,0,0,.7,1h3.22a.75.75,0,0,0,.7-.48l1.25-3.62a3.1,3.1,0,0,1,5.9.6.8.8,0,0,0,.78.5h2.9a.7.7,0,0,0,.72-.87A4.62,4.62,0,0,0,21.9,14.29Z"/>
                          </svg>
                          App Store
                        </button>
                        <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M3.18,20.83A2,2,0,0,1,3,20V4A2,2,0,0,1,3.18,3.17L13,12ZM5,17.17,10.88,12,5,6.83ZM12,14.29l8.89,5a2,2,0,0,0,.11-.24V5a2,2,0,0,0-.11-.25Z"/>
                          </svg>
                          Google Play
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Create an Account</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Sign up for an account using your email address or social media accounts. 
                        Verify your account through the confirmation email sent to you.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Navigate to Voting Section</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Open the app and go to the "Vote" or "Voting" section. This is usually 
                        prominently displayed during active voting periods.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Find and Vote for Cali</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Locate Cali among the contestants and tap on his profile. Select the number of votes 
                        you wish to cast (you may have a daily limit) and confirm your vote.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="text-green-600 dark:text-green-400 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Daily Voting</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Remember to vote every day during the voting period to maximize Cali's chances. 
                        Set reminders so you don't miss a day!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Video Tutorial</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      className="w-full h-64 rounded-lg"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="How to Vote for Cali"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Voting Schedule</h3>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4">
                      <h4 className="font-semibold">Upcoming Voting Periods</h4>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Episode 8 Voting</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Top 18 Elimination Round</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-btn">Dec 15 - Dec 18, 2023</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">11:59 PM KST</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Episode 9 Voting</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Top 12 Selection</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-btn">Dec 22 - Dec 25, 2023</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">11:59 PM KST</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Semi-Final Voting</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Top 9 Selection</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-btn">Jan 5 - Jan 8, 2024</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">11:59 PM KST</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">Final Voting</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">9 Dreamers Final Lineup</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-btn">Jan 15 - Jan 20, 2024</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Live During Finale</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Info className="text-yellow-600 dark:text-yellow-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800 dark:text-yellow-300">Important Voting Rules</h4>
                        <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-yellow-700 dark:text-yellow-200">
                          <li>Votes reset at midnight KST every day during voting periods</li>
                          <li>Each account can cast up to 10 votes per day</li>
                          <li>Final round voting may have different rules - stay tuned for updates</li>
                          <li>Using VPNs or multiple accounts may result in vote disqualification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-bold mb-6 text-btn">Join Our Voting Team</h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Be part of our dedicated voting team to help coordinate mass voting efforts, remind each other 
                  about voting periods, and maximize Cali's chances of success. Join our communities on:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#5865F2] text-white p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4C14.89 4.19 14.76 4.46 14.67 4.68C13.09 4.44 11.51 4.44 9.95 4.68C9.85 4.46 9.73 4.19 9.61 4C8.12 4.26 6.66 4.72 5.34 5.33C2.56 9.56 1.77 13.69 2.18 17.75C4.08 19.22 5.91 20.14 7.73 20.75C8.13 20.22 8.48 19.66 8.79 19.05C8.18 18.83 7.6 18.55 7.06 18.21C7.17 18.13 7.28 18.04 7.38 17.95C10.95 19.58 14.84 19.58 18.38 17.95C18.48 18.04 18.6 18.13 18.7 18.21C18.16 18.55 17.58 18.83 16.97 19.05C17.28 19.66 17.63 20.22 18.03 20.75C19.85 20.14 21.68 19.22 23.58 17.75C24.06 13.04 22.82 8.95 19.27 5.33ZM8.67 15.05C7.63 15.05 6.76 14.08 6.76 12.88C6.76 11.68 7.61 10.71 8.67 10.71C9.72 10.71 10.6 11.68 10.58 12.88C10.58 14.08 9.72 15.05 8.67 15.05ZM15.33 15.05C14.29 15.05 13.42 14.08 13.42 12.88C13.42 11.68 14.27 10.71 15.33 10.71C16.38 10.71 17.26 11.68 17.24 12.88C17.24 14.08 16.38 15.05 15.33 15.05Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Discord Server</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Join our active community</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-[#279AD6]/10 hover:bg-[#279AD6]/20 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#279AD6] text-white p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 15.51 15.51 17.83C15.37 18.8 15.09 19.12 14.83 19.14C14.25 19.21 13.81 18.78 13.24 18.42C12.34 17.85 11.82 17.5 10.96 16.95C9.96 16.32 10.6 15.97 11.18 15.38C11.32 15.24 13.95 12.86 14 12.6C14.01 12.55 14.01 12.44 13.95 12.38C13.88 12.33 13.78 12.35 13.7 12.36C13.59 12.38 12.17 13.3 9.45 15.12C8.92 15.47 8.44 15.64 8.01 15.63C7.53 15.62 6.62 15.38 5.95 15.18C5.12 14.93 4.46 14.8 4.5 14.34C4.53 14.1 4.86 13.85 5.48 13.6C8.4 12.33 10.38 11.47 11.4 11.01C14.37 9.64 15.01 9.41 15.41 9.4C15.5 9.4 15.72 9.43 15.87 9.55C15.99 9.65 16.02 9.77 16.03 9.86C16.02 9.93 16.05 10.16 16.04 10.36C15.97 10.99 16.64 8.8 16.64 8.8Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Telegram Group</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">For real-time voting coordination</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#1877F2] text-white p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Facebook Group</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Join our private community</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#FF0000] text-white p-3 rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">YouTube Channel</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">For tutorials and updates</p>
                    </div>
                  </a>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Registration Form</h4>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-btn dark:bg-gray-800"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-btn dark:bg-gray-800"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Timezone</label>
                      <select 
                        id="timezone" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-btn dark:bg-gray-800"
                      >
                        <option value="">Select your timezone</option>
                        <option value="pst">Pacific Time (PST)</option>
                        <option value="est">Eastern Time (EST)</option>
                        <option value="cet">Central European Time (CET)</option>
                        <option value="jst">Japan Standard Time (JST)</option>
                        <option value="kst">Korea Standard Time (KST)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Platform</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="discord" 
                            className="rounded border-gray-300 text-btn focus:ring-btn dark:border-gray-700"
                          />
                          <label htmlFor="discord" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Discord</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="telegram" 
                            className="rounded border-gray-300 text-btn focus:ring-btn dark:border-gray-700"
                          />
                          <label htmlFor="telegram" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Telegram</label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="facebook" 
                            className="rounded border-gray-300 text-btn focus:ring-btn dark:border-gray-700"
                          />
                          <label htmlFor="facebook" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Facebook Group</label>
                        </div>
                      </div>
                    </div>
                    
                    <button type="submit" className="btn-primary w-full">Join Voting Team</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingTeam;
