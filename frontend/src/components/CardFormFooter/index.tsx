import { ReactNode } from "react";
import { FormFooter } from './styles';

interface CardFormFooterProps {
    children: ReactNode
}

export function CardFormFooter({ children }: CardFormFooterProps) {
    return (
        <FormFooter>
            {children}
        </FormFooter>
    )
}