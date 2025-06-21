const fs = require('fs-extra');
const path = require('path');

const sourceCssDir = path.join(__dirname, '../public/assets/css');
const targetCssDir = path.join(__dirname, '../src/assets/css');

async function copyCssFiles() {
  try {
    console.log('CSS 파일 복사를 시작합니다...');
    
    // src/assets/css 디렉토리가 없으면 생성
    await fs.ensureDir(targetCssDir);
    
    // public/assets/css/main.css가 존재하면 src/assets/css로 복사
    const mainCssSource = path.join(sourceCssDir, 'main.css');
    const mainCssTarget = path.join(targetCssDir, 'main.css');
    
    if (fs.existsSync(mainCssSource)) {
      await fs.copy(mainCssSource, mainCssTarget);
      console.log('main.css 파일이 성공적으로 복사되었습니다!');
    } else {
      console.log('main.css 파일을 찾을 수 없습니다. 확인 필요합니다.');
      console.log('찾으려는 경로:', mainCssSource);
    }
  } catch (err) {
    console.error('CSS 파일 복사 중 오류가 발생했습니다:', err);
  }
}

// 스크립트 실행
copyCssFiles();
