import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <a>{`Let's talk`}</a>
      <a>hello@artilect.com</a>
      <a>Dribble</a>
      <a>+351 916 432 223</a>
    </div>
  );
}
