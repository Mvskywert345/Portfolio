import React from "react";
import styles from "./Aboutb.module.css";
import { getImageUrl } from "../../utils";

export const Aboutb = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/girl.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Know About Me</h3>
              <p>
              Hi Everyone, I am Muskan Yadav from UP, India.
              I am currently working as a MernStack Intern at MNNLR Pvt.LTD.
              I have completed MY (BCA) in 2024!
             
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
