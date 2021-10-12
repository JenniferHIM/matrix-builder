import styles from './App.module.scss';
import Form from 'components/Form/Form';
import Button from 'components/TableMatrix/Button/Button';
import TableHeader from 'components/TableMatrix/TableHeader/TableHeader';

function App() {
  return (
    <>
      <Form />
      <section className={styles.sectionTable}>
        <Button />
        <TableHeader columns={5} />
      </section>
    </>
  );
}

export default App;
