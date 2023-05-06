import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

import { selectFilteredContacts } from 'redux/contacts/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.filterWripper}>
      <p className={css.inputName}>Find contacts by name</p>
      <input
        className={css.inputData}
        type="text"
        name="filter"
        value={filterContacts}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
