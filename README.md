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

-   Prettier와 ESLint를 이용하여 코드 컨벤션을 맞출 수 있습니다.
-   `prettier` `eslint` `eslint-config-prettier` 라이브러리를 dev 옵션으로 설치합니다.

    ```
    yarn add prettier eslint eslint-config-prettier --dev
    ```

    OR

    ```
    npm i prettier eslint eslint-config-prettier --save-dev
    ```

-   VS Code를 사용하는 경우 `ESLint` `Prettier - Code fomatter` Extension을 설치하여야 합니다.

### Install styled-components

-   CSS in JS인 `styled-components` 라이브러리를 설치합니다.

    ```
    yarn add styled-components
    ```

    또는

    ```
    npm i styled-components
    ```
