import Image from "next/image";
import styles from "./styles/about.module.css";

const AboutSection = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.about_content}>
        <div className={styles.text_content}>
          <h2>Let Us Introduce</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            dolores debitis provident amet consectetur adipisicing elit.
          </p>
        </div>
        <div className={styles.image_content}>
          <Image src="/images/about.png" alt="about" width={350} height={450} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
