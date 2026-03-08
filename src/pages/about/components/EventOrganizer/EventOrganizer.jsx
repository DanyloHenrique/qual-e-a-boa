import { PiUserBold } from "react-icons/pi";
import styles from "./EventOrganizer.module.scss";

const EventOrganizer = ({ name }) => {
	return (
		<div className={styles.eventOrganizer}>
			<h3>Organizador</h3>
			<div className={styles.content}>
				<span className={styles.wrapperIcon}>
					<PiUserBold size={20} strokeWidth={5} aria-hidden />
				</span>

				<div className={styles.info}>
					<p className={styles.name}>{name}</p>
					<p>Produtor de eventos</p>
				</div>
			</div>
		</div>
	);
};

export default EventOrganizer;
