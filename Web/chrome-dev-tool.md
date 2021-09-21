# Chrome Dev Tool(크롬 개발자 도구)

> [크롬 개발자도구 소소한 기능 8개](https://www.youtube.com/watch?v=toXJLUa7i0Y)를 보고 정리한 내용입니다.

## 1. ⭐️Devtools Screenshot(개발자용 스크린샷)

* `cmd` + `shift` + `P` - `screenshot`(area, full, node 등)

## 2. ⭐️Coverage

* `cmd` + `shift` + `P` - `coverage` - Show coverage - reload - **usage visualization**

* 해당페이지 렌더링에 사용중인 CSS, JS 파일 정보를 알 수 있다(**메인페이지 로딩 최적화**)
* CSS, JS 파일 중 현재 페이지에 불필요한 코드를 비율과 색깔(빨강색)로 보여준다

  <a href="https://imgur.com/6YVnvKl"><img src="https://i.imgur.com/6YVnvKl.png" title="source: imgur.com" /></a>

## 3. ⭐️FPS meter

* `cmd` + `shift` + `P` - Show frames per seconds(FPS) meter

* **FPS(Frames-per-second)** 는 초당 프레임 수를 의미하며, **FPS meter**는 *GPU에서 사용하는 메모리양* 을 표시한다.

  <a href="https://imgur.com/cEj2f2L"><img src="https://i.imgur.com/cEj2f2L.png" title="source: imgur.com" /></a>

  <a href="https://imgur.com/tWikpEo"><img src="https://i.imgur.com/tWikpEo.png" title="source: imgur.com" /></a>

## 4. Sensor

* `cmd` + `shift` + `P` - Show sensors

* Gyroscope(자이로스코프), Accelerometer(가속도계), GravitySensor(중력센서) 등 모바일에 내장된 센서를 브라우저에서 테스트할 수 있다.

  <a href="https://imgur.com/H8lZbcr"><img src="https://i.imgur.com/H8lZbcr.png" title="source: imgur.com" /></a>

## 5. ⭐️Code Editor 

* Sources - Filesystem -- Add folder to workspace

* 개발자 도구에서 로컬 파일 수정 가능한 코드 에디터이다.
* Elements(Live server 로 오픈 시) 또는 Sources 탭에서 코드 바로 고칠 수 있다.


## 6. Live Expression

* Console - 👁(Create live expression) 

* Enter 키 없이 콘솔에서 *연산 결과를 빠르게* 확인할 수 있다.

  <a href="https://imgur.com/6zbOOti"><img src="https://i.imgur.com/6zbOOti.png" title="source: imgur.com" /></a>

## 7. Snippets

* `cmd` + `shift` + `P` - Show Snippets

* 여러 줄의 긴 코드는 Sources - Snippets 탭에서 실행해볼 수 있다.

## 8. Ad Block

* `cmd` + `shift` + `P` - Block ads on this site(Network)

* 광고가 제거된 버전의 사이트를 확인해볼 수 있다.