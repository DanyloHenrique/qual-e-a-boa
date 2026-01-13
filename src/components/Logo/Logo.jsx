import s from './Logo.module.scss';
import logo from '../../assets/icons/logo.png'

export default function Logo({ text = 'QUAL É A BOA?', alt = 'Logo' }) {
  return (
    <div className={s.logoContainer}>
      <div>
        <img src={logo} alt={alt} />
      </div>

      <span className={s.text}>{text}</span>
    </div>
  );
}
