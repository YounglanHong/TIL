# UUID(Universally Unique Identifier, 범용 고유 식별자)

* 컴퓨터 시스템 내에서 *고유한 객체를 식별*하기 위해 사용하는 값(`128 비트`(`16 바이트`))
* 중복될 확률은 0이 아니지만, 충분히 0에 가깝기 떄문에 고유성 보장

* 구조
  
  ```
  123e4567-e89b-12d3-a456-426614174000
  ```
  * 8 - 4 - 4 - 4 - 12 구조
  * 하이픈(`-`) 4개와 16진수 32개. 총 36개 문자

    ※ 저장할 떄는 하이픈(`-`) 제외

* 버전 
  * 가장 많이 사용하는 버전은 **UUID 4**
  * 122비트를 모두 무작위로 생성(4비트는 버전 표기)

* 특징 및 단점

  * 충돌 가능성이 낮아 일부 값만 랜덤하게 생성하고, 나머지는 *고정된 값* 사용 가능

    ex) 앞 12 글자 타임스탬프

  * 4바이트를 사용하는 식별자(데이터 베이스 auto increment)보다 *검색, 추가, 삭제 속도가 느리다*.
  * 무작위로 생성한 글자들이기 떄문에 UUID를 통한 *정보 식별이 어렵다*.


* 사용 예시 - node.js 라이브러리 [uuid](https://www.npmjs.com/package/uuid)

  ```js
  npm install uuid

  // uuid 생성
  import { v4 as uuidv4 } from 'uuid';
  uuidv4();
  // '109156be-c4fb-41ea-b1b4-efe1671c5836'

  // 버전 4 옵션
  let v4options = {
      random: [...]// 16개의 랜덤 바이트값(0-255)의 배열
      rng: // random 변수를 대체할 16개의 랜덤 바이트값을 반환하는 함수
  }
  uuidv4(v4options); 
  // '109156be-c4fb-41ea-b1b4-efe1671c5836'
  ```

***

### Reference

[UUID | Wiki](https://en.wikipedia.org/wiki/Universally_unique_identifier)

[학교에서 알려주지 않는 17가지 실무 개발 기술](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791162242988)

[Node.js & uuid](https://fred16157.github.io/node.js/nodejs-library-uuid/)