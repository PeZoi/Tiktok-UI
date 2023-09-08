import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import { useEffect, useState } from "react";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faPlus,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import image from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

const Header = () => {
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2, 3]);
      }, 0);
   });

   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <div className={cx("logo")}>
               <img src={image.logo} alt="Tiktok" />
            </div>

            <Tippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => {
                  return (
                     <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                     >
                        <PopperWrapper>
                           <h4 className={cx("search-title")}>Account</h4>
                           <AccountItem></AccountItem>
                           <AccountItem></AccountItem>
                           <AccountItem></AccountItem>
                           <AccountItem></AccountItem>
                        </PopperWrapper>
                     </div>
                  );
               }}
            >
               <div className={cx("search")}>
                  <input placeholder="Search" spellCheck={false} />
                  <button className={cx("clear")}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>

                  <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

                  <button className={cx("search-btn")}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>

            <div className={cx("actions")}>
               <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>
               <Button primary>Log in</Button>
            </div>
         </div>
      </header>
   );
};

export default Header;
