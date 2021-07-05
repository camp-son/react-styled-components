import React, {ReactElement, useState} from 'react';
import Button from './component/button/Button';
import {createGlobalStyle, css, ThemeProvider} from 'styled-components';
import {darkTheme} from './theme/darkTheme';
import {whiteTheme} from './theme/whiteTheme';
import {ThemeItem} from './theme/type/ThemeItem';

const GlobalStyled = createGlobalStyle`
    body {
        ${(props: {theme: ThemeItem}) => css`
            background: ${props.theme.cover};
        `}}
`;

const App = (): ReactElement => {
    const [theme, setTheme] = useState<ThemeItem>(darkTheme);

    const onChange = (theme: ThemeItem) => {
        setTheme(theme);
    };

    return (
        <>
            <Button theme={theme} onClick={() => onChange(darkTheme)}>
                까망
            </Button>
            <Button theme={theme} onClick={() => onChange(whiteTheme)}>
                하양
            </Button>
            <ThemeProvider theme={theme}>
                <GlobalStyled />
                <Button theme={theme}>스타일 컴포넌트</Button>
                <Button theme={theme}>스타일 컴포넌트</Button>
            </ThemeProvider>
        </>
    );
};

export default App;
