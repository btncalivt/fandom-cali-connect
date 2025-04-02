
import { Clock, Award, Star, Heart, Music } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About BTN Cali Official</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-btn">Our Fandom</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              BTN Cali Official is the dedicated fandom supporting Cali on his journey through Be The Next Dreamer. 
              We are a passionate community united by our belief in Cali's talent and potential to achieve his dreams.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our mission is to provide unwavering support for Cali during his time on Be The Next Dreamer and beyond. 
              We do this through organized voting efforts, social media campaigns, and creating a positive community 
              for fans to connect and share their love for Cali.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Founded in 2023, BTN Cali Official has quickly grown into a vibrant community with members from around 
              the world. We welcome anyone who believes in Cali's talents and wants to join us in supporting his journey.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-btn">About Be The Next Dreamer</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Be The Next Dreamer is a popular talent competition show that searches for the next generation of 
              performers. The show features a diverse group of contestants competing for a chance to debut as part 
              of the next big group, "9 Dreamers."
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The competition is intense, with participants demonstrating their skills in singing, dancing, 
              performance, and more. Fans play a crucial role in the show through voting, which directly impacts 
              which contestants advance to the next rounds.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Each episode brings new challenges and opportunities for the contestants to showcase their growth 
              and talents. The journey is emotionally charged, filled with memorable performances and moments that 
              captivate viewers.
            </p>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-10">About Cali</h2>
        
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-btn to-accent rounded-xl blur opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/86fccf77-86ff-4842-8575-1e257ca17685.png" 
                  alt="Cali from Be The Next Dreamer" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-bold mb-4 text-btn">Cali's Biography</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                    <Clock className="text-btn w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Background</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Cali was born and raised with a passion for performing. From a young age, 
                      he showed exceptional talent in singing and dancing, often participating in 
                      school performances and local competitions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                    <Award className="text-green-600 dark:text-green-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Journey to BTN</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      After years of training and perfecting his craft, Cali auditioned for 
                      Be The Next Dreamer. His exceptional audition impressed the judges, earning 
                      him a spot among the contestants competing for a place in 9 Dreamers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                    <Star className="text-purple-600 dark:text-purple-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Talents & Skills</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Cali is known for his versatile vocal range, powerful dance performances, 
                      and charismatic stage presence. He consistently demonstrates growth and 
                      adaptability in various performance styles throughout the competition.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                    <Heart className="text-red-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Personality</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Off-stage, Cali is known for his kind personality, dedication to improvement, 
                      and supportive attitude toward fellow contestants. His genuine nature has 
                      earned him a dedicated fanbase that continues to grow.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full">
                    <Music className="text-yellow-600 dark:text-yellow-400 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Musical Influences</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Cali draws inspiration from a diverse range of artists and genres, which is 
                      reflected in his performances. His ability to blend different styles makes 
                      his performances unique and captivating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
