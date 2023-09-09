import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);

const Search = () => {
   const [searchValue, setSearchValue] = useState("");
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const inputRef = useRef();

   const debounce = useDebounce(searchValue, 500);

   useEffect(() => {
      if (!searchValue.trim()) {
         setSearchResult([]);
         return;
      }

      setLoading(true);

      fetch(
         `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
            debounce
         )}&type=less`
      )
         .then((res) => res.json())
         .then((res) => {
            setSearchResult(res.data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [debounce]);

   const handleClear = () => {
      setSearchValue("");
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   return (
      <HeadlessTippy
         interactive
         visible={showResult && searchResult?.length > 0}
         render={(attrs) => {
            return (
               <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                     <h4 className={cx("search-title")}>Account</h4>
                     {searchResult?.map((result) => (
                        <AccountItem
                           key={result.id}
                           data={result}
                        ></AccountItem>
                     ))}
                  </PopperWrapper>
               </div>
            );
         }}
         onClickOutside={handleHideResult}
      >
         <div className={cx("search")}>
            <input
               ref={inputRef}
               value={searchValue}
               placeholder="Search"
               spellCheck={false}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResult(true)}
            />

            {!!searchValue && !loading && (
               <button className={cx("clear")} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}

            {loading && (
               <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
            )}

            <button className={cx("search-btn")}>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
         </div>
      </HeadlessTippy>
   );
};

export default Search;
