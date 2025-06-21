/**
 * 외부 스크립트 로드 및 초기화를 위한 유틸리티 함수
 */

/**
 * 스크립트가 이미 로드되었는지 확인
 * @param {string} name - window 객체에서 확인할 속성명
 * @returns {boolean} - 로드 여부
 */
export const isScriptLoaded = (name) => {
  return window[name] !== undefined;
};

/**
 * 외부 스크립트를 동적으로 로드
 * @param {string} url - 스크립트 URL
 * @param {string} id - 스크립트 요소의 ID
 * @returns {Promise} - 스크립트 로드 완료 Promise
 */
export const loadExternalScript = (url, id) => {
  return new Promise((resolve, reject) => {
    // 이미 로드된 스크립트가 있는지 확인
    const existingScript = document.getElementById(id);
    if (existingScript) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = url;
    script.id = id;
    script.async = true;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
    
    document.body.appendChild(script);
  });
};

/**
 * GLightbox 초기화 함수
 * @param {Object} options - GLightbox 옵션
 * @returns {Object|null} - GLightbox 인스턴스 또는 null
 */
export const initGLightbox = (options = {}) => {
  if (typeof window !== 'undefined' && window.GLightbox) {
    // 기본 옵션과 사용자 옵션 병합
    const defaultOptions = {
      selector: '.glightbox',
      touchNavigation: true,
      loop: false,
      autoplayVideos: true,
      zoomable: false
    };
    
    const mergedOptions = { ...defaultOptions, ...options };
    
    // GLightbox 초기화 및 인스턴스 반환
    return window.GLightbox(mergedOptions);
  }
  
  console.warn('GLightbox is not available');
  return null;
};

/**
 * Swiper 초기화 함수
 * @param {string} selector - Swiper 컨테이너 선택자
 * @param {Object} options - Swiper 옵션
 * @returns {Object|null} - Swiper 인스턴스 또는 null
 */
export const initSwiper = (selector, options = {}) => {
  if (typeof window !== 'undefined' && window.Swiper) {
    const defaultOptions = {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };
    
    const mergedOptions = { ...defaultOptions, ...options };
    
    return new window.Swiper(selector, mergedOptions);
  }
  
  console.warn('Swiper is not available');
  return null;
};

/**
 * 모든 필수 라이브러리 로드
 */
export const loadAllLibraries = async () => {
  const libraries = [
    { 
      name: 'Swiper', 
      url: '/assets/vendor/swiper/swiper-bundle.min.js',
      id: 'swiper-script'
    },
    { 
      name: 'AOS', 
      url: '/assets/vendor/aos/aos.js',
      id: 'aos-script'
    },
    { 
      name: 'GLightbox', 
      url: '/assets/vendor/glightbox/js/glightbox.min.js',
      id: 'glightbox-script'
    }
  ];
  
  const promises = libraries.map(lib => {
    if (!isScriptLoaded(lib.name)) {
      return loadExternalScript(lib.url, lib.id);
    }
    return Promise.resolve();
  });
  
  return Promise.all(promises);
};
