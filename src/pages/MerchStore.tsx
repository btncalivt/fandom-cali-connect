
import { ShoppingBag, Bell } from 'lucide-react';

const MerchStore = () => {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Merch Store</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Official BTN Cali merchandise coming soon! Sign up to be notified when our store launches.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-btn" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Store Coming Soon!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
              We're working hard to bring you exclusive BTN Cali Official merchandise. 
              Subscribe to be the first to know when our store launches and get access to limited edition items.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-btn dark:bg-gray-900"
                />
                <button className="bg-btn hover:bg-btn-hover text-white px-6 py-3 rounded-r-lg flex items-center gap-2 font-medium">
                  <Bell className="w-5 h-5" />
                  Notify Me
                </button>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Apparel</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  T-shirts, hoodies, and more featuring exclusive Cali designs.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Accessories</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Phone cases, pins, stickers, and other fan essentials.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Limited Edition</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Special items available only for a limited time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchStore;
