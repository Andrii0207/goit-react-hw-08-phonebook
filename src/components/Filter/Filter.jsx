import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { getFilteredContacts, getContacts } from '../redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilteredContacts);

  return (
    <>
      <p className={css.inputName}>Find contacts by name</p>
      <input
        className={css.inputData}
        type="text"
        name="filter"
        value={filterContacts}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
}

export default Filter;
