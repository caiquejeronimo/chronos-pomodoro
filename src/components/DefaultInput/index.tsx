import styles from './styles.module.scss';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...props
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        className={styles.input}
        type={type}
        name={id}
        id={id}
        {...props}
      />
    </>
  );
}
