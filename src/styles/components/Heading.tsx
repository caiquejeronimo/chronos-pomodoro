import styles from './Heading.module.scss';

export function Heading() {
  console.log(styles);
  return <h1 className={styles.heading}>Hello World</h1>;
}
