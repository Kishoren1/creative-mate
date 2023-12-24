import Image from "next/image";
import styles from "./styles/recent.module.css";

const RecentWork = () => {
  return (
    <section className={styles.recent_section}>
      <div className={styles.recent_content}>
        <div className={styles.text_content}>
          <h3>Recent Work</h3>
          <p>Check out some of our latest projects</p>
        </div>

        <div className={styles.image_grid}>
          <div className={styles.project_item}>
            <Image
              src="/images/projects.jpg"
              alt="Project 1"
              width={320}
              height={200}
            />
            <div className={styles.project_info}>
              <h4>Project 1</h4>
              <p>Description of Project 1</p>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/images/project1.jpg"
              alt="Project 1"
              width={320}
              height={200}
            />
            <div className={styles.project_info}>
              <h4>Project 1</h4>
              <p>Description of Project 1</p>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/images/project2.jpg"
              alt="Project 1"
              width={320}
              height={200}
            />
            <div className={styles.project_info}>
              <h4>Project 1</h4>
              <p>Description of Project 1</p>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/images/project3.jpg"
              alt="Project 1"
              width={320}
              height={200}
            />
            <div className={styles.project_info}>
              <h4>Project 1</h4>
              <p>Description of Project 1</p>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/images/project4.jpg"
              alt="Project 1"
              width={320}
              height={200}
            />
            <div className={styles.project_info}>
              <h4>Project 1</h4>
              <p>Description of Project 1</p>
            </div>
          </div>

          <div className={styles.project_item}>
            <Image
              src="/images/project5.jpg"
              alt="Project 2"
              width={320}
              height={200}
            />
            <div className={styles.project_info}>
              <h4>Project 2</h4>
              <p>Description of Project 2</p>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/images/project6.jpg"
              alt="Project 2"
              width={320}
              height={200}
            />
            <div className={styles.project_info}>
              <h4>Project 2</h4>
              <p>Description of Project 2</p>
            </div>
          </div>
          <div className={styles.project_item}>
            <Image
              src="/images/project7.jpg"
              alt="Project 2"
              width={320}
              height={200}
            />
            <div className={styles.project_info}>
              <h4>Project 2</h4>
              <p>Description of Project 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
