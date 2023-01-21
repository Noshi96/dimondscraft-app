import styled from 'styled-components';
import React, { MouseEventHandler } from 'react';

interface Props {
    className?: string;
    variant: string;
    children?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface ButtonType {
    variant: string;
}

const UiButton = ({ className, variant, children, onClick }: Props) => {
    return (
        <ButtonContainer className={className} variant={variant} onClick={onClick}>
            {children}
        </ButtonContainer>
    );
};

const ButtonContainer = styled.button<ButtonType>`
  width: 280px;
  cursor: pointer;
  font-size: 20px;
  line-height: 20px;
  transition: all 0.3s ease-in-out;
  ${({ theme, variant }) => theme[variant]}
`;

export default UiButton;
