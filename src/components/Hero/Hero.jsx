import React from "react";
import Typewriter from "typewriter-effect";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className={styles.title}>I'm Muskan</h1>

        {/* Replacing problematic <p> with a <div> or <span> */}
        <div className={styles.description}>
          <Typewriter
            options={{
              strings: [
                "MERN Stack Developer",
                "Open Source Contributor",
                "Software Developer",
                "Freelancer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>
      </div>

      <img
        src={getImageUrl("hero/girl3.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
