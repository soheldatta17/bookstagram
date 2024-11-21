import React from 'react';
import { Search, BookOpen, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {}
      <div className="absolute left-6 top-0 flex items-center h-full">
        <BookOpen className="h-8 w-8 text-rose-600" />
        <span className="ml-2 text-xl font-bold text-gray-900">Bookstagram</span>
      </div>

      {}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {}
        <div className="absolute inset-x-0 top-0 flex justify-center items-center h-full">
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              placeholder="Search books and readers..."
            />
          </div>
        </div>

        {}
        <div className="absolute right-0 top-0 flex items-center space-x-4 h-full">
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Bell className="h-6 w-6" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
