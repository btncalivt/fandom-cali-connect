
import { useState } from 'react';
import { MessageSquare, FileEdit, PictureInPicture, Trophy, Heart, ThumbsUp, Share2 } from 'lucide-react';

const FanZone = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [pollOption, setPollOption] = useState<number | null>(null);
  const [pollResults, setPollResults] = useState([42, 28, 18, 12]);
  
  const tabs = [
    { name: 'Fan Forum', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'Stories', icon: <FileEdit className="w-5 h-5" /> },
    { name: 'Fan Art', icon: <PictureInPipture className="w-5 h-5" /> },
    { name: 'Leaderboard', icon: <Trophy className="w-5 h-5" /> }
  ];
  
  const handleVote = (index: number) => {
    if (pollOption === null) {
      setPollOption(index);
      const newResults = [...pollResults];
      newResults[index] += 1;
      setPollResults(newResults);
    }
  };
  
  const getPercentage = (value: number) => {
    const total = pollResults.reduce((acc, curr) => acc + curr, 0);
    return Math.round((value / total) * 100);
  };
  
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Fan Zone</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Weekly Poll</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">What's your favorite Cali performance so far?</h3>
                
                <div className="space-y-3">
                  {['Dance Break Performance (Ep.2)', 'Vocal Challenge (Ep.4)', 'Team Battle (Ep.6)', 'Solo Stage (Ep.7)'].map((option, index) => (
                    <div key={index} className="relative">
                      <button
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          pollOption === index
                            ? 'border-btn bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        } ${pollOption !== null ? 'cursor-default' : 'cursor-pointer'}`}
                        onClick={() => handleVote(index)}
                        disabled={pollOption !== null}
                      >
                        {option}
                      </button>
                      
                      {pollOption !== null && (
                        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                          <div 
                            className="h-full bg-gradient-to-r from-btn/20 to-blue-400/20 transition-all"
                            style={{ width: `${getPercentage(pollResults[index])}%` }}
                          />
                          <div className="absolute inset-0 flex items-center justify-between px-3">
                            <span>{option}</span>
                            <span className="font-medium">{getPercentage(pollResults[index])}%</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {pollOption !== null && (
                  <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Total votes: {pollResults.reduce((acc, curr) => acc + curr, 0)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === index 
                      ? 'text-btn border-b-2 border-btn' 
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </div>
            
            <div className="p-6">
              {activeTab === 0 && (
                <div className="animate-fade-in">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Fan Forum</h3>
                    <button className="bg-btn text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-btn-hover transition-colors">
                      New Post
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      {
                        author: 'CaliSupporter123',
                        avatar: 'CS',
                        time: '2 hours ago',
                        content: "Did anyone else notice Cali's amazing high note in the last episode? I've been replaying that moment over and over!",
                        likes: 42,
                        comments: 15
                      },
                      {
                        author: 'DreamingWithCali',
                        avatar: 'DW',
                        time: '5 hours ago',
                        content: "Theory: I think the next challenge might be a unit performance. Based on the preview, it looked like they were splitting into smaller groups. What do you all think?",
                        likes: 38,
                        comments: 23
                      },
                      {
                        author: 'BTNFan2023',
                        avatar: 'BF',
                        time: '8 hours ago',
                        content: "Just a reminder that voting for this week opens tomorrow at 6PM KST! Set your alarms and let's help Cali advance to the next round!",
                        likes: 67,
                        comments: 8
                      }
                    ].map((post, index) => (
                      <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-btn/10 text-btn flex items-center justify-center font-medium flex-shrink-0">
                            {post.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{post.author}</h4>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{post.time}</span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 mb-3">
                              {post.content}
                            </p>
                            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                              <button className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300">
                                <Heart className="w-4 h-4" />
                                <span>{post.likes}</span>
                              </button>
                              <button className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300">
                                <MessageSquare className="w-4 h-4" />
                                <span>{post.comments}</span>
                              </button>
                              <button className="flex items-center gap-1 hover:text-gray-700 dark:hover:text-gray-300">
                                <Share2 className="w-4 h-4" />
                                <span>Share</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button className="text-btn hover:underline">Load More</button>
                  </div>
                </div>
              )}
              
              {activeTab === 1 && (
                <div className="animate-fade-in">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Fan Stories</h3>
                    <button className="bg-btn text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-btn-hover transition-colors">
                      Submit Story
                    </button>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      {
                        author: 'Maria L.',
                        location: 'New York, USA',
                        title: 'How Cali Inspired My Dance Journey',
                        content: "I've always been interested in dance but never had the courage to pursue it. Watching Cali's dedication and growth throughout the show inspired me to finally sign up for dance classes. Three months in, and I'm loving every moment of it!",
                        likes: 124
                      },
                      {
                        author: 'Jin H.',
                        location: 'Seoul, South Korea',
                        title: 'Meeting Cali at the BTN Fan Event',
                        content: "I was lucky enough to attend the BTN fan event last month and briefly met Cali. He was so kind and thanked me for supporting him. That small interaction showed me how genuine and appreciative he is of his fans. It made me even more determined to help him succeed!",
                        likes: 207
                      }
                    ].map((story, index) => (
                      <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h4 className="text-lg font-semibold mb-2">{story.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <span>{story.author}</span>
                          <span className="mx-2">•</span>
                          <span>{story.location}</span>
                        </div>
                        <p className="text-gray-800 dark:text-gray-200 mb-4">
                          {story.content}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <button className="flex items-center gap-1 hover:text-red-500">
                            <Heart className="w-4 h-4" />
                            <span>{story.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 2 && (
                <div className="animate-fade-in">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Fan Artwork</h3>
                    <button className="bg-btn text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-btn-hover transition-colors">
                      Submit Artwork
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden card-hover">
                        <div className="bg-gray-200 dark:bg-gray-700 aspect-square flex items-center justify-center">
                          <p className="text-gray-500 dark:text-gray-400">Artwork Preview {item}</p>
                        </div>
                        <div className="p-3">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Cali Art #{item}</h4>
                            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                              <Heart className="w-4 h-4 text-red-500" />
                              <span>{item * 38 + 12}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <span>by @artist{item}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 3 && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-bold mb-6">Fan Leaderboard</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-medium">Top Supporters This Week</h4>
                      <select className="text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md py-2 px-3">
                        <option>This Week</option>
                        <option>This Month</option>
                        <option>All Time</option>
                      </select>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="grid grid-cols-12 py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-sm font-medium">
                        <div className="col-span-1">#</div>
                        <div className="col-span-5">Fan</div>
                        <div className="col-span-3">Votes</div>
                        <div className="col-span-3">Actions</div>
                      </div>
                      
                      {[
                        { username: 'SuperCali22', votes: 1250, badge: 'Top Voter' },
                        { username: 'CaliForever', votes: 1120, badge: 'Power Voter' },
                        { username: 'BTN_Cali_Fan', votes: 980, badge: 'Dedicated' },
                        { username: 'CaliDreamer9', votes: 820, badge: 'Regular' },
                        { username: 'VoteForCali', votes: 750, badge: 'Active' }
                      ].map((user, index) => (
                        <div 
                          key={index}
                          className="grid grid-cols-12 py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-sm items-center"
                        >
                          <div className="col-span-1 font-semibold">{index + 1}</div>
                          <div className="col-span-5 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                              {user.username.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{user.username}</p>
                              <div className="text-xs px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded inline-block">
                                {user.badge}
                              </div>
                            </div>
                          </div>
                          <div className="col-span-3 font-medium">{user.votes.toLocaleString()}</div>
                          <div className="col-span-3">
                            <button className="text-btn hover:underline text-xs">View Profile</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">How to Earn Points</h4>
                    <div className="space-y-3">
                      {[
                        { action: 'Vote for Cali', points: 10, icon: <ThumbsUp className="w-5 h-5 text-green-500" /> },
                        { action: 'Share Official Content', points: 5, icon: <Share2 className="w-5 h-5 text-blue-500" /> },
                        { action: 'Create Fan Content', points: 20, icon: <FileEdit className="w-5 h-5 text-purple-500" /> },
                        { action: 'Participate in Discussions', points: 3, icon: <MessageSquare className="w-5 h-5 text-orange-500" /> }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <div className="p-2 bg-white dark:bg-gray-800 rounded-full">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{item.action}</p>
                          </div>
                          <div className="text-right font-semibold text-green-600 dark:text-green-400">
                            +{item.points} pts
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanZone;
