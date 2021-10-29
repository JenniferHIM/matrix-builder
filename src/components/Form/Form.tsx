import FormSettings from 'components/Form/FormSettings';
import {FC, useState} from 'react';
import {RootState} from 'redux/store';
import {connect, ConnectedProps} from 'react-redux';
import actions from '../../redux/matrix/actions';
import styles from '../Form/Form.module.scss';
import {ICell} from 'function';

interface IFormData {
  [key: string]: number;
}

interface ISettings {
  setSettings: (value: ICell) => void;
  settings: ICell;
}

const Form: FC<FormProps> = ({setSettings, settings}) => {
  const [formData, setFormData] = useState<IFormData>({});
  const [columns, setColumns] = useState('');
  const [rows, setRows] = useState('');
  const [cells, setCells] = useState('');

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
    setSettings(settings);
    reset();
  };

  const reset = () => {
    setColumns('');
    setRows('');
    setCells('');
    // this.setState({columns: '', rows: '', cells: ''});
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.sectionForm} onSubmit={submitForm}>
        <h1 className={styles.title}>Matrix builder</h1>
        <FormSettings rows={0} columns={0} cells={0} addInputData={(event) => handleClick(event)} {...formData} />
        {/* rows={0} columns={0} cells={0} */}
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
// & { settings: ICell; setSettings: (value: ICell) => void };

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Form);
// export default connect(mapStateToProps, mapDispatchToProps)(Form);
// export default Form;
