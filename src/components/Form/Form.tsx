import FormSettings from 'components/Form/FormSettings';
import {FC, useState} from 'react';
import {RootState} from 'redux/store';
import {connect, ConnectedProps} from 'react-redux';
import actions from '../../redux/matrix/actions';
import styles from '../Form/Form.module.scss';

interface IFormData {
  [key: string]: number;
}

const Form: FC<FormProps> = ({setSettings, settings}) => {
  const [formData, setFormData] = useState<IFormData>({});
  const [columns, setColumns] = useState<number | string>('');
  const [rows, setRows] = useState<number | string>('');
  const [cells, setCells] = useState<number | string>('');

  const handleClick = (event: any) => {
    const {name, value} = event.currentTarget;
    // this.setState({[name]: +value});
    setFormData({...formData, [name]: +value});
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    const settingsMatrix = {
      columns,
      rows,
      cells,
    };
    setSettings(settingsMatrix);
    reset();
  };

  const reset = () => {
    setColumns('');
    setRows('');
    setCells('');
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.sectionForm} onSubmit={submitForm}>
        <h1 className={styles.title}>Matrix builder</h1>
        <FormSettings
          rows={rows}
          columns={columns}
          cells={cells}
          setColumns={setColumns}
          setRows={setRows}
          setCells={setCells}
          addInputData={(event) => handleClick(event)}
          {...formData}
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  settings: state.matrix.settings,
});
const mapDispatchToProps = {
  setSettings: actions.setSettings,
};
type FormProps = ConnectedProps<typeof connector>;

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Form);
