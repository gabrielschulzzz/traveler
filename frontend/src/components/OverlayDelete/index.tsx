import { AiOutlineDelete } from 'react-icons/ai';
import { Button } from '../Button';
import { Container } from './styles';

interface OverlayDeleteProps {
    title: string;
    text: string;
    setDeletTriggered: (arg0: boolean) => void;
    handleDelete: () => void;
}

export function OverlayDelete({ title, text, setDeletTriggered, handleDelete }: OverlayDeleteProps) {
    return (
        <Container>
            <div className="deleteIcon">
                <AiOutlineDelete />
            </div>

            <h1>{title}</h1>
            <p>{text}</p>

            <div className="buttons">
                <Button onClick={() => setDeletTriggered(false)}>Nao</Button>
                <Button onClick={handleDelete}>Sim</Button>
            </div>
        </Container>
    )
}