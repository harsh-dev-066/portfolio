import React, { useEffect, useRef, useState } from "react";

/**
 * Shows a tiny blurred placeholder immediately, then crossfades to the
 * full-resolution image once it has decoded — avoids progressive "bits" paint.
 */
const BlurUpImage = ({
  src,
  placeholder,
  alt,
  className = "",
  imgClassName = "",
  aspectRatio = "3 / 4",
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio }}>
      <img
        src={placeholder}
        alt=""
        aria-hidden="true"
        decoding="async"
        className={`absolute inset-0 h-full w-full scale-110 object-cover blur-2xl transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
};

export default BlurUpImage;
