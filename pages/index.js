import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  useEffect(() => {
    console.log("idetas kodas i clientSide");
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;

// . Prie savo produktų masyvo pridėti property unitsLeft (number);
// 2. Jeigu produkto unitsLeft yra 1 ar. daugiau turi būt atvaizduojama produkto kortelė, jeigu produkto unitsLeft yra 0 kotelės viduje turi vietoj nuotraukos atsirast užrašas "Šiuo metu prekės neturim"; (naudot tennary operator);
// 3. Sudėti savo produktus į mockAPI, juos parsifetchint, įdėt į useState kintamajį;
// 4. Vietoj fetch panaudoti axios biblioteką;
// 5. Pasidaryt vieną iš neatliktų praeitų paskaitų dizainą;
