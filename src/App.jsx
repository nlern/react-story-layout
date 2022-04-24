import './App.css';
import Stories from './Stories';
import stories from './data';

function App() {
  return (
    <div className="container">
      <Stories stories={stories} />
    </div>
  );
}

export default App;
