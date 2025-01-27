import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import{Aboutb} from"./components/Aboutb/Aboutb"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Aboutb/>
      <Experience />
       <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
