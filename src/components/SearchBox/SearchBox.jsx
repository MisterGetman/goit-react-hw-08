import { useSelector, useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filterText = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const setFilterText = (filter) => dispatch(changeFilter(filter));

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name {filterText}</p>
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        type="text"
        className={css.searchBoxInput}
      />
    </div>
  );
};

export default SearchBox;
