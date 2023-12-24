import styles from "./styles/comingProjects.module.css";

const ComingProjects = () => {
  return (
    <section className={styles.upcomingSection}>
      <div className={styles.text_content}>
        <h3>Next Projects</h3>
        <p>Check out some of our latest projects</p>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectCard}>
          <img src="/images/project1.jpg" alt="Project 1" />
          <div className={styles.projectInfo}>
            <h3>Project 1</h3>
            <p>Short description or teaser about Project 1.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src="/images/project2.jpg" alt="Project 2" />
          <div className={styles.projectInfo}>
            <h3>Project 2</h3>
            <p>Short description or teaser about Project 2.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingProjects;
