import S from "./eventDescription.module.scss";

const EventDescription = ({description}) => {
  return (
    <section className={S.sectionAboutEvent}>
      <h3>Sobre o Evento</h3>
      <p>
       {description}
      </p>
    </section>
  );
};

export default EventDescription;
