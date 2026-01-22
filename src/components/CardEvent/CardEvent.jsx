import React, { memo } from "react";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import s from "./cardEvent.module.scss";

const normalizeTag = (tag) =>
  tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const CardEvent = memo(({ event, variant = "featured" }) => {
  const isCompact = variant === "compact";
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/event/${event.id}`);
  };

  const cardStyle = {
    backgroundImage: event.image
      ? `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 70%), url(${event.image})`
      : "none",
  };

  return (
    <article
      className={`${s.card} ${isCompact ? s.cardCompact : s.cardFeatured}`}
      style={cardStyle}
      aria-labelledby={`event-title-${event.id}`}
    >
      {!isCompact && event.tags?.length > 0 && (
        <div className={s.tags} role="list">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className={s.tag}
              data-tag-name={normalizeTag(tag)}
              role="listitem"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className={s.content}>
        <h3 id={`event-title-${event.id}`} className={s.title}>
          {event.title}
        </h3>

        <div className={s.bottomWrapper}>
          <div className={s.infoGroup}>
            <div className={s.infoItem} aria-label={`Data: ${event.date} às ${event.time}`}>
              <FiCalendar size={20} aria-hidden="true" />
              <span>{`${event.date} • ${event.time}`}</span>
            </div>

            <div className={s.infoItem} aria-label={`Local: ${event.location}`}>
              <FiMapPin size={20} aria-hidden="true" />
              <span>{event.location}</span>
            </div>
          </div>

          {isCompact && (
            <button
              className={s.cardIconButton}
              onClick={handleDetails}
              type="button"
              aria-label={`Ver detalhes de ${event.title}`}
            >
              <FiArrowRight size={24} aria-hidden="true" />
            </button>
          )}
        </div>

        {!isCompact && (
          <button
            className={s.cardButton}
            onClick={handleDetails}
            type="button"
            aria-label={`Ver detalhes de ${event.title}`}
          >
            Ver detalhes
            <FiArrowRight size={20} aria-hidden="true" />
          </button>
        )}
      </div>
    </article>
  );
});

CardEvent.displayName = "CardEvent";

export default CardEvent;

/* ===================================================================
  EXEMPLO DE USO 

    1. Card Maior (Featured) 
    
   <CardEvent 
          variant="featured"
          event={{
            id: 1,
            title: "Feira Cultural",
            date: "15 Jan 2025",
            time: "22:00",
            location: "Parque Ibirapuera, SP",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
            tags: ["Cultural", "Gratis"]
          }}
        />

    2. Card Compacto (Compact)

     <CardEvent 
            variant="compact"
            event={{
              id: 2,
              title: "Festival de Música Eletrônica",
              date: "15 Jan 2025",
              time: "22:00",
              location: "Parque Ibirapuera, SP",
              image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2"
            }}
          /> 

    =================================================================== */
     
