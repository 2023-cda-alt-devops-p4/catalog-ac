import React, { useState } from 'react';

function Image(props) {
  const [imgClicked, setImgClicked] = useState(false);

  const showImage = () => {
    setImgClicked(true);
  };

  const hideImage = () => {
    setImgClicked(false);
  };

  return (
    <div>
      <img src={props.src} alt={props.alt} onClick={showImage} />
      {imgClicked && (
        <img
          src={props.src}
          alt={props.alt}
          className="imgZoom"
          onClick={hideImage}
        />
      )}
    </div>
  );
}

export default Image;
