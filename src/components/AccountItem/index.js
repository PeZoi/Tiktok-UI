import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./Account.module.scss";
import Image from "../Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
   return (
      <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
         <Image
            className={cx("avatar")}
            src={data.avatar}
            alt={data.full_name}
         />
         <div className={cx("info")}>
            <h4 className={cx("name")}>
               <span>{data.full_name}</span>
               {data.tick && (
                  <FontAwesomeIcon
                     className={cx("check")}
                     icon={faCircleCheck}
                  ></FontAwesomeIcon>
               )}
            </h4>
            <span className={cx("username")}>{data.nickname}</span>
         </div>
      </Link>
   );
};

export default AccountItem;
