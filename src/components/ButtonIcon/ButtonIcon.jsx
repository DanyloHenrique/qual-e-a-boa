import s from "./ButtonIcon.module.scss";

const ButtonIcon = ({ icon, onClick, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      className={s.buttonIcon}
      aria-label={ariaLabel}
      type="button"
    >
      <span className={s.icon}>{icon}</span>
    </button>
  );
};

export default ButtonIcon;
