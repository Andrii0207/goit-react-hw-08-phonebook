import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { getFilteredContacts, getContacts } from '../redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilteredContacts);
  console.log('filterValue', filterValue);

  const contacts = useSelector(getContacts);
  console.log('Filter contacts2', contacts);

  // const handleFilter = evt => {
  //   const inputValue = evt.currentTarget.value;
  //   dispatch(setFilter(inputValue));
  // };

  return (
    <>
      <p className={css.inputName}>Find contacts by name</p>
      <input
        className={css.inputData}
        type="text"
        name="filter"
        value={filterValue}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
}

export default Filter;
