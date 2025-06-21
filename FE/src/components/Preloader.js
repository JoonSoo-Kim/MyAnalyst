import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // 페이지 로딩이 완료되면 Preloader를 제거
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    });
    
    // 첫 로딩 후에도 일정 시간이 지나면 강제로 Preloader 제거
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) return null;
  
  return <div id="preloader"></div>;
};

export default Preloader;
