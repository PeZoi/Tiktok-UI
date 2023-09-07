import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./Account.module.scss";

const cx = classNames.bind(styles);

const AccountItem = () => {
   return (
      <div className={cx("wrapper")}>
         <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/56ed4a1405556fcc32ef21bf101a2263~c5_100x100.jpeg?x-expires=1694268000&x-signature=MSnVJiJGL1X%2B6SonwicUgLiIASs%3D"
            alt=""
         />
         <div className={cx("info")}>
            <h4 className={cx("name")}>
               <span>Đông Phạm</span>
               <FontAwesomeIcon
                  className={cx("check")}
                  icon={faCircleCheck}
               ></FontAwesomeIcon>
            </h4>
            <span className={cx("username")}>Phạm Ngọc Viễn Đông</span>
         </div>
      </div>
   );
};

export default AccountItem;
