import React, { useEffect, useState } from 'react';

const ScrollTop = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
    
    return () => {
      window.removeEventListener('load', toggleScrollTop);
      document.removeEventListener('scroll', toggleScrollTop);
    };
  }, []);
  
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // a 태그 대신 button으로 변경하여 접근성 문제 해결
  return (
    <button 
      type="button"
      id="scroll-top" 
      className={`scroll-top d-flex align-items-center justify-content-center ${isActive ? 'active' : ''}`} 
      onClick={handleClick}
      aria-label="맨 위로 스크롤"
    >
      <i className="bi bi-arrow-up-short"></i>
    </button>
  );
};

export default ScrollTop;
