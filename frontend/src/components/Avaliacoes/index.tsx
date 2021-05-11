import { Container } from './styles'
import { AiFillStar } from 'react-icons/ai';
import { PersonRating } from '../PersonRating';

interface AvaliacoesProps {
    handleReviewsModalOpen: () => void;
    handleAddReviewsModalOpen: () => void;
}

export function Avaliacoes({ handleReviewsModalOpen, handleAddReviewsModalOpen }: AvaliacoesProps) {
    return (
        <Container>
            <div className="header">
                <div className="header-first">
                    <h2>Avaliações</h2>
                    <div className="rating">
                        <AiFillStar />
                        <p>4.5</p>
                    </div>
                </div>
                <ul>
                    <li className="open" onClick={handleAddReviewsModalOpen}>Adicionar</li>
                    <li className="open" onClick={handleReviewsModalOpen} >Ver todas</li>
                </ul>
            </div>

            <PersonRating
                avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                name="Patrick Vieiras"
                avaliacao="Muito bom adorei, muitas variedades de salgados, cucas e sanduiches. Recomendo a todos."
                rating={5}
            />

            <PersonRating
                avatar="https://images.unsplash.com/photo-1594270410221-e6a33cbc6fb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                name="Maria Eduarda"
                avaliacao="Meu pedido veio frio. Odiei"
                rating={3}
            />

            <PersonRating
                avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                name="Andressa Barbosa"
                avaliacao="Parabens aos proprietarios e funcionarios pelo bom atendimento. Lugar incrivel!"
                rating={4}
            />
        </Container>
    )
}