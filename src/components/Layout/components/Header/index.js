import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useEffect, useState } from "react";
import {
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
   faUser,
   faBookmark,
} from "@fortawesome/free-regular-svg-icons";

import styles from "./Header.module.scss";
import image from "~/assets/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import IconDownload from "./Download";
import { InboxIcon, MessageIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "./Search";

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

const Header = () => {
   const currentUser = true;
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

            <Search />

            <div className={cx("actions")}>
               <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>

               {currentUser && <IconDownload />}

               {currentUser ? (
                  <>
                     <Tippy content="Messages" placement="bottom">
                        <button className={cx("more-btn")}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy content="Inbox" placement="bottom">
                        <button className={cx("more-btn")}>
                           <InboxIcon />
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
                     <Image
                        className={cx("user-avatar")}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9fd720457d9464f2fd721ceb3e010583~c5_100x100.jpeg?x-expires=1694347200&x-signature=Jh0DjVBwZEyfCRKS21jZku0U7ac%3D"
                        alt="avatar"
                     />
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
