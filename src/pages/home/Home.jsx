import Footer from "@/components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";

import S from "./home.module.scss";
import Logo from "@/components/Logo/Logo";
import CardEvent from "@/components/CardEvent/CardEvent";
import { MOCK_EVENTS } from "./Model/Events";
import Header from "@/components/Header/Header";
import SectionHeader from "@/components/SectionHeader/SectionHeader";


const Home = () => {
	const [eventFeatured, ...remainingEvents] = MOCK_EVENTS;

	return (
		<>
			<Header />

			<main>
				<section className={S.events}>
					<SectionHeader palavraDestaque='Destaque' titulo={'Eventos em'} subtitulo={'Os eventos mais populares dessa semana'} />

					<div className={S.containerEvents}>
						<CardEvent
							variant="featured"
							event={eventFeatured}
						/>
						<div className={S.listCompact}>

							{remainingEvents.map((event) => (
								<CardEvent
									key={event.id}
									variant="compact"
									event={event}
								/>
							))}
						</div>
					</div>
				</section>

				<section className={S.containerNewsletter}>
					<span className={S.circle_one} />
					<Newsletter />
					<span className={S.circle_two} />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
