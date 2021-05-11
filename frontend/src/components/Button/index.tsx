import { ReactNode } from 'react';
import { ButtonElement } from './styles';

interface ButtonProps {
    children: ReactNode,
    onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
    return (
        <ButtonElement onClick={onClick}>
            {children}
        </ ButtonElement>

    )
}