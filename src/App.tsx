import React, {ReactElement} from 'react';
import Button from './component/button/Button';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const App = (): ReactElement => {
    return (
        <Container>
            <Button>스타일 컴포넌트</Button>
            <Button primary>스타일 컴포넌트</Button>
        </Container>
    );
};

export default App;
