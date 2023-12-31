import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];

   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory([...history, item.children]);
                  }
               }}
            />
         );
      });
   };

   const handleOutMenu = () => {
      setHistory([history[0]]);
   };

   return (
      <Tippy
         interactive
         delay={[0, 800]}
         placement="bottom-end"
         onHide={handleOutMenu}
         render={(attrs) => {
            return (
               <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                  <PopperWrapper className={cx("menu-popper")}>
                     {history.length > 1 && (
                        <Header
                           title={"Language"}
                           onBack={() => {
                              setHistory((prev) =>
                                 prev.slice(0, prev.length - 1)
                              );
                           }}
                        />
                     )}
                     {renderItems()}
                  </PopperWrapper>
               </div>
            );
         }}
      >
         {children}
      </Tippy>
   );
};

export default Menu;
