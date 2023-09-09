import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Download.module.scss";
import image from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Button from "~/components/Button";
import { DesktopMobileIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

const IconDownload = () => {
   return (
      <Tippy
         interactive
         delay={[0, 800]}
         offset={[80, 10]}
         placement="bottom-end"
         render={(attrs) => {
            return (
               <div tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                     <div className={cx("wrapper-download")}>
                        <img
                           className={cx("icon-download")}
                           src={image.iconDownload}
                           alt="icon-download"
                        />
                        <h4 className={cx("title-download")}>
                           TikTok desktop app
                        </h4>
                        <Button primary className={cx("download-btn")}>
                           Download
                        </Button>
                        <p className={cx("title-sub-download")}>
                           <span>Download mobile app instead</span>
                           <span
                              style={{
                                 color: "rgba(22, 24, 35, 0.5)",
                              }}
                           >
                              <FontAwesomeIcon icon={faChevronRight} />
                           </span>
                        </p>
                     </div>
                  </PopperWrapper>
               </div>
            );
         }}
      >
         <button className={cx("more-btn")}>
            <DesktopMobileIcon />
         </button>
      </Tippy>
   );
};

export default IconDownload;
