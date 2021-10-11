import styles from '../Button/Button.module.scss';
import cn from 'classnames';

const Button = () => {
  return (
    <div className={styles.btnMatrix}>
      <button className={cn(styles.button, styles.btnAddrow)} type="button">
        Add row
      </button>
    </div>
  );
};

export default Button;
