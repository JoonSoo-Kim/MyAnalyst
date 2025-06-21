import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { isScriptLoaded, initGLightbox } from '../utils/scriptLoader';
import './Home.css';

const Home = () => {
  // GLightbox 인스턴스를 저장할 ref 생성
  const lightboxRef = useRef(null);

  useEffect(() => {
    // AOS 초기화
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    // DOM이 완전히 렌더링된 후에 GLightbox 초기화
    const timer = setTimeout(() => {
      if (isScriptLoaded('GLightbox')) {
        // 이전에 생성된 lightbox가 있으면 제거
        if (lightboxRef.current) {
          lightboxRef.current.destroy();
        }

        // 새 lightbox 인스턴스 생성
        lightboxRef.current = initGLightbox();
      } else {
        console.warn('GLightbox script is not loaded properly.');
      }
    }, 500);

    // 컴포넌트 언마운트 시 정리
    return () => {
      clearTimeout(timer);
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, []);

  return (
    <main className="main">
      {/* Main Hero Section */}
      <section id="main-hero" className="main-hero section">
        <div className="main-hero-bg">
          <img src="/assets/img/hero-bg-light.webp" alt="" />
        </div>
        <div className="container">
          <div className="main-hero-content">
            <h1 data-aos="fade-up">Welcome to <span>MyAnalyst</span></h1>
            <p data-aos="fade-up" data-aos-delay="100">RAG 기반 기업 분석 보고서 생성 서비스<br /></p>
            <div className="main-hero-buttons" data-aos="fade-up" data-aos-delay="200">
              <Link to="/company-analysis" className="btn-get-started">기업 분석 시작</Link>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                 className="glightbox btn-watch-video d-flex align-items-center"
                 data-type="video"
                 data-effect="fade"
                 data-width="900">
                <i className="bi bi-play-circle"></i>
                <span>체험 비디오</span>
              </a>
            </div>
            <img src="/assets/img/main-image.png" className="img-fluid main-hero-img" alt=""
                 data-aos="zoom-out" data-aos-delay="300" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;