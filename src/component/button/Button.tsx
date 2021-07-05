import React, {ReactElement} from 'react';
import styled, {css, ThemeProps} from 'styled-components';
import {ThemeItem} from '../../theme/type/ThemeItem';

type ButtonPropsType = ThemeProps<ThemeItem> & {
    children?: React.ReactChild;
    primary?: boolean;
    onClick?: () => void;
};

const StyledButton = styled.button<ButtonPropsType>`
    border-radius: 3px;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${(props: ButtonPropsType) => css`
        background: ${props.theme.button.backgroundColor};
        border: 1px solid ${props.theme.button.border};
        color: ${props.theme.button.color};
    `}

    ${(props: ButtonPropsType) =>
        props.primary &&
        css`
            background: ${props.theme.button.color};
            color: ${props.theme.button.backgroundColor};
        `}
`;

const Button = ({children, ...rest}: ButtonPropsType): ReactElement => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
