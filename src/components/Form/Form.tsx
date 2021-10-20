import FormSettings from 'components/Form/FormSettings';
import {useState} from 'react';
import styles from '../../components/Form/Form.module.scss';

const Form = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.sectionForm}>
        <h1 className={styles.title}>Matrix builder</h1>
        <FormSettings rows={0} columns={0} cells={0} />
      </form>
    </div>
  );
};

export default Form;
