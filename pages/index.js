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


// 1. Apsirašyti produktų masyvą, produkto objektą sudaro: kaina, nuotraukos url, title, parduotivės adresas;
// 2. Produkto kortelė turi atvaizduot visą informaciją, bei mygtuką show location. Paspaudus ant mygtuko yra parodomas parduotuvės adresas;
// 3. Masyvą .map() pagalba atvaizduoti korteliu pavidalu;
// 4. Paspaudus ant kortelės consolėj turi atsirast to produkto pavadinimas;
// 5. Atkartoti dizainą iš nuotraukų;
// 6. Burger button / mobile menu