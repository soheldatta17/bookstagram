import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen } from 'lucide-react';

const GENRES = ['Fantasy', 'Romance', 'Mystery', 'Sci-Fi', 'Contemporary', 'Historical'];

const TRENDING_BOOKS = [
  {
    id: 1,
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
    title: 'The Lost City',
    author: 'Sarah Waters',
    genre: 'Fantasy',
    rating: 4.5,
  },
  {
    id: 2,
    cover: 'https://images.unsplash.com/photo-1543536448-1e76fc2795bf?w=400',
    title: 'Midnight Tales',
    author: 'James Blake',
    genre: 'Mystery',
    rating: 4.8,
  },
];

interface ExploreProps {
  onBookClick?: (book: any) => void;
}

export default function Explore({ onBookClick }: ExploreProps) {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-playfair font-bold">Explore Books</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search books..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
            <button className="btn">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Browse by Genre</h2>
          <div className="flex flex-wrap gap-3">
            {GENRES.map((genre) => (
              <motion.button
                key={genre}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 hover:border-rose-500 hover:text-rose-600 transition-colors"
              >
                {genre}
              </motion.button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Trending Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {TRENDING_BOOKS.map((book) => (
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
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{book.genre}</span>
                    <span>★ {book.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}