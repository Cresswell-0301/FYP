import React, { useEffect } from 'react';

const styles = `
/* Slideshow */
.slideshow {
  margin: 15px auto;
  overflow: hidden;
  max-width: 95%;
  max-height: 75%;
}

.slideshowSlider {
  white-space: nowrap;
  transition: ease 1000ms;
}

.slide {
  display: inline-block;
  height: 400px;
  width: 100%;
  border-radius: 40px;
}

/* Buttons */
.slideshowDots {
  text-align: center;
}

.slideshowDot {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #c4c4c4;
}

.slideshowDot.active {
  background-color: #6a0dad;
}
`;

const imageUrls = ["/slide-image/image1.jpg", "/slide-image/image2.jpg", "/slide-image/image3.jpg", "/slide-image/image4.jpg", "/slide-image/image5.jpg"];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const isReversed = React.useRef(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isReversed.current) {
        setIndex((prevIndex) => (prevIndex - 1 < 0 ? imageUrls.length - 1 : prevIndex - 1));
      } else {
        setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  useEffect(() => {
    if (index === 4) {
      isReversed.current = true;
    } else if (index === 0) {
      isReversed.current = false;
    }
  }, [index]);

  return (
    <div>
      <style>{styles}</style>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imageUrls.map((imageUrl, i) => (
            <img className="slide" key={i} src={imageUrl} alt={`Slide ${i + 1}`} />
          ))}
        </div>
        <div className="slideshowDots">
          {imageUrls.map((_, i) => (
            <div
              key={i}
              className={`slideshowDot${index === i ? " active" : ""}`}
              onClick={() => {
                setIndex(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
