import { ReactNode } from 'react';
import { FormBody } from './styles';

interface CardFormBodyProps {
    children: ReactNode;
}

export function CardFormBody({ children }: CardFormBodyProps) {
    return (
        <FormBody>
            {children}
        </FormBody>
    )
}