import FormSettings from 'components/Form/FormSettings';
import {useState} from 'react';
import {RootState} from 'redux/store';
import {connect} from 'react-redux';
import actions from '../../redux/matrix/actions';
import styles from '../Form/Form.module.scss';

const Form = () => {
  const [columns, setColumns] = useState('');
  const [rows, setRows] = useState('');
  const [cells, setCells] = useState('');
  const handleClick = (event) => {
    const {name, value} = event.currentTarget;
    this.setState({[name]: +value});
  };

  const submitForm = (event) => {
    event.preventDefault();
    const settings = {
      columns: columns,
      rows: rows,
      cells: cells,
    };
    this.props.setSettings(settings);
    console.log(settings);
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
        <FormSettings addInputData={handleClick} {...this.state} />
        {/* rows={0} columns={0} cells={0} */}
      </form>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  settings: state.settings,
});
const mapDispatchToProps = {
  setSettings: actions.setSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
// export default Form;
