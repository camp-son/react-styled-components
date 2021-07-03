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
