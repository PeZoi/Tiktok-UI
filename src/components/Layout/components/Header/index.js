import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useEffect, useState } from "react";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faPlus,
   faEllipsisVertical,
   faEarthAsia,
   faBitcoinSign,
   faGear,
   faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
   faCircleQuestion,
   faMoon,
   faLightbulb,
   faKeyboard,
   faMessage,
   faUser,
   faBookmark,
} from "@fortawesome/free-regular-svg-icons";

import styles from "./Header.module.scss";
import image from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import IconDownload from "./Download";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: "LIVE Creater Hub",
      to: "/creater-hub",
   },
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
         title: "Languages",
         data: [
            {
               code: "en",
               title: "English",
            },
            {
               code: "vi",
               title: "Tiếng Việt",
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
   },
   {
      icon: <FontAwesomeIcon icon={faMoon} />,
      title: "Dark mode",
   },
];

const USER_MENU = [
   {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/view-profile",
   },
   {
      icon: <FontAwesomeIcon icon={faBookmark} />,
      title: "Favorites",
      to: "/favorites",
   },
   {
      icon: <FontAwesomeIcon icon={faBitcoinSign} />,
      title: "Get coins",
      to: "/get-coins",
   },
   {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
   },
   ...MENU_ITEMS,
   {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Log out",
      to: "/logout",
      separate: true,
   },
];

const currentUser = true;

const Header = () => {
   const [searchResult, setSearchResult] = useState([]);

   // useEffect(() => {
   //    setTimeout(() => {
   //       setSearchResult([1, 2, 3]);
   //    }, 0);
   // });

   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <div className={cx("logo")}>
               <img src={image.logo} alt="Tiktok" />
            </div>

            <HeadlessTippy
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
            </HeadlessTippy>

            <div className={cx("actions")}>
               <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>

               {currentUser && <IconDownload />}

               {currentUser ? (
                  <>
                     <Tippy content="Messages" placement="bottom">
                        <button className={cx("more-btn")}>
                           <FontAwesomeIcon icon={faMessage} />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button primary>Log in</Button>
                  </>
               )}

               {!currentUser && <IconDownload />}

               <Menu items={currentUser ? USER_MENU : MENU_ITEMS}>
                  {currentUser ? (
                     <img
                        className={cx("user-avatar")}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9fd720457d9464f2fd721ceb3e010583~c5_100x100.jpeg?x-expires=1694347200&x-signature=Jh0DjVBwZEyfCRKS21jZku0U7ac%3D"
                        alt="avatar"
                     ></img>
                  ) : (
                     <button className={cx("more-btn")}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
};

export default Header;
