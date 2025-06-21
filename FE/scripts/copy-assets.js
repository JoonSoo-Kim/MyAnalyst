const fs = require('fs-extra');
const path = require('path');

// 소스 및 대상 디렉토리 경로 설정
const sourceDir = path.join(__dirname, '../../fe/assets');
const publicTargetDir = path.join(__dirname, '../public/assets');
const srcTargetDir = path.join(__dirname, '../src/assets');

// 자산 복사 함수
async function copyAssets() {
  try {
    console.log('에셋 복사를 시작합니다...');
    
    // 대상 디렉토리가 없으면 생성
    await fs.ensureDir(publicTargetDir);
    await fs.ensureDir(srcTargetDir);
    
    // assets 디렉토리 복사 (public용)
    if (fs.existsSync(sourceDir)) {
      await fs.copy(sourceDir, publicTargetDir);
      console.log('에셋이 public 폴더에 성공적으로 복사되었습니다!');
      
      // CSS 파일만 src/assets로도 복사
      const cssSourceDir = path.join(sourceDir, 'css');
      const cssTargetDir = path.join(srcTargetDir, 'css');
      
      if (fs.existsSync(cssSourceDir)) {
        await fs.ensureDir(cssTargetDir);
        await fs.copy(cssSourceDir, cssTargetDir);
        console.log('CSS 파일이 src/assets 폴더에도 복사되었습니다!');
      }
    } else {
      console.log('소스 디렉토리를 찾을 수 없습니다:', sourceDir);
      console.log('기본 에셋 폴더 구조를 생성합니다.');
      
      // 기본 폴더 구조 생성 (public용)
      await fs.ensureDir(path.join(publicTargetDir, 'css'));
      await fs.ensureDir(path.join(publicTargetDir, 'img'));
      await fs.ensureDir(path.join(publicTargetDir, 'js'));
      await fs.ensureDir(path.join(publicTargetDir, 'vendor'));
      
      // src 디렉토리용 기본 구조도 생성
      await fs.ensureDir(path.join(srcTargetDir, 'css'));
      await fs.ensureDir(path.join(srcTargetDir, 'img'));
      
      // public/assets/css/main.css가 존재하면 이를 src/assets/css/로 복사
      const publicMainCss = path.join(publicTargetDir, 'css', 'main.css');
      const srcMainCss = path.join(srcTargetDir, 'css', 'main.css');
      
      if (fs.existsSync(publicMainCss)) {
        await fs.copy(publicMainCss, srcMainCss);
        console.log('main.css 파일을 src/assets/css/로 복사했습니다.');
      }
      
      console.log('기본 에셋 폴더 구조가 생성되었습니다.');
    }
  } catch (err) {
    console.error('에셋 복사 중 오류가 발생했습니다:', err);
  }
}

// 스크립트 실행
copyAssets();
