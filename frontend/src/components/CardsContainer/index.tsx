import { ReactNode } from "react";
import { Container } from './styles';

interface CardsContainerProps {
    children: ReactNode
}

export function CardsContainer({ children }: CardsContainerProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}