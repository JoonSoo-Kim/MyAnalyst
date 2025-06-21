# MyAnalyst React Frontend

RAG 기반 기업 분석 보고서 생성 서비스의 React 버전입니다.

## 개발 환경 설정

1. 필요한 패키지 설치:

```bash
npm install
```

2. 정적 자산(assets) 복사:

```bash
npm run copy-assets
```

3. 개발 서버 실행:

```bash
npm start
```

이후 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 애플리케이션을 확인할 수 있습니다.

## 빌드 방법

프로덕션 배포를 위한 빌드:

```bash
npm run build
```

빌드된 파일은 `build` 폴더에 생성됩니다. 이 파일들을 정적 웹 서버를 통해 호스팅할 수 있습니다.

## 프로젝트 구조

- `public/` - 정적 파일 (HTML, 이미지, 폰트 등)
- `src/` - React 소스 코드
  - `components/` - 재사용 가능한 컴포넌트
  - `pages/` - 페이지 컴포넌트
  - `App.js` - 주요 애플리케이션 컴포넌트
  - `index.js` - 진입점
