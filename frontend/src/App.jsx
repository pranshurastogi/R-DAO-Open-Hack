import styles from "./style";
import { Features, CTA, Footer, Navbar, Hero } from "./components";
import Marketplace from "./components/Marketplace";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Routes>
      {/* Home route */}
      <Route path="/" element={
        <>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Features />
              <CTA />
              <Footer />
            </div>
          </div>
        </>
      } exact />

      {/* Marketplace route */}
      <Route path="/marketplace" element={
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Marketplace />
            {/* If you want Footer here, you can add <Footer /> below Marketplace */}
          </div>
        </div>
      } />
    </Routes>
  </div>
);

export default App;
