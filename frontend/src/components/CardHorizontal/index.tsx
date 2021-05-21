import { Container } from './styles';
import { BsExclamationCircle } from 'react-icons/bs';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

interface CardHorizontalProps {
    nome?: string;
    img?: string;
    description?: string;
    iconEdit?: boolean;
    iconDelete?: boolean;
    handleDelete?: () => void;
    handleEdit?: () => void;
}

export function CardHorizontal({ description, img, nome, iconDelete, iconEdit, handleEdit, handleDelete }: CardHorizontalProps) {
    return (
        <Container>
            {
                iconDelete
                    ? <div className="iconDelete" onClick={handleDelete}>
                        <AiOutlineDelete />
                    </div>
                    : null
            }

            {
                iconEdit
                    ? <div className="iconEdit" onClick={handleEdit}>
                        <AiOutlineEdit />
                    </div>
                    : null
            }
            <div className="card-text">
                <div className="badge">
                    <BsExclamationCircle />
                    <p>Destaque</p>
                </div>
                {nome
                    ? <h4>{nome}</h4>
                    : <h4>Nenhum destaque cadastrado.</h4>
                }
                {description
                    ? <p className="description">{description}</p>
                    : <p className="description">Que tal destacar alguma localidade que seja a favorita dos turistas?</p>
                }
            </div>

            <div>
                {img ? <img src={img} alt="" /> : <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt="" />}

            </div>
        </Container>
    )
}