import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import EventList from './components/EventList.jsx';
import { initialEvents } from './data/events.js';
import './App.css';

function App() {
  const [events] = useState(initialEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [favoriteIds, setFavoriteIds] = useState([]);


  useEffect(() => {
    try {
      const saved = localStorage.getItem('astronomyFavorites');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setFavoriteIds(parsed);
      }
    } catch (error) {
      console.error('localStorage:', error);
    }
  }, []);


  const toggleFavorite = (eventId) => {
    setFavoriteIds(prev => {
      const newFavorites = prev.includes(eventId)
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId];
      

      try {
        localStorage.setItem('astronomyFavorites', JSON.stringify(newFavorites));
      } catch (error) {
        console.error('Збереження:', error);
      }
      
      return newFavorites;
    });
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="main-content">
        <EventList 
          events={filteredEvents} 
          favoriteIds={favoriteIds}
          toggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
}

export default App;
