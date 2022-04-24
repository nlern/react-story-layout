const StoryThumbnail = ({ thumbnail, index, setActiveStory, user }) => {
  return (
    <button className="thumbnail" onClick={() => setActiveStory(index)}>
      <img src={thumbnail.src} alt={thumbnail.alt} />
      <span>{user}</span>
    </button>
  );
};

export default StoryThumbnail;
