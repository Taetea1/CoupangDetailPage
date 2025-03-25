## 🚚CoupangDetailPage

> **목차**
> 1. [프로젝트 기술 스택 및 개발 환경](#프로젝트-기술-스택-및-개발-환경)
> 2. [시연 영상](#시연-영상)
> 3. [소개](#소개)
> 4. [화면 영상](#화면-영상)
> 5. [주요 Component](#주요-Component)
> 6. [사용된 라이브러리 및 API](#사용된-라이브러리-및-API)

</br>

## 🔍프로젝트 기술 스택 및 개발 환경
### 🛠️기술 스택

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JSX](https://img.shields.io/badge/JSX-323330?style=for-the-badge&logo=jsx&logoColor=F7DF1E)
<img src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" />



### 💻개발 환경
<img src="https://img.shields.io/badge/visual%20studio%20code-%23007ACC.svg?&style=for-the-badge&logo=visual%20studio%20code&logoColor=white" /> <img src="https://img.shields.io/badge/github-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" />


<br>

## 📝소개
<img width="1280" alt="Image" src="https://github.com/user-attachments/assets/f89caa46-bcc3-4d33-a479-923ed03e7293" />

<br><br>

반복되는 요소를 컴포넌트화하여 리액트로 재구성한 쿠팡상세페이지입니다.

<br>

## 💎화면 영상

### 1️⃣개수 수정
![Image](https://github.com/user-attachments/assets/b3308ef6-84af-459d-9d2d-577dfd964b67)
- 개수 변경시 해당 개수에 맞게 가격 변경

<br>

### 2️⃣hover시 메인이미지 변경
![Image](https://github.com/user-attachments/assets/6924bd6c-294f-4cc5-b7c9-c2f4279ac96b)
- 오른쪽 작은 이미지 hover시 메인이미지 변경
- 왼쪽에 색상 선택 이미지 hover시 메인이미지 변경하고, 마우스를 떼면 오른쪽에서 선택되었던 원래 메인이미지로 변경

<br>

### 3️⃣클릭시 해당 종류로 변경
![Image](https://github.com/user-attachments/assets/ca751ad0-9cc6-4b25-a8a8-380bfdd8e6ca)
- 왼쪽에 색상 선택 이미지 클릭시 해당 종류의 이미지들로 데이터 변경

<br>

### 4️⃣type에 따라 Swiper 모양 변경
  4-1)![Image](https://github.com/user-attachments/assets/e30676d6-fd8c-4052-bfef-190a45366f54)
  - 같은 컴포넌트를 사용하여 다른 스타일 적용
  - 위에는 hover시 파란글자와 navigation 보이기, 이미지 hover시 scale
  - 아래는 필요한 내용 다 나타내기

  4-2)![Image](https://github.com/user-attachments/assets/cf1ffa3d-1e4c-4d29-9b23-399b7fb9a0b9)
  - 같은 컴포넌트로 다른 스타일 적용
  - 위에는 hover시 navigation나타나기 및 파란글자, 이미지 hover시 scale
  - 아래는 hover시 글자에 underline, 스와이퍼 없애고 필요한 부분만 삽입
  
  4-3)<br>
  ![Image](https://github.com/user-attachments/assets/05ed03be-dbfe-4c87-b9d0-653ff2bdeaf0)
  - 같은 컴포넌트로 다른 스타일 적용


  
<br>

### 5️⃣상품상세 및 탑버튼
![Image](https://github.com/user-attachments/assets/31d9de4c-dd93-4477-9b70-a38e52f8261d)
- 상세정보 더보기/접기 가능
- Top버튼 클릭시 맨 위로 부드럽게 이동

<br>

### 6️⃣상품평
![Image](https://github.com/user-attachments/assets/be17fb77-d8cc-4614-96f6-2e4902b8ee5d)
- 하나의 컴포넌트로 type에 따라 이미지 스타일 변경
- 하나의 컴포넌트로 type에 따라 리뷰 스타일 변경

<br>

### 7️⃣상품문의
![Image](https://github.com/user-attachments/assets/53d7144a-5f2c-4ed0-84e0-f0b2d2138fbd)
- 상품문의 클릭시 해당 정보 출력
- 하나의 컴포넌트로 type에 따라 질문 또는 답변으로 출력

<br>

### 8️⃣반품안내
![Image](https://github.com/user-attachments/assets/e633a27d-13fb-4b1a-a595-b9b0c3cf7c43)
- 제목과 내용만 있는 하나의 컴포넌트로 스타일이 다른 테이블 구성
  - flex가 있는 테이블과 상세내용이 있는 테이블, 이렇게 2가지 테이블로 나눔
- 상품인증정보 컴포넌트로 데이터만 다르게 사용

<br>

### 9️⃣새로고침시 랜덤
![Image](https://github.com/user-attachments/assets/4725f92b-2418-4798-b554-b69760bb685e)
- 데이터를 랜덤으로 돌려 새로운 데이터도 앞에서 볼 수 있도록 구성

<br>

### 🔟반응형
![Image](https://github.com/user-attachments/assets/a78a2054-b01c-44ed-856e-aea1546911d5)

<br>

## 💫주요 Component
### MainPage.js
```jsx
const MainPage = () => {
  return (
    <div className="main-wrap">
      {/* 종류 카테고리 */}
      <ul className="coupang-tag-box">
        {tagCategory.map((cate, i) => (
          <CoupangTag key={i} name={cate.name} type={cate.type} />
        ))}
      </ul>

      <div className="flexbox">
        {/* 메인 탑부분 */}
        <MainTop />
      </div>

      {/* 함께 비교하면 좋을 상품 */}
      <div className="global-sale">
        <SwiperProduct
          title="함께 비교하면 좋을 상품"
          sub="광고"
          type="deleteEl"
        />
      </div>

      {/* 쿠팡 오늘의 판매자 특가 */}
      <div className="toygate-sale">
        <SwiperProduct type="red" title="오늘의 " colorText="판매자 특가" />
      </div>

      {/* 해당 상품 카테고리 */}
      <Category />

      <div className="with-product">
        {/* 다른 고객이 함께 구매한 상품 */}
        <div className="global-sale">
          <SwiperProduct title="다른 고객이 함께 구매한 상품" type="deleteEl" />
        </div>

        {/* 토이게이트의 다른 상품들 */}
        <div className="toygate-sale">
          <SwiperProduct
            title="토이게이트의 다른 상품들"
            type="deleteEl-dif"
            scale="false"
          />
        </div>
      </div>

      {/* 연관 추천 상품광고 */}
      <div className="global-sale">
        <SwiperProduct title="연관 추천 상품" sub="광고" type="deleteEl" />
      </div>

      {/* 글로벌 특가 */}
      <div className="global-sale">
        <SwiperProduct
          type="purple"
          title="전세계 핫딜 "
          colorText="로켓직구 글로벌특가"
          num={7}
        />
      </div>

      <div className="relation-product-box">
        <div className="relation-product-title">이 상품과 관련된 카테고리</div>
        <div className="link-box">
          <a href="https://www.coupang.com/np/categories/333113">
            업라이트피아노
          </a>
          <div className="relation-product-link"></div>
          <a href="https://www.coupang.com/np/categories/333114">
            그랜드피아노
          </a>
        </div>
      </div>

      <Top />
    </div>
  );
};

export default MainPage;

```
- type을 넘겨서 SwiperProduct 컴포넌트 하나로 여러 스타일의 요소들 생성

<br>
<br>

### AdditionalProduct.jsx
```jsx
const AdditionalProduct = (props) => {
  const { type, scale, item } = props;
  return (
    <div>
      <div className="image-wrap">
        <img
          className={`image-box ${
            scale === "false" || type !== "deleteEl" ? "" : "image-box-scale"
          }`}
          src={item.src}
          alt="상품이미지"
        />
      </div>

      <div
        className={
          type === "deleteEl" || type === "deleteEl-dif"
            ? "deleteElement"
            : "badge"
        }
      >
        특가진행중
      </div>
      <div
        className={`product-name ${
          type === "deleteEl"
            ? "product-name-blue"
            : scale === "false"
            ? "title-botton-line"
            : ""
        }`}
      >
        {item.title}
      </div>
      <div
        className={
          type === "deleteEl" || type === "deleteEl-dif"
            ? "deleteElement"
            : "percent-price"
        }
      >
        <div className="wow">와우할인가</div>
        <div className="origin-price">
          {item.sale}% <span>{item.orginPrice}</span>
        </div>
      </div>
      <div className="now-price">{item.price}원</div>
      <div
        className={
          type === "deleteEl" || type === "deleteEl-dif"
            ? "deleteElement"
            : "arrive"
        }
      >
        {item.arriveDate} 도착 예정
      </div>
      <div
        className={
          type === "deleteEl" || type === "deleteEl-dif"
            ? "deleteElement"
            : "free-delievery"
        }
      >
        무료배송
      </div>
      {item.rate ? (
        <>
          <Rate allowHalf defaultValue={item.rateStar} disabled />
          <span className="rate-text">({item.rate})</span>
        </>
      ) : (
        ""
      )}
      <br />
      <Progress
        className={
          type === "deleteEl" || type === "deleteEl-dif" ? "deleteElement" : ""
        }
        percent={50}
        strokeColor="#454f5b"
        format={() => (
          <span className="custom-progress-text">{item.percent}% 남음</span>
        )}
        style={{ width: 160 }}
      />
    </div>
  );
};

export default AdditionalProduct;

```
- SwiperProduct 컴포넌트 안에 존재
- 상품 하나 자체를 컴포넌트화시켜 type에 따라 들어가는 내용을 변경

<br>


### ProductInfoMark.jsx
```jsx
const ProductInfoMark = (props) => {
  const { subtitle, content } = props;

  return (
    <>
      <div className="table-element-box">
        {subtitle ? (
          <>
            <div className="subtitles">{subtitle}</div>
            <div className="content">{content}</div>
          </>
        ) : (
          <>
            <div className="content"></div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductInfoMark;
```
- 하나의 컴포넌트로 여러 모양의 테이블 생성

<br>

### ImgElement.jsx
```jsx
const ImgElement = (props) => {
  const { item, type } = props;
  return (
    <div className="img-container">
      {type === "video" ? (
        <div className="overlay-container">
          <div className="blackImg"></div>
          <CaretRightOutlined className="custom-playicon" />
          <div className="video-time">0:14</div>
        </div>
      ) : type === "finary" ? (
        <div className="overlay-container">
          <div className="blackImg"></div>
          <div className="finary-number">409</div>
          <div className="finary-add">더보기{">"}</div>
        </div>
      ) : (
        <></>
      )}

      <img className="img-element-img" src={item} alt="상품이미지" />
    </div>
  );
};

export default ImgElement;
```
- 하나의 이미지 컴포넌트로 여러 모양의 이미지 생성


<br>

### ConfirmInfo.jsx
```jsx
const ConfirmInfo = (props) => {
  const { item } = props;

  return (
    <>
      <div className="confirm-box">
        <div className="confirm-img">
          <img src={item.src} alt="인증" />
        </div>
        <div className="confirm-info-wrap">
          <div className="confirm-title-box">
            <div>{item.title}</div>
            <a href={item.href}>{item.bluetext}</a>
          </div>
          <div className="confirm-content">{item.content}</div>
        </div>
      </div>
    </>
  );
};

export default ConfirmInfo;

```
- 하나의 인증정보 컴포넌트에 다른 데이터 삽입

<br>

## ⭐사용된 Hook
|컴포넌트|useState|useEffect|
|------|:---:|:---:|
|Top|O(Top버튼 상태관리)|O|
|SwiperProduct|O(각 네비게이션 상태관리)|O|
|ProductPrice|O(가격 및 개수 상태관리)|O|
|MainTop|O(이미지들 및 상품 번호, 호버된 이미지의 인덱스 상태관리)|X|
|ColorImgList|O(클릭된 색상 상태관리)|X|
|ProductInfoTable|O(필수 표기정보 더보기 상태관리)|X|
|ProductDetail|O(상품정보 접기/더보기 상태관리)|X|

<br>

## 📑사용된 라이브러리 및 API
### 라이브러리
- [Ant Design(antd)](https://ant.design/)
  - React를 위한 UI 컴포넌트 라이브러리
- [Swiper](https://swiperjs.com/)
  - 모바일과 웹에서 모두 사용할 수 있는 터치 기반의 슬라이더/카루셀 라이브러리



