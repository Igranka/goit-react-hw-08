import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";


const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const filterState = useSelector(selectNameFilter);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value)); 
  };

  return (
    <div>
      <label className={css.find}> Find contacts by name </label>
      <input
        onChange={handleSearch}
        className={css.input}
        name='value'
        id={id}
        type="text"
        value={filterState.value}
      />
    </div>
  );
};

export default SearchBox;