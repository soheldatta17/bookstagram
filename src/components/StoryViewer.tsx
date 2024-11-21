import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, Heart, MessageCircle, Menu, X, Share2, Bookmark } from 'lucide-react';

interface Chapter {
  id: number;
  title: string;
  content: string;
}

const SAMPLE_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'The Beginning',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: 2,
    title: 'The Journey Begins',
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
  },
];

interface StoryViewerProps {
  story: {
    title: string;
    content: string;
    author: string;
    likes: number;
    comments: number;
    coverImage: string;
  };
  onClose: () => void;
}

export default function StoryViewer({ story, onClose }: StoryViewerProps) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showChapters, setShowChapters] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleNextChapter = () => {
    if (currentChapter < SAMPLE_CHAPTERS.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const handlePrevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative flex"
      >
        {/* Chapters Sidebar */}
        <AnimatePresence>
          {showChapters && (
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="w-72 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Chapters</h3>
                <button
                  onClick={() => setShowChapters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="space-y-2">
                {SAMPLE_CHAPTERS.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => {
                      setCurrentChapter(index);
                      setShowChapters(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentChapter === index
                        ? 'bg-rose-100 text-rose-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-medium">{chapter.title}</div>
                    <div className="text-sm text-gray-500">Chapter {index + 1}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowChapters(!showChapters)}
                className="text-gray-600 hover:text-gray-900"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div>
                <h2 className="font-bold text-xl">{story.title}</h2>
                <p className="text-gray-600 text-sm">by {story.author}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`${isLiked ? 'text-rose-600' : 'text-gray-600'} hover:text-rose-600`}
              >
                <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`${isBookmarked ? 'text-rose-600' : 'text-gray-600'} hover:text-rose-600`}
              >
                <Bookmark className={`h-6 w-6 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <Share2 className="h-6 w-6" />
              </button>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Chapter Content */}
          <div className="flex-1 overflow-y-auto p-8">
            <motion.div
              key={currentChapter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-playfair font-bold mb-2">
                {SAMPLE_CHAPTERS[currentChapter].title}
              </h3>
              <div className="prose prose-lg prose-rose max-w-none">
                {SAMPLE_CHAPTERS[currentChapter].content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation Footer */}
          <div className="border-t border-gray-200 p-4 flex items-center justify-between">
            <button
              onClick={handlePrevChapter}
              disabled={currentChapter === 0}
              className={`flex items-center space-x-2 ${
                currentChapter === 0 ? 'text-gray-400' : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Previous Chapter</span>
            </button>
            <span className="text-gray-600">
              Chapter {currentChapter + 1} of {SAMPLE_CHAPTERS.length}
            </span>
            <button
              onClick={handleNextChapter}
              disabled={currentChapter === SAMPLE_CHAPTERS.length - 1}
              className={`flex items-center space-x-2 ${
                currentChapter === SAMPLE_CHAPTERS.length - 1
                  ? 'text-gray-400'
                  : 'text-gray-700 hover:text-rose-600'
              }`}
            >
              <span>Next Chapter</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}