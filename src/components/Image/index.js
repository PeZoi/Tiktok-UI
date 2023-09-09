import { forwardRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Image.module.scss";
import image from "~/assets/images";

const Image = forwardRef(
   (
      { src, className, fallback: customFallback = image.noImage, ...props },
      ref
   ) => {
      const [fallback, setFallback] = useState("");

      const handleError = () => {
         setFallback(customFallback);
      };

      return (
         <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            ref={ref}
            onError={handleError}
            {...props}
         />
      );
   }
);

export default Image;
