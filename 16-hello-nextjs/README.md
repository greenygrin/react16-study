# nextjs app 만들기

## 프로잭트 생성

```shell
yarn create next-app 프로젝트이름
```

## 의존성 설치
```shell
yarn add styled-components
yarn add babel-plugin-styled-components
yarn add next-routes
yarn addd axios
```

## styled-component 동작 설정

프로젝트 루트에 `.babelrc` 파일을 생성하고 다음의 내용을 작성한다

```js
{
    "presets": ["next/babel"],
    "plugins": [
        [
            "styled-components",
            {
                "ssr": true,
                "displayName": true,
                "preprocess": false
            }
        ]
    ]
}
```

## 프로젝트 구동하기

### 개발용

코드 변경사항 실시간 렌더링 가능함

```shell
yarn dev
```

### 프로젝트 완성 후 빌드

```shell
yarn build
```

### 빌드 결과물 구동하기

```shell
yarn start
```

<br />
--------------------------

# next.js

pages 폴더 내 js 파일 하나가 웹 페이지 하나

파일이름 = url (함수이름과 무관)

url을 제어하는 과정을 제외하고 react 컴포넌트와 동일


## 컴포넌트 생성

프로젝트 폴더 자체가 src 역할

프로젝트 폴더 내 components 폴더 바로 생성


<br />
----------------------

# nextjs 프로젝트 구조

|     1depth     |      2depth     |   설명    |
|----------------|-----------------|-----------|
| pages/         |                 | HTML Document, Application Container, 각족 페이지 등을 작성한다. |
|                | _document.js    | HTML Document 확장. `<head></head>` 내용 작성 용도 (생략가능) |
|                | _app.js         | Application Container. 공통의 레이아웃을 작성한다. (생략가능) |
|                | _error.js       | Error Page. (생략가능) |
|                | index.js        | Root Page. `/`로 시작되는 경로를 말한다. |
|                | hello.js        | Hello Page `/hello`로 시작되는 경로를 말한다. |
| static/        |                 | 정적 파일 (이미지, 파일 등)을 업로드 한다. |
| next.config.js |                 | Next.js의 환경 설정 파일이다. 라우팅 설정, typescript, less 등의 webpack 플러그인을 설정한다. |



<br />
-------------------------

# 동적 라우팅

```shell
yarn add next-routes
yarn add express
```