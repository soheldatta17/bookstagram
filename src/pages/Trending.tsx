import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Flame, Users, BookOpen } from 'lucide-react';

const TRENDING_CATEGORIES = [
  {
    title: 'Most Read This Week',
    books: [
      {
        id: 1,
        cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        readers: 12453,
        trending: '+25%',
      },
    ],
  },
];

interface TrendingProps {
  onBookClick?: (book: any) => void;
}

export default function Trending({ onBookClick }: TrendingProps) {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-2 mb-8">
          <TrendingUp className="h-8 w-8 text-rose-600" />
          <h1 className="text-3xl font-playfair font-bold">Trending Now</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-rose-500 to-pink-600 p-6 rounded-lg text-white"
          >
            <Flame className="h-8 w-8 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Hot Right Now</h2>
            <p className="text-rose-100">Discover what everyone is reading this moment</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-lg text-white"
          >
            <Users className="h-8 w-8 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Community Picks</h2>
            <p className="text-purple-100">Top-rated books by our readers</p>
          </motion.div>
        </div>

        {TRENDING_CATEGORIES.map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.books.map((book) => (
                <motion.div
                  key={book.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => onBookClick?.({
                    title: book.title,
                    author: book.author,
                    content: "Sample story content...",
                    likes: 1234,
                    comments: 42,
                    coverImage: book.cover
                  })}
                >
                  <div className="relative pb-[140%]">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <BookOpen className="text-white opacity-0 hover:opacity-100 transform scale-0 hover:scale-100 transition-all duration-300" />
                    </div>
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {book.trending}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {book.readers.toLocaleString()} readers
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}