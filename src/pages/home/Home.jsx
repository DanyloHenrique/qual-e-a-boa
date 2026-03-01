import S  from './home.module.scss';
import Newsletter from "./components/Newsletter/Newsletter";

const Home = () => {
  return (
    <main>
      <section className={S.containerNewsletter}>
        <Newsletter />
      </section>
    </main>
  );
};

export default Home;
