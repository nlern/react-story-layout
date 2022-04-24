import { useState, useEffect, useRef } from 'react';
import StoryThumbnail from './StoryThumbnail';
import Story from './Story';
import { useCallback } from 'react';

const Stories = ({ stories }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const activeStory = stories[activeStoryIndex];

  const isModalOpenRef = useRef(false);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      handleModalClose();
    }
  }, []);

  const handleModalOpen = (index) => {
    isModalOpenRef.current = true;
    setActiveStoryIndex(index);
    window.addEventListener('keyup', handleKeyPress);
  };

  const handleModalClose = () => {
    setActiveStoryIndex(null);
  };

  useEffect(() => {
    // Close the modal when reaching the beginning or end of the list
    if (activeStoryIndex < 0 || activeStoryIndex >= stories.length) {
      handleModalClose();
    }
  }, [activeStoryIndex, stories.length]);

  useEffect(() => {
    if (!activeStory && isModalOpenRef.current) {
      isModalOpenRef.current = false;
      window.removeEventListener('keyup', handleKeyPress);
    }
  }, [activeStory, handleKeyPress]);

  useEffect(() => {
    // Remove event on unmount
    return () => {
      window.removeEventListener('keyup', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="stories">
      {activeStory ? (
        <Story
          story={activeStory}
          goToPrevStory={() => setActiveStoryIndex(activeStoryIndex - 1)}
          goToNextStory={() => setActiveStoryIndex(activeStoryIndex + 1)}
          handleCloseClick={handleModalClose}
        />
      ) : (
        stories.map((story, index) => (
          <StoryThumbnail
            key={index}
            story={story}
            index={index}
            thumbnail={story.thumbnail}
            user={story.username}
            setActiveStory={handleModalOpen}
          />
        ))
      )}
    </div>
  );
};

export default Stories;
