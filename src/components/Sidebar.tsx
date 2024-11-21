import React from 'react';
import { BookMarked, Compass, Home, PlusSquare, TrendingUp } from 'lucide-react';

interface SidebarProps {
  onPageChange: (page: string) => void;
  currentPage: string;
}

export default function Sidebar({ onPageChange, currentPage }: SidebarProps) {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Compass, label: 'Explore' },
    { id: 'library', icon: BookMarked, label: 'My Library' },
    { id: 'trending', icon: TrendingUp, label: 'Trending' },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 fixed h-screen border-r border-gray-200 pt-6">
      <nav className="space-y-1 px-4">
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onPageChange(id)}
            className={`flex items-center w-full px-2 py-3 rounded-lg transition-colors duration-200 ${
              currentPage === id
                ? 'text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Icon className="h-6 w-6" />
            <span className="ml-3 font-medium">{label}</span>
          </button>
        ))}
        <button className="w-full mt-4 bg-rose-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-rose-700 transition-colors duration-200">
          <PlusSquare className="h-5 w-5 mr-2" />
          Add Book
        </button>
      </nav>
    </div>
  );
}