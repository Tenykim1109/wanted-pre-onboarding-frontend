# 원티드 프리온보딩 프론트엔드 인턴십 - 사전과제

## 1. 배포 링크

<https://mjkim-todo.netlify.app>

## 2. 사용 라이브러리

- react v18.2.0
- react-router-dom v6.4.4
- axios v1.2.1
- styled-components v5.3.6

## 3. 프로젝트 구조

```bash
src
   ├── App.jsx # entrypoint
   ├── App.test.js
   ├── components
   │   ├── Todolist
   │   │   └── TodoItem.jsx
   │   └── styles # styled-components
   │       └── index.jsx
   ├── hooks
   │   ├── auth.js
   │   └── index.js
   ├── index.css
   ├── index.js
   ├── pages
   │   ├── Join
   │   │   └── index.jsx
   │   ├── Login
   │   │   └── index.jsx
   │   └── Todolist
   │       └── index.jsx
   └── utils
       ├── API.js
       └── index.js

```

## 4. 구현 내용

### 4.1 로그인 및 회원가입

**로그인**

![로그인](https://user-images.githubusercontent.com/48265915/206908539-f8f5b639-b543-474d-8b0e-56a9fdd18a45.gif)

<br />

**회원가입**

![회원가입](https://user-images.githubusercontent.com/48265915/206908546-caed4e95-d61e-4ff6-b2a4-415d0580f99e.gif)

<br />

**✅ Assignments 1**

- [x] 이메일 유효성 검사 (@ 포함 및 이메일 형식인지)
- [x] 비밀번호 유효성 검사(8자 이상인지)

**✅ Assignments 2**

- [x] 로그인 후 /todo 경로 이동
- [x] 로컬 스토리지에 JWT Token 저장

**✅ Assignments 3**

- [x] /todo 경로 접속시 JWT Token이 없을 경우 / 경로로 리다이렉트
- [x] / 경로로 접속시 JWT Token이 존재할 경우 /todo 경로로 리다이렉트

### 4.2 투두리스트 등록, 수정 및 삭제

**투두리스트 등록**

![투두리스트 ](https://user-images.githubusercontent.com/48265915/207027044-6723150a-55e3-4d60-9479-d583e4776507.gif)

<br />

**투두리스트 수정 및 삭제**

![투두리스트 수정,삭제](https://user-images.githubusercontent.com/48265915/207027068-fa32f162-cf0f-4752-9823-77918c34f353.gif)

**✅ Assignments 4**

- [x] 투두리스트 목록 출력
- [x] 입력창에 내용 입력후 엔터키 입력 또는 추가 버튼 클릭시 새로운 투두리스트 추가

**✅ Assignments 5**

- [x] 개별 아이템의 수정 버튼 클릭시 수정 모드 진입
- [x] 내용 수정후 제출 버튼 클릭시 개별 아이템 내용 수정(아무것도 입력하지 않았을 경우 alert 메시지 출력)
- [x] 삭제 버튼 클릭시 개별 아이템 삭제

## 5. 프로젝트 실행(로컬 환경)

1. 프로젝트 최상단 경로에 .env 생성

```bash
REACT_APP_API_URL = "https://pre-onboarding-selection-task.shop"
```

2. 프로젝트 패키지 설치

```shell
$ yarn
```

3. 프로젝트 실행

```shell
$ yarn start
```
