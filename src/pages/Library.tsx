import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Star, Plus } from 'lucide-react';

const SHELVES = [
  { id: 'reading', name: 'Currently Reading', icon: BookOpen },
  { id: 'toread', name: 'Want to Read', icon: Clock },
  { id: 'favorites', name: 'Favorites', icon: Star },
];

const MY_BOOKS = [
  {
    id: 1,
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    progress: 75,
    shelf: 'reading',
  },
];

interface LibraryProps {
  onBookClick?: (book: any) => void;
}

export default function Library({ onBookClick }: LibraryProps) {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-playfair font-bold">My Library</h1>
          <button className="btn">
            <Plus className="h-5 w-5 mr-2" />
            Add Book
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {SHELVES.map(({ id, name, icon: Icon }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-6 w-6 text-rose-600" />
                <h2 className="text-xl font-semibold">{name}</h2>
              </div>
              <p className="text-3xl font-bold">
                {MY_BOOKS.filter(book => book.shelf === id).length}
              </p>
              <p className="text-gray-600">books</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Currently Reading</h2>
          <div className="space-y-4">
            {MY_BOOKS.filter(book => book.shelf === 'reading').map(book => (
              <motion.div
                key={book.id}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => onBookClick?.({
                  title: book.title,
                  author: book.author,
                  content: "Sample story content...",
                  likes: 1234,
                  comments: 42,
                  coverImage: book.cover
                })}
              >
                <div className="relative">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-16 h-24 object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center rounded">
                    <BookOpen className="text-white opacity-0 hover:opacity-100 transform scale-0 hover:scale-100 transition-all duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-gray-600">{book.author}</p>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-rose-600 h-2 rounded-full"
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{book.progress}% complete</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}