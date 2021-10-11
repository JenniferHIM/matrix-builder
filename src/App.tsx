import styles from './App.module.scss';
import Form from 'components/Form/Form';
import Button from 'components/TableMatrix/Button/Button';

function App() {
  return (
    <>
      <Form />
      <section className={styles.sectionTable}>{<Button />}</section>
    </>
  );
}

export default App;
