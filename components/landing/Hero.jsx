import Image from "next/image";
import styles from "./styles/hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>
          Discover the Artistry Within Your Creative Passion.
        </h1>
        <p className={styles.hero_subtitle}>
          Immerse yourself in a world of creativity and expression. Explore our
          diverse collection of artworks that captivate the soul and inspire the
          mind.
        </p>
        <Link href="/portfolio">
          <button className={styles.explore_button}>
            Explore&nbsp; <i className="bx bx-right-arrow-alt bx-sm"></i>
          </button>
        </Link>
      </div>

      <div className={styles.hero_images}>
        <Image src="/images/hero.jpg" width={120} height={220} alt="Image 1" />
        <Image src="/images/hero1.jpg" width={120} height={220} alt="Image 2" />
      </div>
    </section>
  );
};

export default Hero;
