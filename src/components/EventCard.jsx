function EventCard({ event, isFavorite, toggleFavorite }) {
  return (
    <article className="event-card">
      <div className="card-header">
        <h3>{event.name}</h3>
        <button
          className={`favorite-btn ${isFavorite ? 'liked' : ''}`}
          onClick={() => toggleFavorite(event.id)}
        >
          {isFavorite ? 'Подобається' : 'Не подобається'}
        </button>
      </div>
      <p className="description">{event.description}</p>
      <div className="event-meta">
        <span>{event.date}</span>
        <span>{event.organizer}</span>
      </div>
    </article>
  );
}

export default EventCard;

