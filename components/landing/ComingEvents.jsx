import styles from "./styles/comingEvents.module.css";

const ComingEvents = () => {
  return (
    <section className={styles.upcoming_events}>
      <div className={styles.text_content}>
        <h3>Coming Events</h3>
        <p>Explore our upcoming art and cultural events.</p>
      </div>
      <div className={styles.event_cards_container}>
        <div className={styles.event_card}>
          <img
            src="/images/event1.jpg"
            alt="Event 1"
            className={styles.event_image}
          />
          <div className={styles.event_details}>
            <h3 className={styles.event_title}>Event Title 1</h3>
            <p className={styles.event_date}>October 15, 2023</p>
            <p className={styles.event_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi.
            </p>
          </div>
        </div>
        <div className={styles.event_card}>
          <img
            src="/images/event2.jpg"
            alt="Event 2"
            className={styles.event_image}
          />
          <div className={styles.event_details}>
            <h3 className={styles.event_title}>Event Title 2</h3>
            <p className={styles.event_date}>November 20, 2023</p>
            <p className={styles.event_description}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.event_card}>
          <img
            src="/images/event1.jpg"
            alt="Event 1"
            className={styles.event_image}
          />
          <div className={styles.event_details}>
            <h3 className={styles.event_title}>Event Title 1</h3>
            <p className={styles.event_date}>October 15, 2023</p>
            <p className={styles.event_description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingEvents;
