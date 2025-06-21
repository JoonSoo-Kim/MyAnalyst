import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// CSS 순서 중요: 기본 스타일 -> 외부 라이브러리 -> 커스텀 스타일
import './index.css';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// 커스텀 CSS (복사한 main.css)
import './assets/css/main.css';
// 앱 스타일
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
