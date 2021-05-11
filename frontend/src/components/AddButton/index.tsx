import { ReactNode } from 'react';
import { ButtonElement } from './styles';
import { BsPlus } from 'react-icons/bs';

interface ButtonProps {
    children: ReactNode,
    onClick?: () => void;
}

export function AddButton({ children, onClick }: ButtonProps) {
    return (
        <ButtonElement onClick={onClick}>
            <BsPlus />
            {children}
        </ ButtonElement>

    )
}