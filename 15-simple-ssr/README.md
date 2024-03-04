# React vs SSR

## React

React는 물리적으로 존재하는 html 파일은 index.html가 유일

그 밖의 페이지들은 모두 js가 동작하면서 실시간으로 생성하는 결과물

js파일 최초 다운로드 된 이후 사용자의 컴퓨터에서 구동되기 때문에 속도가 빠르다.

단, 규모가 큰 사이트일 경우 js 파일도 용량이 커지므로 최초 로딩 속도가 느려짐 (한국에서는 체감할 정도는 아님)

모든 페이지가 단 하나의 페이지이므로 검색 엔진에 쥐약이다.


## SSR

물리적으로 존재하난 html 파일이 하나가 아니라, 모든 페이지를 따로 만든다면 검색 엔진 구현이 가능해진다 (웹 서버 상에 실제로 url이 다 존재하도록 만듦)

이러한 방식이 SSR (Server Side Render)

모든 URL이 물리적으로 존재함

URL로 접근한 페이지만 http로 내려받고 이후 내부 링크로 이동되는 페이지들은 리액트처럼 Ajax를 통해 local에서 실행된다.

> SSR Framework - Next.js
> (Backend 지식이 없더라도 구현할 수 있도록 만든 프레임워크)


--------------------------


# 서버사이드 렌더링(SSR)

## 01. 패키지 설치

```shell
yarn add webpack-node-externals
```


## 02. 숨겨져 있는 웹 팩 설정 꺼내기

git commit을 수행하기 전에는 eject가 실행되지 않음.

> https://git-scm.com/ 파일 다운로드
> 
> 프로그램 설치 시 에디터 선택 - Use Visual Studio Code as Git's default editor
> 
> 설치 후 에디터 재실행

```shell
git add --all
git commit -m "웹팩 설정 전 초기화 처리"
yarn eject
```

> 명령의 실행 결과로 숨겨져 있던 웹팩 설정 파일들이 `/config` 폴더에 배치된다.


## 03. ssr 초기화 파일 작성

### /src/index.server.js

```js
/**
 * 서버사이드 렌더링용 초기화 파일
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Redering!!!</div>
);

console.log(html);
```


## 04. `/config/paths.js`에 작성한 초기화 파일에 대한 경로 명시

exports 되는 항목에 다음의 두 항목 추가

`module.exports = { ... }` 내부에 아래의 코드를 적용한다.

```js
// 서버사이드 렌더링 시작파일
ssrIndexJs: resolveApp('src/index.server.js'),
// 웹팩 처리 후 저장 경로
ssrBuild: resolveApp('dist')
```

## 05. 웹팩 설정 파일(`/config/webpack.config.server.js`) 생성

아래 내용 적용하기

> **ssr배포용코드**에 포함되어 있는 소스파일을 복사함.


## 06. 빌드 스크립트 파일(`/scripts/build.server.js`) 생성

아래 내용 적용하기

> **ssr배포용코드**에 포함되어 있는 소스파일을 복사함



## 07. 결과확인

### 1) 빌드하기

```shell
node scripts/build.server.js
```

> 명령이 잘 실행되고 나면 `/dist/server.js` 파일이 생성된다.

### 2) 실행하기

```shell
node dist/server.js
```

### 3) 단축 명령 등록

`/package.json` 파일의 "scripts" 부분에 다음의 두 줄 추가

```js
"scripts": {
    ...,
    "start-server": "node dist/server.js",
    "build-server": "node scripts/build.server.js"
}
```

이후 다음의 두 명령어로 서버 빌드 및 실행 가능함

```shell
yarn build-server
yarn start-server
```

## 08. Express 모듈을 통해 서버 페이지 작성하기

### 1) 패키지 추가

```shell
yarn add express
```

### 2) index.server.js

기본 코드를 **ssr배포용코드**에 포함되어 있는 소스파일로 대체

