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

- [x] **Assignments 1**
- [x] 카페라떼
- [ ] 카푸치노

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
