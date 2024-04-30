import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;


// 1. Pagrindiniam puslapy naudonant useState išsaugot kintamuosius su:
// - Headerio logo tekstu;
// - Masyvą su straipsnio informacija;
// - Footerio copyright tekstą;
// 2. Sukurti buttoną, bei teksto wrapperį viename komponente;
// 3. Paspaudus mygtuką tekstas turi išnykt, paspaudus antrą kart tekstas turi vėl atsirast;
// 4. EXTRA: padaryt, kad button bei bei tekstas būtu atskiruose komponentuose. Paspaudimo state turi būt komponente kuriame bus abu komponentai;