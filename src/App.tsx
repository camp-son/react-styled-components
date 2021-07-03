import React, {ReactElement} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './component/button/Button';

const App = (): ReactElement => {
    return (
        <div className="App">
            <header className="App-header">
                <Button>스타일 컴포넌트</Button>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
