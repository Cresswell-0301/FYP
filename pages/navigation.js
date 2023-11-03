import React, { useState, useEffect } from 'react';

// Slide Show CSS Start
const styles = `
/* Slideshow */
.slideshow {
  margin: 15px auto;
  overflow: hidden;
  max-width: 98%;
  max-height: 75%;
  position: relative;
}

.slideshowSlider {
  white-space: nowrap;
  transition: ease 1000ms;
  position: relative;
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
  margin: 5px 7px 0px;
  background-color: #c4c4c4;
}

.slideshowDot.active {
  background-color: #6a0dad;
}
`;
// Slide Show CSS End

// Navigation Bar JS Start
const imageUrls = ["/slide-image/image1.jpg", "/slide-image/image2.jpg", "/slide-image/image3.jpg", "/slide-image/image4.jpg", "/slide-image/image5.jpg"];
const delay = 2500;

export default function Navigation (){
    const [isBarHidden, setIsBarHidden] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const toggleBar = () => {
        setIsBarHidden((prevIsBarHidden) => !prevIsBarHidden);
    };

    useEffect(() => {
        const handleResize = () => {
        const menuToggle = document.getElementById('mobile-menu-2');

        if (window.innerWidth <= 768) {
            setIsButtonVisible(true);
            if (isButtonVisible) {
                menuToggle.style.display = isBarHidden ? 'none' : 'block';
            } else {
                menuToggle.style.display = 'none';
                setIsBarHidden(true); // Ensure the bar is hidden on small screens
            }
        } else {
            setIsButtonVisible(false);
            menuToggle.style.display = 'block';
            setIsBarHidden(true); // Ensure the bar is hidden on small screens
        }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isBarHidden, isButtonVisible]);

    const mobileMenuStyle = {
        display: isBarHidden ? 'none' : 'block',
        zIndex: 2,
    };
// Navigation Bar JS End

// Slide Show JS Start
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
// SLide Show JS End

    return(
        <div>
            {/* Navigation Bar Start */}
            <div className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 fixed overflow-hidden w-full navbar z-101">
                <div className="flex flex-wrap items-center justify-between max-w-full px-4 mx-auto">
                    <a href="#" className="flex items-center">
                        <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Company Logo"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FYP</span>
                    </a>

                    <div className="flex items-center lg:order-2">
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>

                        <a href="#" 
                            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                            Login
                        </a>

                        <button
                        type="button"
                        id="menu-toggle-button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-expanded={isBarHidden ? 'false' : 'true'}
                        onClick={toggleBar}
                        >

                            <span className="sr-only">Open main menu</span>
                            
                            <svg className={`w-6 h-6 ${isBarHidden ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            
                            <svg className={`w-6 h-6 ${isBarHidden ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2" style={mobileMenuStyle}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-center">
                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                                    aria-current="page">Home</a>
                            </li>

                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    >Contact</a>
                            </li>

                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    >About</a>
                            </li>

                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    >Shop</a>
                            </li>

                            <li>
                                <a href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    >Team</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Navigation Bar End */}

            {/* Slide Show Start */}
            <style>{styles}</style>

            <div className='pt-13'>
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
            {/* Slide Show End */}

        </div>
    );
}