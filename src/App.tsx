import styles from './App.module.scss';
import Form from 'components/Form/Form';
import TableMatrix from './components/TableMatrix';
import {RootState} from 'redux/store';
import {connect} from 'react-redux';
import {FC, useState, useEffect} from 'react';

type IAppProps = {
  settings: {
    columns: number | string;
    rows: number | string;
    cells: number | string;
  };
};

const App: FC<IAppProps> = ({settings}) => {
  const [matrix, setMatrix] = useState(false);

  useEffect(() => {
    setMatrix(true);
  }, [settings]);

  return (
    <>
      <section className={styles.sectionForm}>
        <Form />
      </section>
      <section className={styles.sectionTable}>{matrix && <TableMatrix />}</section>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  settings: state.matrix.settings,
});

export default connect(mapStateToProps)(App);
