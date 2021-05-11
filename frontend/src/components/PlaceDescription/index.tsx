import { Container } from './styles'

interface PlaceDescriptionProps {
    title: string;
    description: string;
}

export function PlaceDescription({ title, description }: PlaceDescriptionProps) {
    return (
        <Container>
            <h1>{title}</h1>
            <p>{description}</p>
        </Container>
    )
}