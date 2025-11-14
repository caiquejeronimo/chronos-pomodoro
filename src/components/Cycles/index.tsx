import styles from './styles.module.scss';

export function Cycles() {
  return (
    <>
      <div className={styles.cicles}>
        <span>Ciclos:</span>

        <div className={styles.cycleDots}>
          <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
          <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
          <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
          <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
          <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
          <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
          <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
          <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
        </div>
      </div>
    </>
  );
}
