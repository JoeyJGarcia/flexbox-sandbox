import styles from "../styles/Layout.module.css";
// https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Header Goes Here</h1>
        <div className={styles.buttonBar}>
          <button className={styles.buttons}>Button1</button>
          <button className={styles.buttons}>Button2</button>
          <button className={styles.buttons}>Button3</button>
          <button className={styles.buttons}>Button4</button>
        </div>
      </header>
      <div className={styles.layout}>
        <section className={styles.sidebar}>
          <h3>Topics</h3>
          <ul className={styles.topicsList}>
            <li>Flex Box</li>
            <li>Grid Design</li>
            <li>Styles 3</li>
            <li>Styles 4</li>
          </ul>
        </section>
        <section className={styles.content}>
          <article className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac
            habitasse platea dictumst quisque sagittis purus sit amet. Sem
            integer vitae justo eget magna fermentum iaculis. Eleifend mi in
            nulla posuere sollicitudin aliquam ultrices sagittis. Curabitur
            gravida arcu ac tortor. Sit amet mauris commodo quis imperdiet.
          </article>

          <article className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac
            habitasse platea dictumst quisque sagittis purus sit amet. Sem
            integer vitae justo eget magna fermentum iaculis. Eleifend mi in
            nulla posuere sollicitudin aliquam ultrices sagittis. Curabitur
            gravida arcu ac tortor. Sit amet mauris commodo quis imperdiet.
          </article>

          <article className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac
            habitasse platea dictumst quisque sagittis purus sit amet. Sem
            integer vitae justo eget magna fermentum iaculis. Eleifend mi in
            nulla posuere sollicitudin aliquam ultrices sagittis. Curabitur
            gravida arcu ac tortor. Sit amet mauris commodo quis imperdiet.
          </article>

          <article className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac
            habitasse platea dictumst quisque sagittis purus sit amet. Sem
            integer vitae justo eget magna fermentum iaculis. Eleifend mi in
            nulla posuere sollicitudin aliquam ultrices sagittis. Curabitur
            gravida arcu ac tortor. Sit amet mauris commodo quis imperdiet.
          </article>

          <article className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac
            habitasse platea dictumst quisque sagittis purus sit amet. Sem
            integer vitae justo eget magna fermentum iaculis. Eleifend mi in
            nulla posuere sollicitudin aliquam ultrices sagittis. Curabitur
            gravida arcu ac tortor. Sit amet mauris commodo quis imperdiet.
          </article>

          <article className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac
            habitasse platea dictumst quisque sagittis purus sit amet. Sem
            integer vitae justo eget magna fermentum iaculis. Eleifend mi in
            nulla posuere sollicitudin aliquam ultrices sagittis. Curabitur
            gravida arcu ac tortor. Sit amet mauris commodo quis imperdiet.
          </article>
        </section>
      </div>
      <footer className={styles.footer}>
        <h2>Footer Goes Here</h2>
      </footer>
    </div>
  );
}
