import { Container } from './styles';
import { BsExclamationCircle } from 'react-icons/bs';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

interface CardHorizontalProps {
    nome: string;
    img: string;
    description: string;
    iconEdit?: boolean;
    iconDelete?: boolean;
}

export function CardHorizontal({ description, img, nome, iconDelete, iconEdit }: CardHorizontalProps) {
    return (
        <Container>
            {
                iconDelete
                    ? <div className="iconDelete">
                        <AiOutlineDelete />
                    </div>
                    : null
            }

            {
                iconEdit
                    ? <div className="iconEdit">
                        <AiOutlineEdit />
                    </div>
                    : null
            }
            <div className="card-text">
                <div className="badge">
                    <BsExclamationCircle />
                    <p>Destaque</p>
                </div>
                <h4>{nome}</h4>
                <p className="description">{description}</p>
            </div>

            <div>
                <img src={img} alt="" />
            </div>
        </Container>
    )
}