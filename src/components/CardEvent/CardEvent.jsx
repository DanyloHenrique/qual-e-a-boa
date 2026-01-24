import React, { memo } from "react";
import { FiCalendar, FiMapPin, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import s from "./cardEvent.module.scss";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import ButtonLink from "../ButtonLink/ButtonLink";
import { formatEventDate } from "../../utils/formatEventDate"; 

/**
 * Card de evento com variantes featured/compact.
 * 
 * @example Featured (maior)
 * ```jsx
 * <CardEvent 
 *   variant="featured"
 *   event={{
 *     id: "uuid-v4",
 *     title: "Nome do Evento",
 *     price: 50,
 *     date: "2026-01-24T14:00:00Z",
 *     location: "Nome do Local",
 *     coverImage: "url_da_imagem"
 *   }}
 * />
 * ```
 * 
 * @example Compact (menor)
 * ```jsx
 * <CardEvent 
 *   variant="compact"
 *   event={{
 *     id: "uuid-v4",
 *     title: "Nome do Evento", 
 *     date: "2026-01-24T18:00:00Z",
 *     location: "Nome do Local"
 *   }}
 * />
 * ```
 * 
 * @param {Object} props
 * @param {Object} props.event - Dados do evento
 * @param {string} props.event.id - ID único
 * @param {string} props.event.title - Título
 * @param {number} [props.event.price] - Preço (0=grátis)
 * @param {string} props.event.date - ISO string
 * @param {string} props.event.location - Local
 * @param {string} [props.event.coverImage] - URL imagem
 * @param {"featured"|"compact"} [props.variant="featured"]
 */


const normalizeTag = (tag) =>
  tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const CardEvent = memo(({ event, variant = "featured" }) => {  

  if (!event) return null;

  const { id, title, price, date, location, coverImage } = event;

  const isCompact = variant === "compact";
  const isPaid = Number(price || 0) > 0;
  const priceLabel = isPaid ? "Pago" : "Grátis";

  const { dateFormatted, timeFormatted } = formatEventDate(date);

  const cardStyle = {
    backgroundImage: coverImage
      ? `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 70%), url(${coverImage})`
      : "none",
  };

  return (
    <article
      className={`${s.card} ${isCompact ? s.cardCompact : s.cardFeatured}`}
      style={cardStyle}
      aria-labelledby={`event-title-${id}`}
    >    
      {!isCompact && (
        <div className={s.tags}>
          <span
            className={s.tag}
            data-tag-name={normalizeTag(priceLabel)}
          >
            {priceLabel}
          </span>
        </div>
      )}

      <div className={s.content}>
        <h3 id={`event-title-${id}`} className={s.title}>
          {title}
        </h3>

        <div className={s.bottomWrapper}>
          <div className={s.infoGroup}>
            <div className={s.infoItem}>
              <FiCalendar size={20} aria-hidden="true" />
              <span>{`${dateFormatted} • ${timeFormatted}`}</span>
            </div>

            <div className={s.infoItem}>
              <FiMapPin size={20} aria-hidden="true" />
              <span>{location}</span>
            </div>
          </div>

          {isCompact && (
            <Link to={`/event/${id}`}>
              <ButtonIcon 
                Icon={FiArrowRight}                
                ariaLabel={`Ver detalhes de ${title}`}
              />
            </Link>
          )}
        </div>

        {!isCompact && (
          <ButtonLink 
            label="Ver detalhes"
            to={`/event/${id}`}
            icon={FiArrowRight}
            iconSize={20}          
          />
        )}
      </div>
    </article>
  );
});

CardEvent.displayName = "CardEvent";

export default CardEvent;


