import EventCard from './EventCard.jsx'; 

function EventList({ events, favoriteIds, toggleFavorite }) {
  if (events.length === 0) {
    return <p className="no-events">Події не знайдено</p>;
  }

  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard
          key={event.id}
          event={event}
          isFavorite={favoriteIds.includes(event.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default EventList;
