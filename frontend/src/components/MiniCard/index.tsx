import { ReactNode } from 'react';
import { Container } from './styles';

interface MiniCardProps {
    children: ReactNode;
}

export function MiniCard({ children }: MiniCardProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}