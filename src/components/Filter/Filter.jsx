import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../redux/filterSlice';
import { getFilteredContacts } from '../redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilteredContacts);
  console.log('filterValue', filterValue);

  const handleFilter = evt => {
    const inputValue = evt.currentTarget.value;
    dispatch(setStatusFilter(inputValue));
  };

  return (
    <>
      <p className={css.inputName}>Find contacts by name</p>
      <input
        className={css.inputData}
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilter}
      />
    </>
  );
}

export default Filter;
