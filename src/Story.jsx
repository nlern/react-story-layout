import { useState, useEffect } from 'react';
import cn from 'classnames';

import Close from './icons/close.svg?component';
import Prev from './icons/prev.svg?component';
import Next from './icons/next.svg?component';

const Story = ({ story, goToPrevStory, goToNextStory, handleCloseClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // desctructure some of the data from our story data
  const { slides, timer = 4000, thumbnail, username } = story;

  // determine current slide to show
  const currentSlide = slides[currentSlideIndex];
  const slideCount = slides.length;

  const handlePrevClick = () => {
    const newIndex = currentSlideIndex - 1;

    if (newIndex < 0) {
      setCurrentSlideIndex(0);
      goToPrevStory();
    } else {
      setCurrentSlideIndex(newIndex);
    }
  };
  const handleNextClick = () => {
    const newIndex = currentSlideIndex + 1;

    if (newIndex === slideCount) {
      setCurrentSlideIndex(0);
      goToNextStory();
    } else {
      setCurrentSlideIndex(newIndex);
    }
  };

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      if (currentSlideIndex < slideCount - 1) {
        setCurrentSlideIndex(currentSlideIndex + 1);
      } else if (currentSlideIndex === slideCount - 1) {
        setCurrentSlideIndex(0);
        goToNextStory();
      }
    }, timer);

    return () => {
      clearInterval(interval);
    };
  }, [goToNextStory, currentSlideIndex, slideCount, timer]);

  // Set the CSS animation timing equal to the value in the story configuration
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--animation-timing',
      `${timer}ms`
    );
  }, [timer]);

  return (
    <>
      <div className="backdrop" />
      <button className="close" onClick={handleCloseClick}>
        <Close />
      </button>
      <div
        className="story"
        style={{ backgroundImage: `url(${currentSlide.image})` }}
      >
        <div className="indicators">
          {slides.map((slide, index) => (
            <span
              key={`${slide.text}-${index}`}
              className={cn('indicator', {
                complete: currentSlideIndex > index,
                active: currentSlideIndex === index,
              })}
            />
          ))}
        </div>
        <div className="slide">
          <div className="user-info">
            <img
              className="slide-thumb"
              src={thumbnail.src}
              alt={thumbnail.alt}
            />
            <span>{username}</span>
          </div>
          <h3 className="label">{currentSlide.text}</h3>
        </div>
        <div className="prev-next">
          <button onClick={handlePrevClick}>
            <Prev />
          </button>
          <button onClick={handleNextClick}>
            <Next />
          </button>
        </div>
      </div>
    </>
  );
};

export default Story;
