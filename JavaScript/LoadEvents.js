
   // (ref: https://ko.javascript.info/onload-ondomcontentloaded)
   // (ref: https://www.breck-mckye.com/blog/2014/04/document-loading-and-DOM-lifecycle-events/)
    /*  1. DOMContentLoaded */
    
      document.addEventListener("DOMContentLoaded", () => {
        alert("DOM이 준비되었습니다!"); // 2️⃣
      });
  
      alert("라이브러리 로딩이 끝나고 인라인 스크립트가 실행되었습니다."); // 1️⃣
    
    /* 2. window.onload */
      window.onload = () => {
        // window.addEventListener('load', (event) => { 와 동일
        alert("페이지 전체가 로드되었습니다.");

        // 이번엔 이미지가 제대로 불러와 진 후에 alert창이 실행됩니다.
        alert(`이미지 사이즈: ${img.offsetWidth}x${img.offsetHeight}`);
      };

    // <img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0" />

    /* 3. window.onunload */
      let analyticsData = { /* 분석 정보가 담긴 객체 */ };

      window.addEventListener("unload", () => {
        navigator.sendBeacon("/analytics", JSON.stringify(analyticsData))
      };

    /* 4. window.onbeforeunload */
      window.onbeforeunload = () => {
        return false;
      };

    /* 5. readyState: current loading state */
      function work() { /*...*/ }

      if (document.readyState == "loading") {
        // 문서 로딩 중
        document.addEventListener("DOMContentLoaded", work);
      } else { 
        // else if(document.readyState == "interactive") // 문서 불러오는중
        // else if(document.readyState == "complete")    // 외부 리소스까지 모두 호출 완료
        // DOM 완성
        work();
      }