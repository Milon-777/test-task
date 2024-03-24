import SearchBar from "./SearchBar";
import styles from "./Header.module.scss";

interface Props {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  openModal: () => void;
}

const Header: React.FC<Props> = ({
  setSearchQuery,
  searchQuery,
  openModal,
}) => {
  return (
    <header className={styles.header__wrapper}>
      <div className={styles.header}>
        <span className={styles.header__name}>Data Table</span>
        <div className={styles.header__container}>
          <SearchBar
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
          <button
            className={styles.header__addButton}
            onClick={() => openModal()}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                openModal();
              }
            }}>
            Add Employee
          </button>
        </div>
      </div>

      <hr className={styles.header__divider} />
    </header>
  );
};

export default Header;
