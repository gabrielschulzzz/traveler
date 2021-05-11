import { AiOutlineCheck } from 'react-icons/ai'
import { Container } from './styles'

interface OverlayMessageProps {
    text: string;
}

export function OverlayMessage({ text }: OverlayMessageProps) {
    return (
        <Container>
            <div>
                <AiOutlineCheck />
            </div>
            <p>{text}</p>
        </Container>
    )
}