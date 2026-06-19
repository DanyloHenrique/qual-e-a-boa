import HeroSection from "./components/HeroSection/HeroSection";
import Newsletter from "./components/Newsletter/Newsletter";
import S from "./home.module.scss";

const Home = () => {
	return (
		<main>
			<HeroSection />
			<section className={S.containerNewsletter}>
				<span className={S.circle_one} />
				<Newsletter />
				<span className={S.circle_two} />
			</section>
		</main>
	);
};

export default Home;
