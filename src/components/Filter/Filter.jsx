import css from './Filter.module.css';

function Filter({ name, onChange }) {
  return (
    <>
      <p className={css.inputName}>Find contacts by name</p>
      <input className={css.inputData} type="text" value={name} onChange={onChange} />
    </>
  );
}

export default Filter;
