import React, {ReactElement} from 'react';
import styled, {css} from 'styled-components';

type ButtonPropsType = {
    children?: React.ReactChild;
    primary?: boolean;
};

const StyledButton = styled.button<ButtonPropsType>`
    border-radius: 3px;
    margin: 0 1em;
    padding: 0.25em 1em;

    border: 1px solid palevioletred;
    background: transparent;
    color: palevioletred;
    ${(props: ButtonPropsType) =>
        props.primary &&
        css`
            background: palevioletred;
            color: white;
        `}
`;

const ExtendsStyledButton = styled(StyledButton)<ButtonPropsType>`
    border: 1px solid palevioletred;
    background: white;
    color: red;
    ${(props: ButtonPropsType) =>
        props.primary &&
        css`
            background: red;
            color: white;
        `}
`;

const Button = ({children, ...rest}: ButtonPropsType): ReactElement => {
    return (
        <>
            <StyledButton {...rest}>{children}</StyledButton>
            <ExtendsStyledButton {...rest}>{children}</ExtendsStyledButton>
        </>
    );
};

export default Button;
