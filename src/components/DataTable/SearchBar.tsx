import { ChangeEvent, useRef } from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "../../assets/searchIcon.svg";
import clearIcon from "../../assets/clearIcon.svg";

interface Props {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
}

const SearchBar: React.FC<Props> = ({ setSearchQuery, searchQuery }) => {
  const searchBarRef = useRef<HTMLDivElement>(null);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    if (searchBarRef.current) {
      searchBarRef.current.classList.remove(styles.focused);
    }
  };

  const handleFocus = () => {
    if (searchBarRef.current) {
      searchBarRef.current.classList.add(styles.focused);
    }
  };

  const handleBlur = () => {
    if (searchBarRef.current) {
      searchBarRef.current.classList.remove(styles.focused);
    }
  };

  return (
    <div ref={searchBarRef} className={styles.searchBar}>
      <img
        src={searchIcon}
        alt="Search"
        aria-label="Search"
        className={styles.searchBar__searchIcon}
      />
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={styles.searchBar__input}
      />
      {searchQuery && (
        <button
          onClick={handleClearSearch}
          className={styles.searchBar__clearButton}>
          <img
            src={clearIcon}
            alt="Clear search"
            aria-label="Clear search"
            className={styles.searchBar__button__clearIcon}
          />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
