import React, { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Star,
  BookOpen,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface BookPostProps {
  username: string;
  userImage: string;
  bookImage: string;
  bookTitle: string;
  author: string;
  caption: string;
  likes: number;
  genre: string;
  rating: number;
  badges: string[];
  onBookClick: () => void;
}

export default function BookPost({
  username,
  userImage,
  bookImage,
  bookTitle,
  author,
  caption,
  likes,
  genre,
  rating,
  badges,
  onBookClick,
}: BookPostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 relative max-w-2xl mx-auto border border-gray-200"
    >
      {/* Header Section */}
      <div className="flex items-center p-4">
        <img
          src={userImage}
          alt={username}
          className="h-12 w-12 rounded-full object-cover mr-3"
        />
        <div>
          <h2 className="font-semibold text-gray-800">{username}</h2>
          <p className="text-sm text-gray-500">Shared a book</p>
        </div>
      </div>

      {/* Book Image Section */}
      <motion.div
        className="relative pb-[56%] cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onClick={onBookClick}
      >
        <img
          src={bookImage}
          alt={bookTitle}
          className="absolute h-full w-full object-cover rounded-b-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <BookOpen className="text-white opacity-0 hover:opacity-100 transform scale-0 hover:scale-100 transition-all duration-300" />
        </div>
        {showSparkles && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-bold text-xl text-gray-800">{bookTitle}</h3>
        <p className="text-sm text-gray-500 mb-3">by {author}</p>
        <p className="text-gray-700 mb-4">{caption}</p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-lg"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Genre and Rating */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">
            Genre: <span className="font-semibold">{genre}</span>
          </p>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4" />
            <span className="ml-1 font-medium">{rating}/5</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 ${
                isLiked ? 'text-red-500' : 'text-gray-600'
              }`}
            >
              <Heart className="h-5 w-5" />
              <span>{isLiked ? likes + 1 : likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600">
              <MessageCircle className="h-5 w-5" />
              <span>Comment</span>
            </button>
            <button className="text-gray-600">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
          <button className="text-gray-600">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
