import css from './Filter.module.css';

function Filter() {
  return (
    <>
      <p className={css.inputName}>Find contacts by name</p>
      <input className={css.inputData} type="text" />
    </>
  );
}

export default Filter;
