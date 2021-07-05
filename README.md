# react & styled-components

> React와 styled-componentns 라이브러리를 이용하여 다양한 컴포넌트 운용 방법을 연습하고자 합니다.

## Configuration

-   기본 환경 구성은 React + Typescript를 기본으로 하고 기본적인 부분들만 추가하도록 하겠습니다.

### Initialize

-   CRA를 통해 Typescript 템플릿으로 리액트 앱을 생성합니다.

```
npx create-app-react react-styled-component --template typescript
```

### Formatting

-   ESlint 설치 및 초기화
    -   eslint 를 설치합니다.
        ```
        yarn add eslint --dev
        ```
    -   eslint를 초기화 하여 `.eslintrc.json` 파일이 생성되도록 합니다.
        ```
        npx eslint --init
        ```
-   Prettier
    -   prettier와 eslint를 연동하기 위한 eslint-config-prettier, eslint-plugin-prettier를 설치합니다.
        ```
        yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
        ```
-   VS Code를 사용하는 경우 `ESLint` `Prettier - Code fomatter` Extension을 설치합니다.

### Install styled-components

-   CSS in JS인 `styled-components`와 타입 선언이 된 `@types/styled-components`를 설치합니다.

    ```
    yarn add styled-components @types/styled-components
    ```

### Theme 관리

-   전역에서 사용하는 테마를 어떻게 관리해야할지 구조를 잡아보았습니다.

    ```
        - component // 컴포넌트 관리 폴더
        - theme     // 테마 관리 폴더
            - type  // 테마에서 사용될 타입 폴더
    ```

-   styled-components에서 제공하는 `ThemeProvider`를 사용하기로 하였습니다.
-   `theme` 폴더에 테마별 파일을 생성하였고, 그 안에 원하는 색상을 추가하였습니다.
-   Button 컴포넌트를 Presentational Component로 만들고 Container Component(여기에선 App)에서 필요한 prop과 이벤트를 내려주었습니다.
-   Theme 타입을 주는 것에서 약간의 어려움을 느꼈습니다. (어떤 식으로 줘야하지? ㅜ)

### 남은 기능 구현

-   Presentatinal / Container 패턴 형태로 좀 더 보완하기
-   변경된 테마를 기억하고 있다가 새로고침시에 반영하기
-   좀 더 다양한 컴포넌트와 styled-components 활용해보기
