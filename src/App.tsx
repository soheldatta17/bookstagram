import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BookPost from './components/BookPost';
import Explore from './pages/Explore';
import Library from './pages/Library';
import Trending from './pages/Trending';
import StoryViewer from './components/StoryViewer';

const SAMPLE_POSTS = [
  {
    id: 1,
    username: 'bookworm_sarah',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bookImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
    bookTitle: 'The Silent Patient',
    author: 'Alex Michaelides',
    caption: "Just finished this psychological thriller and I'm still in shock! 📚 The plot twists kept me guessing until the very end. Highly recommend! #BookReview #ThrillerBooks",
    likes: 1234,
    genre: 'Thriller',
    rating: 5,
    badges: ['Gold Reader', 'Mystery Expert']
  },
  {
    id: 1,
    username: 'bookworm_sarah',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bookImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
    bookTitle: 'The Silent Patient',
    author: 'Alex Michaelides',
    caption: "Just finished this psychological thriller and I'm still in shock! 📚 The plot twists kept me guessing until the very end. Highly recommend! #BookReview #ThrillerBooks",
    likes: 1234,
    genre: 'Thriller',
    rating: 5,
    badges: ['Gold Reader', 'Mystery Expert']
  },
  {
    id: 1,
    username: 'bookworm_sarah',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bookImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
    bookTitle: 'The Silent Patient',
    author: 'Alex Michaelides',
    caption: "Just finished this psychological thriller and I'm still in shock! 📚 The plot twists kept me guessing until the very end. Highly recommend! #BookReview #ThrillerBooks",
    likes: 1234,
    genre: 'Thriller',
    rating: 5,
    badges: ['Gold Reader', 'Mystery Expert']
  },
  {
    id: 1,
    username: 'bookworm_sarah',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bookImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
    bookTitle: 'The Silent Patient',
    author: 'Alex Michaelides',
    caption: "Just finished this psychological thriller and I'm still in shock! 📚 The plot twists kept me guessing until the very end. Highly recommend! #BookReview #ThrillerBooks",
    likes: 1234,
    genre: 'Thriller',
    rating: 5,
    badges: ['Gold Reader', 'Mystery Expert']
  },
  {
    id: 1,
    username: 'bookworm_sarah',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bookImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
    bookTitle: 'The Silent Patient',
    author: 'Alex Michaelides',
    caption: "Just finished this psychological thriller and I'm still in shock! 📚 The plot twists kept me guessing until the very end. Highly recommend! #BookReview #ThrillerBooks",
    likes: 1234,
    genre: 'Thriller',
    rating: 5,
    badges: ['Gold Reader', 'Mystery Expert']
  },
  {
    id: 1,
    username: 'bookworm_sarah',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bookImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
    bookTitle: 'The Silent Patient',
    author: 'Alex Michaelides',
    caption: "Just finished this psychological thriller and I'm still in shock! 📚 The plot twists kept me guessing until the very end. Highly recommend! #BookReview #ThrillerBooks",
    likes: 1234,
    genre: 'Thriller',
    rating: 5,
    badges: ['Gold Reader', 'Mystery Expert']
  },
  {
    id: 1,
    username: 'bookworm_sarah',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bookImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
    bookTitle: 'The Silent Patient',
    author: 'Alex Michaelides',
    caption: "Just finished this psychological thriller and I'm still in shock! 📚 The plot twists kept me guessing until the very end. Highly recommend! #BookReview #ThrillerBooks",
    likes: 1234,
    genre: 'Thriller',
    rating: 5,
    badges: ['Gold Reader', 'Mystery Expert']
  },
  
  
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedStory, setSelectedStory] = useState<any>(null);

  const handleBookClick = (book: any) => {
    setSelectedStory(book);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'explore':
        return <Explore onBookClick={handleBookClick} />;
      case 'library':
        return <Library onBookClick={handleBookClick} />;
      case 'trending':
        return <Trending onBookClick={handleBookClick} />;
      default:
        return (
          <div className="max-w-2xl mx-auto px-4 py-6">
            {SAMPLE_POSTS.map(post => (
              <BookPost
                key={post.id}
                {...post}
                onBookClick={() => handleBookClick({
                  title: post.bookTitle,
                  author: post.author,
                  content: "Sample story content...",
                  likes: post.likes,
                  comments: 42,
                  coverImage: post.bookImage
                })}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-gray-50">
      <Header />
      <div className="flex">
        <Sidebar onPageChange={setCurrentPage} currentPage={currentPage} />
        <main className="flex-1 md:ml-64">
          {renderPage()}
        </main>
      </div>
      {selectedStory && (
        <StoryViewer
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </div>
  );
}