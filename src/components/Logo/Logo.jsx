import s from './Logo.module.scss';
import locationIcon from '../../assets/icons/location.svg';

export default function Logo({ text = 'VAIBE-LOCAL', alt = 'Logo' }) {
  return (
    <div className={s.logoContainer}>
      <div className={s.iconWrapper}>
        <img src={locationIcon} alt={alt} className={s.icon} />
      </div>

      <span className={s.text}>{text}</span>
    </div>
  );
}
