import React, {ReactElement} from 'react';
import styled, {css} from 'styled-components';

type ButtonPropsType = {
    children?: React.ReactChild;
    primary?: boolean;
};

const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${(props: ButtonPropsType) =>
        props.primary &&
        css`
            background: palevioletred;
            color: white;
        `}
`;

const Button = ({children, ...rest}: ButtonPropsType): ReactElement => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
