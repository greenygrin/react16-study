# Hello react

## 설치 프로그램

1) Node.js : 최신 버전X 안정버전 다운로드
- npm 명령
- react가 내부적으로 테스트 환경 구동을 위해 사용
2) Yarn (필수X)
	npm이 개선된 형태
3) 에디터
	notepad
	vim
	sublime text
	edit plus
	atom
	Visual Studio Code - 수업에서 사용


## 작업폴더에서 명령창 열기

- cmd.exe : 
- 폴더 빈 곳에서 shift + 마우스 우클릭 후 '여기에 Powershell 열기' 선택

```shell
cd 폴더경로
```

## 패키지 관리자 (npm, yarn)

개발과정에서 필요한 패키지(혹은 플러그인)의 다운로드, 업데이트, 제거 등을 담당하는 명령어

### 설치하기

```shell
npm install 패키지이름 --save
```
```shell
yarn add 패키지이름
```

### 삭제하기

```shell
npm uninstall 패키지이름 --save
```
```shell
yarn remove 패키지이름
```

### 업그레이드

```shell
npm upgrade 패키지이름
```

> --save?
재배포 불가한 패키지 정보 저장을 위해
package.json : 사용한 패키지 리스트업
npm install package


## 리액트 프로젝트 생성하기

```shell
npm create react-app 프로젝트이름
```
```shell
yarn create react-app 프로젝트이름
```

> 프로젝트 이름에 대문자/한글/띄어쓰기 사용X


## 생성된 프로젝트 실행하기

명령창 상에서 프로젝트 폴더 안으로 진입

cd 프로젝트이름


## 실행

npm start
혹은
yarn start


## hello.js 파일 참조
```shell
function hello() { ... }
export default hello;

import my_hello form "./hello";
my_hello();
```


## VSCode 확장기능 설치

### 1) 기본설치
- Korean Language Pack for Visual Studio Code
- Markdown All in One
- Markdown Preview Github Styling

### 2) Javascript 및 React 도구
- ESLint : 자바 스크립트 문법 및 코드 스타일 검사 도구
- Reactjs Code Snippets : 리액트 컴포넌트 및 라이프사이클 함수를 작성할 때 단축 단어를 사용하여 간편하게 코드를 자동으로 생성해 낼 수 있는 코드 조각 모음. 제작자가 charalampos karypidis인 것 추천
- Prettier-Code formatter : 코드 스타일을 자동으로 정리해주는 도구

### 3) ESLint 설정
명령프롬프트를 관리자 권한으로 열고 다음의 명령들을 수행한다.

<kbd>Win</kbd>+<kbd>R</kbd> > 'cmd' 입력 후 <kbd>Shift</kbd>+<kbd>Enter</kbd>

```shell
npm install -g eslint
npm install --save-dev babel-eslint
npm install --save-dev eslint-plugin-react
```

### 4) VSCode 설정 추가
설정 > settings.json에서 편집
```json
{
	"javascript.validate.enable" : false,
	"eslint.enable" : true
}

### 6) ES6 문법 인식을 위한 설정 파일 추가
프로젝트 폴더에 `.jshintrc` 파일을 추가하고(에디터에서 파일 추가) 아래의 내용을 명시
```js
{
	"esversion": 6
}
```
> 향후 이 파일을 모든 프로젝트 안에 복사해 넣으세요


## Snippets

새로운 js 파일
'rsc' 입력 후 <kbd>tab</kbd> : 기본 코드 자동 생성
'rscp' 입력 후 <kbd>tab</kbd> : 기본 코드 + props


## Prettier

<kbd>F1</kbd> > 문서서식 > Prettier 선택 : 코드 자동 정렬


<hr />

# React Basic

Virtual DOM

Component : HTML 구조에서 최소한의 기능단위로 나눈 영역 - 하나의 js
하나의 컴포넌트는 다른 하위 컴포넌트를 포함할 수 있다


## MVC 패턴

- Model -> 데이터구조

- View -> 화면UI

===> React

Ajax --> Model (JSON)

View --> Component

Container --> Controller

Module --> observer

- Controller -> 요청,응답 처리(제어)