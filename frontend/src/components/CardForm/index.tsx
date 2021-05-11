import { ReactNode } from 'react'
import { Container } from './styles'

interface CardFormProps {
    children: ReactNode
}

export function CardForm({ children }: CardFormProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}